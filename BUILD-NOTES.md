# Build Notes

## Page Block Model
- A page is typically defined in `src/content/pages/*.md` with a `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., `Hero`, `LeftRight`, `TextBlock`).
- **Markdown Body Ignored**: The markdown body is ignored for `.md` pages. All prose must belong inside a `TextBlock`'s `text_content`. Alternatively, the page must be written as `.astro` in `src/content/pages/`.

## SEO Front-matter Rule
- `seo:` front-matter is all-or-nothing. It requires all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`. Null values are acceptable, but `no_index` must be a boolean. Duplicates or missing keys can cause SEO issues as tags are injected centrally by `Layout.astro`.

## Registering New Blocks
- Any new block component must be added to **BOTH** of the following files:
  1. `src/layouts/Page.astro` within the `componentMap`.
  2. `src/scripts/register-components.ts`.
- Doing only one renders nothing, silently.

## Trailing Slash Convention
- `trailingSlash: "always"` is configured in `astro.config.mjs`. Every internal link must end in `/` to ensure one canonical URL per page and avoid redirect hops for crawlers.
