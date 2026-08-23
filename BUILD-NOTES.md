# Build Notes

- **Page Block Model**: A page is `src/content/pages/*.md` with `title`, an optional `hero_block`, and `content_blocks[]`. Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock). The markdown body is ignored for `.md` pages—prose must go inside a TextBlock's `text_content`, or the page must be written as `.astro` in `src/content/pages/`.
- **Component Registration**: A new block component must be registered in BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`. Doing only one renders nothing, silently.
- **SEO Front-Matter Rule**: `seo:` front matter is all-or-nothing. Include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`. Nulls are fine, but `no_index` must be a boolean. Never put head tags or JSON-LD manually in a page; use front-matter and extend `src/lib/seo/`.
- **Trailing-Slash Convention**: `trailingSlash` is set to "always" in `astro.config.mjs`. Every internal link must end in a `/`.
