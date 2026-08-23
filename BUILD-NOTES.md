# Build Notes

- **Page Block Model**: A page is a Markdown file in `src/content/pages/` containing `title`, an optional `hero_block`, and `content_blocks[]`. The Markdown body is ignored for `.md` pages; prose belongs inside a `TextBlock`'s `text_content`.
- **SEO Front-Matter Rule**: The `seo:` block in front matter is all-or-nothing. It must include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`. Missing a key will fail type checking.
- **Registering New Blocks**: A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` AND `src/scripts/register-components.ts`. If registered in only one place, the block will fail to render silently.
- **Trailing Slashes**: Set to `always` in `astro.config.mjs`. Every internal link must end in a trailing slash.
