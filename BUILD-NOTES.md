# Build Notes

- **Page Block Model:** Pages are stored as markdown files in `src/content/pages/*.md`. The markdown body is ignored. All prose must go inside block components (e.g., `TextBlock`).
- **SEO Front Matter:** The `seo:` front-matter is all-or-nothing. It must include all seven keys (`page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`). Null values are permitted, but `no_index` must be a boolean. Never add SEO tags directly in page markup.
- **New Components:** A new block component must be registered in *both* `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`. Failing to do both will result in silent rendering failures in CloudCannon.
- **Trailing Slash Convention:** `trailingSlash` is set to "always" in Astro config. Every internal link across the site must end in a trailing slash ('/').
