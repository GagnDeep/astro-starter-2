# Build Notes

**Page Block Model:**
- A page is typically `src/content/pages/*.md` with a `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- The markdown body of `.md` pages is **ignored**. Prose belongs inside a TextBlock's `text_content`.
- Pages can also be written directly as `.astro` in `src/content/pages/`.
- **Registering a block:** A new block component must be added to BOTH `src/layouts/Page.astro`'s componentMap AND `src/scripts/register-components.ts`. Doing only one renders nothing, silently.

**SEO Front-Matter Rule:**
- `seo` front matter is all-or-nothing. Include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`. Nulls are fine, but `no_index` must be a boolean.

**Trailing Slash Convention:**
- `trailingSlash: "always"` in `astro.config.mjs`. Every internal link must end in `/`.
