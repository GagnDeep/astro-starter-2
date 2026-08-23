# Build Notes

- **Page Block Model**: Pages (`src/content/pages/*.md`) use front matter for structure. Prose must be inside a TextBlock's `text_content` (markdown body is ignored for `.md` pages). Alternatively, use an `.astro` page in `src/content/pages/`.
- **SEO Front-Matter**: The `seo:` block must be complete with all 7 keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index` (as boolean).
- **Block Registration**: Every new block must be registered in BOTH `src/layouts/Page.astro`'s componentMap and `src/scripts/register-components.ts`.
- **Trailing Slash Convention**: Enforced "always" trailing slash for all internal links (`/`).
