# Build Notes

## Page Block Model
- A page is `src/content/pages/*.md` with `title`, an optional `hero_block`, and `content_blocks[]`.
- `content_blocks[]` are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- The Markdown body of `.md` files in `src/content/pages/` is IGNORED. Prose must be placed inside a `TextBlock`'s `text_content` field, or the page must be authored as an `.astro` file.

## SEO Front Matter Rule
- `seo:` front matter is all-or-nothing. It must include all seven keys (`page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`). Nulls are acceptable, but `no_index` must be a boolean.

## Component Registration
- A new block component must be registered in TWO places:
  1. `src/layouts/Page.astro` (in the `componentMap`).
  2. `src/scripts/register-components.ts`.
- Failing to register the block in both locations will silently render nothing.

## Trailing Slash Convention
- `trailingSlash: "always"` is configured in `astro.config.mjs`. Every internal link must end in a trailing slash `/`.
