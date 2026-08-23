# Build Notes

- **Page Block Model:** Pages are driven by markdown front matter in `src/content/pages/*.md`. They use `title`, an optional `hero_block`, and `content_blocks[]` objects keyed by `_name`. The body is ignored.
- **SEO Front-matter Rule:** The `seo` key is all-or-nothing and needs seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index` (must be boolean). Missing one causes types to fail; null is accepted.
- **Component Registration:** A new block component must be registered in **both** `src/layouts/Page.astro` (`componentMap`) and `src/scripts/register-components.ts` (for the visual editor).
- **Trailing-slash Convention:** `trailingSlash: "always"` is set in `astro.config.mjs`. Every internal link and canonical URL ends in `/`.
