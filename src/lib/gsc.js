/**
 * Google Search Console helper for the weekly SEO audit.
 *
 * Exports a small surface used by the `buildwithriz-gsc-audit-fixes`
 * scheduled task. Authentication comes from either:
 *   - `<repo>/.gsc-service-account.json` (preferred, unattended)
 *   - `GSC_SERVICE_ACCOUNT_JSON` env var (raw JSON)
 *
 * The service account must be granted "Restricted" or "Full" access to
 * the GSC property `https://www.buildwithriz.com/` (URL-prefix, NOT
 * the `sc-domain:` form).
 *
 * The `googleapis` package is lazy-required so importing this file
 * is cheap and never fails even when the dep isn't installed — only
 * methods that hit the network will throw at call time.
 *
 * Usage:
 *   const gsc = require('./src/lib/gsc');
 *   if (!(await gsc.isAvailable())) return;
 *   const pages = await gsc.performanceByPage({ days: 28 });
 *   const inspection = await gsc.inspectUrl('https://www.buildwithriz.com/');
 *   const sitemaps = await gsc.listSitemaps();
 */
const fs = require('node:fs');
const path = require('node:path');

const SITE_URL = 'https://www.buildwithriz.com/';
const SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly'];

let clientPromise = null;

function loadGoogleApis() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('googleapis');
  } catch (err) {
    const e = new Error(
      "googleapis package is not installed. Run: npm install googleapis (or add to devDependencies)."
    );
    e.cause = err;
    throw e;
  }
}

function resolveCredentials() {
  const envJson = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (envJson) {
    try {
      return JSON.parse(envJson);
    } catch {
      throw new Error('GSC_SERVICE_ACCOUNT_JSON is set but is not valid JSON');
    }
  }
  const filePath = path.resolve(process.cwd(), '.gsc-service-account.json');
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  return null;
}

async function getClient() {
  if (clientPromise) return clientPromise;
  const creds = resolveCredentials();
  if (!creds) {
    const err = new Error('No GSC service-account credentials found');
    err.code = 'GSC_NO_CREDENTIALS';
    throw err;
  }
  const { google } = loadGoogleApis();
  clientPromise = (async () => {
    const jwt = new google.auth.JWT({
      email: creds.client_email,
      key: creds.private_key,
      scopes: SCOPES,
    });
    await jwt.authorize();
    return google.searchconsole({ version: 'v1', auth: jwt });
  })();
  return clientPromise;
}

/**
 * Cheap probe: resolves to true iff we have credentials AND the service
 * account can list sites (i.e. the token works and has at least one
 * property). Never throws — callers can use this to skip GSC-dependent
 * sections when the audit runs in an environment without credentials.
 */
async function isAvailable() {
  try {
    const sc = await getClient();
    const sites = await sc.sites.list({});
    const entries = (sites.data && sites.data.siteEntry) || [];
    return entries.some((s) => s.siteUrl === SITE_URL);
  } catch {
    return false;
  }
}

function daysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
}

/**
 * Performance aggregated by page over the last `days` window, ending
 * `days` from 2 days ago (GSC data lags ~2 days).
 * Returns rows of { url, clicks, impressions, ctr, position }.
 */
async function performanceByPage({ days = 28, rowLimit = 500 } = {}) {
  const sc = await getClient();
  const resp = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: daysAgo(days + 2),
      endDate: daysAgo(2),
      dimensions: ['page'],
      rowLimit,
    },
  });
  const rows = (resp.data && resp.data.rows) || [];
  return rows.map((r) => ({
    url: r.keys[0],
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: r.ctr,
    position: r.position,
  }));
}

/**
 * Performance broken down by query + page. Useful for spotting
 * striking-distance queries (position 8-20) on a per-page basis.
 */
async function performanceByQueryPage({ days = 28, rowLimit = 1000 } = {}) {
  const sc = await getClient();
  const resp = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: daysAgo(days + 2),
      endDate: daysAgo(2),
      dimensions: ['query', 'page'],
      rowLimit,
    },
  });
  const rows = (resp.data && resp.data.rows) || [];
  return rows.map((r) => ({
    query: r.keys[0],
    url: r.keys[1],
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: r.ctr,
    position: r.position,
  }));
}

/**
 * URL Inspection for a single URL. Returns the indexStatusResult shape
 * trimmed to the fields the audit cares about.
 */
async function inspectUrl(url) {
  const sc = await getClient();
  const resp = await sc.urlInspection.index.inspect({
    requestBody: { inspectionUrl: url, siteUrl: SITE_URL },
  });
  const idx =
    (resp.data &&
      resp.data.inspectionResult &&
      resp.data.inspectionResult.indexStatusResult) ||
    {};
  return {
    url,
    verdict: idx.verdict || null,
    coverage: idx.coverageState || null,
    indexingState: idx.indexingState || null,
    lastCrawl: idx.lastCrawlTime || null,
    pageFetch: idx.pageFetchState || null,
    robotsAllow: idx.robotsTxtState || null,
    googleCanonical: idx.googleCanonical || null,
    userCanonical: idx.userCanonical || null,
  };
}

/** List submitted sitemaps + submission/processing state. */
async function listSitemaps() {
  const sc = await getClient();
  const resp = await sc.sitemaps.list({ siteUrl: SITE_URL });
  return (resp.data && resp.data.sitemap) || [];
}

module.exports = {
  SITE_URL,
  isAvailable,
  performanceByPage,
  performanceByQueryPage,
  inspectUrl,
  listSitemaps,
};
