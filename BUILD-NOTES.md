# BUILD NOTES

**Page Block Model**: A page is `src/content/pages/*.md` with `title`, optional `hero_block`, and `content_blocks[]`. Blocks are objects keyed by `_name` (Hero, LeftRight, TextBlock). The markdown body is ignored for `.md` pages. Prose belongs inside a TextBlock's `text_content`, or the page must be written as `.astro` in `src/content/pages/`.
**New Block Registration**: A new block component must be added to BOTH `src/layouts/Page.astro`'s componentMap and `src/scripts/register-components.ts`. Doing only one renders nothing.
**SEO Front-matter Rule**: `seo:` front matter is all-or-nothing. Include all seven keys (`page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`). Nulls are fine, but `no_index` must be a real boolean.
**Trailing-Slash Convention**: `trailingSlash` is "always". Every internal link must end in a trailing `/`. Canonical URLs are generated to match this.
