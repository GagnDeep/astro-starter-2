# Build Notes

## Page Block Model
- A page is generated from `src/content/pages/*.md` files containing a `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are defined as objects keyed by `_name` (e.g., `Hero`, `LeftRight`, `TextBlock`).
- **Crucially:** Markdown body content in `.md` files is ignored. All prose belongs inside a `TextBlock`'s `text_content`.

## Registering New Blocks
- When a new block component is created, it must be registered in **both**:
  1. `src/layouts/Page.astro` within the `componentMap`.
  2. `src/scripts/register-components.ts`.
- Failing to add it to both places results in silent rendering failures.

## SEO Front-matter Rule
- `seo:` front-matter is all-or-nothing.
- It requires exactly seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`.
- `null` values are acceptable, but `no_index` must be a valid boolean (`true` or `false`).

## Trailing Slash Convention
- `trailingSlash: "always"` is configured in `astro.config.mjs`.
- Every internal link must end in a trailing `/`.
