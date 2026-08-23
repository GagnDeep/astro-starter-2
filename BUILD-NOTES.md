# Build Notes

- **Page Block Model**: Pages (`src/content/pages/*.md`) use an optional `hero_block` and an array of `content_blocks` objects, keyed by `_name` (e.g., Hero, LeftRight, TextBlock). Prose is located in `text_content` inside blocks, as the main markdown body is ignored.
- **SEO Front-matter**: `seo:` block in front-matter is all-or-nothing and requires: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`.
- **Component Registration**: A new block must be registered in **both** `src/layouts/Page.astro` (`componentMap`) and `src/scripts/register-components.ts` or it won't render.
- **Trailing Slash Convention**: Enforced as `trailingSlash: "always"` in Astro config; every internal link must end with a trailing slash.
