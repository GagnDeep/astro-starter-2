# Build Notes

## Page Block Model
- A page is `src/content/pages/*.md` with `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- The Markdown body of `.md` files is ignored; prose must go in `text_content` of a TextBlock, or the page must be `.astro` in `src/content/pages/`.

## Registration Rules
- A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` AND `src/scripts/register-components.ts`. Failure to register in both places will result in the block silently failing to render.

## SEO Front Matter
- The `seo:` block in front matter is all-or-nothing.
- If included, it must contain all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
- Nulls are acceptable for optional values; `no_index` must be a proper boolean.

## Trailing Slash
- Trailing slashes are set to `"always"`.
- Every internal link and canonical URL MUST end in a trailing slash `/` to avoid redirect hops.
