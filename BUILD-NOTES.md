# Build Notes

## The Page Block Model

- A page is `src/content/pages/*.md` with a `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- The markdown BODY IS IGNORED for `.md` pages. All prose must go inside a `TextBlock`'s `text_content` or the page must be authored as an `.astro` file in `src/content/pages/`.
- Every new block component must be added to BOTH `src/layouts/Page.astro`'s componentMap and `src/scripts/register-components.ts`. Failing to do both means the block silently renders nothing.

## SEO Front-matter Rule

- The `seo:` block in front-matter is all-or-nothing. Include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
- Nulls are acceptable, but `no_index` must be a proper boolean.

## Trailing Slash Convention

- `trailingSlash: "always"` is configured in `astro.config.mjs`. Every internal link must end in `/`.
