import fs from 'node:fs';
import path from 'node:path';

/**
 * Filesystem-based blog post loader.
 *
 * Posts live as markdown files under /src/content/blog/<slug>.md,
 * each with simple YAML frontmatter (string fields + a keywords array).
 * Parsing is done at build/request time and cached in memory so the
 * directory is only read once per server process.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  heroKey: string;
  keywords: string[];
  content: string;
}

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

let cache: BlogPost[] | null = null;

/**
 * Parse the minimal YAML-ish frontmatter format used in our markdown files.
 * Supports:
 *   key: "value"          (quoted string — quotes stripped, \" unescaped)
 *   key: value            (unquoted string)
 *   key:                  (start of list)
 *     - "item"            (list item)
 */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const [, fmText, body] = match;
  const lines = fmText.split(/\r?\n/);
  const data: Record<string, unknown> = {};

  let currentListKey: string | null = null;
  for (const line of lines) {
    if (!line.trim()) continue;

    // list item
    const listItemMatch = line.match(/^\s+-\s+(.*)$/);
    if (listItemMatch && currentListKey) {
      let val = listItemMatch[1].trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      }
      (data[currentListKey] as string[]).push(val);
      continue;
    }

    const kvMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kvMatch) continue;
    const [, key, rawVal] = kvMatch;
    const val = rawVal.trim();

    if (val === '') {
      // start of a list
      currentListKey = key;
      data[key] = [];
      continue;
    }

    currentListKey = null;
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      data[key] = val.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    } else {
      data[key] = val;
    }
  }

  return { data, body };
}

function readPostFile(slug: string): BlogPost | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, body } = parseFrontmatter(raw);

  return {
    slug: (data.slug as string) ?? slug,
    title: (data.title as string) ?? '',
    description: (data.description as string) ?? '',
    date: (data.date as string) ?? '',
    readTime: (data.readTime as string) ?? '',
    heroKey: (data.heroKey as string) ?? slug,
    keywords: Array.isArray(data.keywords) ? (data.keywords as string[]) : [],
    content: body.trim(),
  };
}

/**
 * Load all posts, sorted by date descending (newest first).
 * Results are cached in-process after the first call.
 */
export function getAllPosts(): BlogPost[] {
  if (cache) return cache;

  if (!fs.existsSync(POSTS_DIR)) {
    cache = [];
    return cache;
  }

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));
  const posts: BlogPost[] = [];
  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const post = readPostFile(slug);
    if (post) posts.push(post);
  }

  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  cache = posts;
  return cache;
}

/** Find a single post by slug, or null if missing. */
export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}

/** List of slugs, for generateStaticParams(). */
export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
