# buildwithriz daily content routine

> Versioned spec for the scheduled remote agent that runs daily.
> The routine prompt itself just says "follow `.agents/routines/daily-content.md`" — the actual logic lives here so it's reviewable and version-controlled.

## Mission

Land **one** meaningful change per run that helps move buildwithriz.com forward in Google. The dominant problem today is **indexation** (~7% of submitted URLs indexed), so the routine prioritizes work that helps existing pages get indexed before adding new pages.

## Pre-flight

1. Read `.agents/context/site-context.md` for brand voice + internal link map.
2. Read `.agents/context/target-keywords.md` for the keyword backlog and priority order.
3. Today's date in `YYYY-MM-DD` format — use for `date:` (new posts) and `updated_at:` (any edit).

## Priority lanes — pick the FIRST lane with work to do

### Lane A — Refresh stuck content (highest priority)

For every `src/content/blog/*.md`, determine state. **If `googleapis` is installed and `GSC_SERVICE_ACCOUNT_JSON` env var is set**, use `src/lib/gsc.js` for ground truth. Otherwise fall back to heuristics: a post is "likely stuck" if its `date` frontmatter is ≥21 days old, it has no `updated_at` frontmatter (or `updated_at` is ≥21 days old), and it hasn't been edited in `git log --since="21 days ago" -- src/content/blog/<slug>.md`.

If any post qualifies:
- Pick the oldest candidate (least-recently-refreshed wins ties).
- Expand by 30–50%: add original examples, an embedded comparison table, ≥3 tier-1 citations (`.gov`, `.edu`, established industry reports), and 2 new H2 sections that match specific long-tail queries (if GSC available, use `performanceByQueryPage` for that URL to find the actual queries it's being served on; otherwise pick reasonable variants of the primary keyword).
- Bump `updated_at: "YYYY-MM-DD"` to today.
- **Do NOT change `slug`, `title`, `description`, `date`, or `heroKey`.**
- Stop after one post.

### Lane B — Internal-link strengthening (medium priority)

Only run if Lane A has nothing to do.

- Identify the most-indexed pages on the site (the homepage `/` and the top blog post by `git log` recency or `updated_at`). Currently this is `src/content/blog/how-to-create-professional-invoice.md` — most-impressioned post per the 2026-05-11 GSC audit.
- Find 1–2 currently-underexposed posts (least recently linked-from) and add inline contextual links to them inside the indexed pages. Use anchor text from `.agents/context/target-keywords.md`. Never use "click here" or "read more".
- Update the `## Related guides` section if the target post isn't already listed.
- Stop after one file edit.

### Lane C — New post (lowest priority)

Only run if **both** of these are true:
- Lanes A and B have nothing to do.
- No new post has been published in the last 3 days (`git log --since="3 days ago" --name-only -- src/content/blog/` shows no new files).

- Pick the next unchecked topic in `.agents/context/target-keywords.md` Priority 1, 2, then 3 (in that order). Skip topics that already have a corresponding `.md` file.
- Write the post directly to `src/content/blog/<slug>.md` (markdown frontmatter + body).
- Add a matching `heroKey` entry in `src/components/blog/HeroSvg.tsx`: copy an existing entry, change the gradient + iconography to fit the topic. The new key must match the post's `heroKey` frontmatter.

**Frontmatter requirements (new posts):**

```yaml
---
slug: "<kebab-case>"
title: "<H1 title — 50-70 chars>"
description: "<140-160 char human description for cards>"
date: "<YYYY-MM-DD today>"
readTime: "<N min read>"
heroKey: "<must match HeroSvg.tsx entry>"
keywords:
  - "<5-7 keywords total>"
meta_title: "<≤55 chars, includes primary keyword, no '| BuildWithRiz' suffix>"
meta_description: "<140-155 chars, includes primary keyword + soft CTA>"
updated_at: "<YYYY-MM-DD today>"
---
```

**Body requirements (new posts):**
- 1,500–2,500 words.
- Mention "free, no signup, 100% in browser" within the first 100 words.
- 2–3 contextual internal links to existing posts/tools, using anchor text from `.agents/context/target-keywords.md`.
- Every statistic has an inline link to a real tier-1 or tier-2 source. If a source can't be found, omit the stat — never fabricate.
- `## Related guides` section with 3 internal links at the end.

## Hard constraints (all lanes)

- **Never more than 1 lane per run.** If Lane A fires, B and C are skipped.
- **Never more than 1 post created per run.** Indexation pressure is dominant.
- **Never delete or remove existing content.** Refreshes are additive only.
- **Never fabricate statistics, quotes, or citations.**
- **Never skip pre-commit hooks** (`--no-verify`) or `--no-gpg-sign`.
- **Never force-push.**
- **Avoid AI-tell phrasing:** "in today's fast-paced world", "navigate the complexities", "leverage", "delve into", "it's important to note", "a comprehensive guide to", "robust solution". Use the second-person ("you", "your") in the site's brand voice (read `.agents/context/site-context.md`).
- **Never write to Supabase.** This site is file-based (Next.js — content lives under `app/blog/ or content/ (inspect)` in the repo). The only legitimate target for new content is a git commit on the default branch. If you see a Supabase MCP connector attached to this routine, ignore it for content writes — that connector is shared across all routines but only `easyorder-bot` legitimately uses Supabase for content. Writing content to Supabase from this routine will contaminate the orderviachat database (verified incident: 2026-05-14 with online-image-shrinker).

## After the change

1. Run `npm run lint` — fix any errors before committing. If lint config doesn't exist or fails to install, run `npx tsc --noEmit` instead. Do not commit on lint failure.
2. Stage only the files you edited (no `git add -A`).
3. Commit with conventional format:
   - Refresh: `refresh(blog): <slug> — <one-line why>`
   - Internal link: `seo(blog): cross-links to <target-slug>`
   - New post: `feat(blog): add <topic> guide for freelancers`
4. Append the Claude co-author trailer.
5. Push to `origin/main` — Vercel auto-deploys. If push fails on auth, do not retry with embedded credentials; report the failure and exit cleanly.
6. Write a short report to stdout (no file artifact needed):
   - Which lane ran (A / B / C / skip)
   - File(s) changed + commit SHA
   - One-sentence justification

## When to skip

If all three lanes are clear (Lane C is rare to be empty — only when the entire keyword backlog is exhausted), write one line: "No work today — Lane A clear, Lane B saturated, Lane C in cooldown or backlog exhausted." Do not manufacture work.

## Gotchas (for future-you reading this)

- The site uses Next.js App Router. Blog posts live as markdown at `src/content/blog/<slug>.md` and are loaded by `src/lib/posts.ts`. Frontmatter parsing is custom — keep it minimal (string fields + a single list). Do not add nested YAML.
- `meta_title` and `meta_description` frontmatter ARE read by `generateMetadata()` (wired in commit `6126d50`). They override the visible `title` / `description` ONLY in `<title>`, OG, and Twitter card — the on-page heading still uses `title`.
- `updated_at` populates `dateModified` in the Article JSON-LD AND `openGraph.modifiedTime`. Always bump it on any edit.
- The `HeroSvg.tsx` `heroKey` union is the discriminator. If you add a post but forget the SVG entry, TypeScript will fail the Vercel build. Always pair the two.
- The Article schema's `image` field points at `/og?kind=blog&title=...` — a dynamic edge handler at `src/app/og/route.tsx`. No static OG file needed.
- Indexation health is tracked in `gsc-audit-*` reports if any exist; otherwise use URL Inspection via `src/lib/gsc.js` when creds are available.
