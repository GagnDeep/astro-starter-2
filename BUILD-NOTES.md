# Build Notes

- **Page block model:** Pages are `src/content/pages/*.md`. The markdown body is ignored. Prose belongs inside a TextBlock's `text_content`. Pages can also be `.astro` files in `src/content/pages/`.
- **SEO front-matter:** `seo:` front-matter is all-or-nothing and requires all seven keys: `page_description`, `featured_image`, `featured_image_alt`, `canonical_url`, `open_graph_type`, `author_twitter_handle`, `no_index`.
- **Component registration:** A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`.
- **Trailing-slash convention:** Every internal link must end in a trailing slash `/`. `trailingSlash: "always"` is configured in `astro.config.mjs`.
