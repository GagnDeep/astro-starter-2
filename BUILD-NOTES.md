# Build Notes

- **Page Block Model**: Pages (`src/content/pages/*.md`) require a `title`, an optional `hero_block`, and an array of `content_blocks[]`. Each block is an object keyed by `_name` (e.g., Hero, LeftRight, TextBlock). The markdown body is ignored for `.md` pages; prose belongs inside a TextBlock's `text_content`. Otherwise, pages must be written as `.astro` in `src/pages/`.
- **SEO Front-Matter Rule**: `seo:` front matter is all-or-nothing and requires all seven keys (`page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`). Nulls are fine, `no_index` must be a boolean. Never add `<title>`, canonical, OG, robots, or JSON-LD tags directly in a page (handled by `seo.astro`).
- **New Block Registration**: A new block component must be added to BOTH `src/layouts/Page.astro`'s componentMap and `src/scripts/register-components.ts`.
- **Trailing-Slash Convention**: `trailingSlash: "always"` is configured in `astro.config.mjs`, meaning every internal link ends in `/` and URL generation should match.
