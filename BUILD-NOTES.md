# Build Notes
- **Page block model:** A page is `src/content/pages/*.md` with `title`, an optional `hero_block`, and `content_blocks[]`. Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock). The markdown BODY IS IGNORED for .md pages.
- **SEO front-matter rule:** `seo:` front matter is all-or-nothing (page_description, canonical_url, featured_image, featured_image_alt, author_twitter_handle, open_graph_type, no_index).
- **Component registration:** A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`.
- **Trailing slash convention:** "always" - every internal link ends in "/".
