# Build Notes & Core Conventions

**Page Block Model:**
- A page is a Markdown file in `src/content/pages/*.md` with a `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g. Hero, LeftRight, TextBlock).
- The markdown body is IGNORED for `.md` pages. Prose belongs inside a TextBlock's `text_content` (or the page must be written as `.astro` in `src/content/pages/`).

**SEO Front-Matter Rule:**
- SEO front-matter is all-or-nothing. Every SEO block must include all seven keys:
  `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
- Nulls are permitted, but `no_index` must be a real boolean.
- SEO tags and JSON-LD are handled by `src/lib/seo/`. Never add meta tags or JSON-LD manually in page components.

**Registering New Blocks:**
- Any new block component must be registered in TWO places:
  1. `src/layouts/Page.astro` (`componentMap`)
  2. `src/scripts/register-components.ts`
  Failing to do so will result in the block silently not rendering.

**Trailing-Slash Convention:**
- `trailingSlash: "always"` is set in `astro.config.mjs`.
- Every internal link across the site must end in a trailing slash (`/`).
