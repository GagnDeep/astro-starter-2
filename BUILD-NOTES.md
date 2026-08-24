# Build Notes

- **Page Block Model:**
  A page is `src/content/pages/*.md` with `title`, an optional `hero_block`, and `content_blocks[]`. Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock). The markdown body is IGNORED for `.md` pages — prose belongs inside a TextBlock's `text_content`, or the page must be written as `.astro` in `src/content/pages/`.
- **Registering Blocks:**
  A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`. Doing only one renders nothing silently.
- **SEO Front-matter:**
  The `seo:` front matter is all-or-nothing: include all seven keys (`page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`). Nulls are fine, but `no_index` must be a real boolean.
- **Trailing Slashes:**
  Trailing slash is "always": every internal link must end in a `/`.
