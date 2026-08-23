# Build Notes

## Page Block Model
- A page is a markdown file (`src/content/pages/*.md`) containing a `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- The markdown body for `.md` pages is **completely ignored**. All prose must be placed inside a TextBlock's `text_content` or similar structure, or the page must be authored as `.astro` in `src/content/pages/`.

## SEO Front-matter Rule
- `seo:` front-matter configuration is **all-or-nothing**.
- It must include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`.
- Nulls are acceptable where applicable, but `no_index` must be a real boolean.
- Never place `<head>` tags or JSON-LD directly in a page.

## Registering New Blocks
- Any new block component must be registered in **BOTH** `src/layouts/Page.astro` (inside the `componentMap`) and `src/scripts/register-components.ts`.
- Failing to register the block in both locations will silently render nothing.

## Trailing Slash Convention
- The project enforces `trailingSlash: "always"` in `astro.config.mjs`.
- Every internal link must end with a `/` to avoid unnecessary redirects and ensure consistency.
