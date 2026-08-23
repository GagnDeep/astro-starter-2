# BUILD NOTES

- **Page Block Model**: A page is `src/content/pages/*.md` with a `title`, an optional `hero_block`, and `content_blocks[]`. Blocks are objects keyed by `_name` (Hero, LeftRight, TextBlock). Markdown bodies for `.md` pages are IGNORED. Prose belongs inside a TextBlock's `text_content`, or the page must be an `.astro` component in `src/content/pages/`.
- **SEO Front-Matter Rule**: The `seo:` front matter is all-or-nothing. Include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`. Nulls are acceptable; `no_index` must be a real boolean.
- **New Block Registration**: Any new block component must be registered in BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`. If not done in both places, it will silently fail to render.
- **Trailing Slash Convention**: `trailingSlash` is set to `"always"` in `astro.config.mjs` — every internal link must end in `/`.
