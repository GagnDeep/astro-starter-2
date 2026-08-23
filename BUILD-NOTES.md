# Build Notes

- **Page Block Model:** Pages are driven by `.md` files in `src/content/pages/` containing a `content_blocks` array in front matter. The block types correspond to components (e.g., `Hero`, `TextBlock`) that must be registered in both `src/layouts/Page.astro` (`componentMap`) and `src/scripts/register-components.ts`. The markdown body of `.md` page files is ignored—prose must go inside block props.
- **SEO Front-Matter Rule:** `seo:` in front matter is all-or-nothing (requires `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`). Nulls are permitted, but `no_index` must be a real boolean. SEO tags are handled automatically by `Layout.astro` (via `src/components/seo/seo.astro`); never inject them manually in a page.
- **New Block Registration:** When adding a new block component, it MUST be registered in both `src/layouts/Page.astro` and `src/scripts/register-components.ts` (for the visual editor).
- **Trailing Slashes:** Set to `"always"` in `astro.config.mjs`. Every internal link must end in a `/`.
