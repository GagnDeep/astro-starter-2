# Build Notes

## Page Block Model
A page is a markdown file located in `src/content/pages/*.md`. The markdown body is ignored.
Pages are built using an optional `hero_block` and an array of `content_blocks[]`. Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock). Prose belongs inside a TextBlock's `text_content`.

## SEO Front-Matter Rule
SEO front matter is all-or-nothing. If the `seo:` key is used, it must include all seven keys:
- `page_description`
- `canonical_url`
- `featured_image`
- `featured_image_alt`
- `author_twitter_handle`
- `open_graph_type`
- `no_index` (must be a real boolean)

Nulls are fine for everything except `no_index`.

## Block Registration
A new block component must be added in **two** places:
1. `src/layouts/Page.astro`'s componentMap
2. `src/scripts/register-components.ts`
Failing to register a block in both locations will cause it to render nothing, silently.

## Trailing-Slash Convention
The `trailingSlash` configuration is set to "always". Every internal link must end in a trailing slash (`/`).