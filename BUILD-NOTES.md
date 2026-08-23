# Build Notes

- **Page Block Model:**
  Pages are `.md` files in `src/content/pages/` containing `title`, an optional `hero_block`, and `content_blocks[]`. The markdown body is ignored. Prose belongs in a TextBlock's `text_content`. Pages requiring complex layouts not supported by blocks should be `.astro` files in `src/content/pages/`.
- **Registering New Blocks:**
  Any new block component MUST be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`. Failing to do both will cause silent failures where nothing renders.
- **SEO Front-Matter Rule:**
  The `seo:` front-matter is all-or-nothing. It requires all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`. Use nulls for missing values; `no_index` must be a boolean.
- **Trailing Slash Convention:**
  `trailingSlash` is set to `"always"` in Astro config. Every internal link MUST end in a trailing slash `/`.
