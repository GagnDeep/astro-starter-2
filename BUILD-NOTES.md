# Build Notes

- **Page Block Model:** Markdown body is ignored in `.md` files. Prose must be inside a `TextBlock`'s `text_content`, or the page must be written as `.astro` in `src/content/pages/`.
- **SEO Front-Matter:** The `seo:` key is all-or-nothing and must include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`. Nulls are acceptable, but `no_index` must be a boolean. Never add `<title>`, `canonical`, `OG`, `robots`, or `JSON-LD` tags directly in a page.
- **Component Registration:** New block components must be added to BOTH `src/layouts/Page.astro` (in `componentMap`) and `src/scripts/register-components.ts`. Doing only one results in silently rendering nothing.
- **Trailing Slashes:** The trailing slash convention is `trailingSlash: "always"` configured in `astro.config.mjs`. Every internal link ends in `/`.
- **Build Gateway:** `pnpm build` is the only build gate. Never add `check`, format, or tests to it.
