---
site: buildwithriz.com
git_branch: main
supabase_ref: husaqeymcvzthdznwhjs
content_format: markdown
---

# BuildWithRiz Site Registry

## Blog Schema (`blog_posts` table)

| Column | Type | Required | Notes |
|--------|------|----------|-------|
| `id` | uuid | auto | Primary key |
| `slug` | text | ✅ | URL slug (kebab-case) |
| `title` | text | ✅ | Article title |
| `description` | text | ✅ | Short description / excerpt |
| `date` | text | ✅ | ISO date: `2026-03-27` |
| `readTime` | text | ✅ | e.g. `9 min read` |
| `keywords` | text[] | ✅ | PostgreSQL text array |
| `heroImage` | text | ✅ | Path: `/images/blog/{name}.png` |
| `content` | text | ✅ | **Markdown** (rendered via ReactMarkdown) |
| `created_at` | timestamptz | auto | |
| `updated_at` | timestamptz | auto | |

## Image Hosting

- **Strategy**: Local file in `public/images/blog/`
- **Column**: `heroImage`
- **Path format**: `/images/blog/{slug}-hero.png`
- **Component**: `next/image` with `fill` prop (Image optimization enabled)
- **⚠️ CRITICAL**: Image file MUST be `git add`-ed and pushed to `main` — untracked files won't deploy

## Content Format

- **Type**: Markdown (with GFM tables, lists, blockquotes)
- **Renderer**: `ReactMarkdown` with `remarkGfm` plugin
- **Custom components**: h2, h3, p, ul, ol, table, thead, th, td, blockquote, strong, a, code
- **Tables**: ✅ Already styled via custom ReactMarkdown components

## Deployment

- **Git branch**: `main`
- **Host**: Vercel
- **Revalidation**: ISR with `revalidate = 3600` (1 hour)
- **Push command**: `git push origin main`

## Post-Insert Checklist

1. ☐ Image file exists in `public/images/blog/`
2. ☐ Image file is git-tracked (`git status` shows no `??`)
3. ☐ `heroImage` column matches the file path exactly
4. ☐ Push to `main` (NOT `master`)
5. ☐ Wait 90s, then verify `https://www.buildwithriz.com/images/blog/{file}.png` returns 200
