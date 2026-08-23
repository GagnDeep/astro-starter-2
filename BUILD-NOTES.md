# Build Notes

Page Block Model: Pages use `src/content/pages/*.md` with a `content_blocks` array. Each block specifies `_name`. Markdown body is ignored.
SEO Front-matter: Include all 7 keys (page_description, canonical_url, featured_image, featured_image_alt, author_twitter_handle, open_graph_type, no_index). Nulls fine, no_index boolean.
Component Registration: New blocks must be added to BOTH `src/layouts/Page.astro` `componentMap` and `src/scripts/register-components.ts`.
Trailing Slashes: `trailingSlash: "always"` in astro config. Every internal link ends in `/`.
