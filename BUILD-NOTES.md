# BUILD NOTES

**Page Block Model:**
- A page is typically `src/content/pages/*.md`.
- Required keys: `title`. Optional keys: `hero_block`, `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., `Hero`, `LeftRight`, `TextBlock`).
- The markdown body for `.md` pages in `src/content/pages/` is completely ignored. Prose belongs inside a `TextBlock`'s `text_content`.
- If prose must live in the body, the page must be written as `.astro` directly in `src/content/pages/` (or `src/pages/`).

**SEO Front-Matter Rule:**
- `seo:` front-matter is strictly all-or-nothing.
- Must include exactly all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
- Nulls are valid for string fields. `no_index` must be a real boolean.
- Do not inject head tags or JSON-LD manually; `src/lib/seo/` handles this using the front-matter data.

**Registering New Blocks:**
- Any new block component must be registered in **both**:
  1. `src/layouts/Page.astro` (`componentMap`)
  2. `src/scripts/register-components.ts`
- Doing it in only one place will result in the block rendering nothing silently.

**Trailing Slash Convention:**
- `trailingSlash: "always"` is configured in `astro.config.mjs`.
- Every internal link must end in `/` (e.g., `/toolkit/`).