# Build Notes

## Page Block Model
A page is a `.md` file in `src/content/pages/` containing a `title`, an optional `hero_block`, and an array of `content_blocks`. Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock). The markdown body is ignored for `.md` pages — prose must go inside a `TextBlock`'s `text_content`. Standalone pages not using blocks must be written as `.astro` in `src/pages/`.

## SEO Front-matter Rule
The `seo` front matter is all-or-nothing: include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`. Nulls are acceptable, but `no_index` must be a real boolean. SEO tags (title, canonical, OG, robots, JSON-LD) must not be added directly to pages.

## Component Registration
A new block component must be added to BOTH `src/layouts/Page.astro`'s componentMap and `src/scripts/register-components.ts`. Doing only one renders nothing silently.

## Trailing-Slash Convention
`trailingSlash` is set to `"always"`. Every internal link ends in `/`.
