# Build Notes

## Page Block Model
- A page is a Markdown file in `src/content/pages/*.md` (or `.astro`).
- Content is built out of `content_blocks[]`, which are objects keyed by `_name` (e.g., `Hero`, `LeftRight`, `TextBlock`).
- The Markdown body is IGNORED for `.md` pages. Prose must go inside a `TextBlock`'s `text_content` or the page must be written as `.astro` in `src/content/pages/`.

## SEO Front-matter Rule
- `seo:` front-matter is all-or-nothing. You must include all seven keys:
  - `page_description`
  - `canonical_url`
  - `featured_image`
  - `featured_image_alt`
  - `author_twitter_handle`
  - `open_graph_type`
  - `no_index` (must be a real boolean)
- Nulls are permitted for optional string fields.

## Registering New Blocks
- When a new block component is created, it MUST be registered in two places:
  1. `src/layouts/Page.astro` (`componentMap`)
  2. `src/scripts/register-components.ts`
- Failing to register in both places will result in silent rendering failures.

## Trailing-Slash Convention
- The repository follows an "always" trailing slash convention (`trailingSlash: "always"` in Astro config).
- Every internal link must end in a `/`.
