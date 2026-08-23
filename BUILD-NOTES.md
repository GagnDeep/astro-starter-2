# Build Notes

- **Page Block Model**: A page is `src/content/pages/*.md` with `title`, optional `hero_block`, and `content_blocks[]`. Markdown body is ignored. Prose goes inside a block's `text_content` or the page must be written as `.astro` in `src/content/pages/`.
- **SEO Front-Matter Rule**: `seo:` front-matter is all-or-nothing and requires all 7 keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`. Nulls are allowed. `no_index` must be boolean.
- **New Block Registration**: A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`.
- **Trailing-Slash Convention**: `trailingSlash: "always"` in astro config. Every internal link ends in `/`.
