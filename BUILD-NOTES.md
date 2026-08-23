# Build Notes

- **Page Block Model**: A page is a `.md` or `.astro` file in `src/content/pages/` with a `title`, an optional `hero_block`, and `content_blocks[]`. For `.md` pages, the markdown body is ignored. Prose goes inside a block's `text_content`.
- **SEO Front-matter Rule**: `seo:` front-matter is all-or-nothing. Include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`. `no_index` must be a boolean; others can be null.
- **New Block Registration**: A new block must be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`. Doing only one results in the block not rendering.
- **Trailing-slash Convention**: Trailing slashes are set to "always" in `astro.config.mjs`. Every internal link must end in a `/`.
