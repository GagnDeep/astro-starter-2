# Build Notes

**Page Block Model:**
A page in `src/content/pages/` is built using a `title`, an optional `hero_block`, and an array of `content_blocks[]`. Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock). The markdown body is ignored for `.md` pages; prose must be placed inside a block's `text_content`.

**Component Registration:**
Every new block component must be registered in two places to render correctly:
1. `src/layouts/Page.astro` (in the `componentMap`).
2. `src/scripts/register-components.ts`.

**SEO Front-matter Rule:**
The `seo` front matter block is an all-or-nothing requirement. Every page or collection must include all seven keys:
`page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
Null values are permitted, but `no_index` must be a true boolean.

**Trailing Slash Convention:**
The `trailingSlash` is set to "always" in `astro.config.mjs`. Every internal link must end in a trailing slash (`/`).
