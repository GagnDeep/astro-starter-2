# Build Notes

## Page Block Model
- A page is typically `src/content/pages/*.md`.
- **Markdown Body:** The native markdown body is IGNORED for `.md` pages. All prose must go inside block components (e.g., inside a `TextBlock`'s `text_content`).
- **Registering New Blocks:** Any new block component must be added to BOTH `src/layouts/Page.astro` (in the `componentMap`) and `src/scripts/register-components.ts`. Missing one causes the block to silently fail to render.

## SEO Front-matter Rule
- `seo:` front-matter is all-or-nothing. Every block must include all 7 keys (nulls are fine, `no_index` must be a boolean):
  - `page_description`
  - `canonical_url`
  - `featured_image`
  - `featured_image_alt`
  - `author_twitter_handle`
  - `open_graph_type`
  - `no_index`
- Never add `<title>`, canonical, OG, robots or JSON-LD tags directly in a page.

## Trailing Slash Convention
- Every internal link across the site MUST end in a trailing slash (`/`).
