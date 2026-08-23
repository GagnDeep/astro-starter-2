# Build Notes

- **Page Block Model:** Pages are written as `.md` or `.astro` files in `src/content/pages/`. For `.md` pages, the markdown body is ignored. Prose goes inside a `TextBlock`'s `text_content`.
- **SEO Front-Matter Rule:** The `seo:` block in front matter is all-or-nothing and requires all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index` (must be a real boolean).
- **New Blocks:** A new block component must be added to BOTH `src/layouts/Page.astro`'s componentMap and `src/scripts/register-components.ts`.
- **Trailing Slash Convention:** Every internal link ends in `/`, matching the site's trailing-slash convention.
