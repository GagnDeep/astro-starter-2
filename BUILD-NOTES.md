# Build Notes

## Page Block Model
- A page is typically defined in `src/content/pages/*.md` or as `.astro`.
- Markdown pages require a `title` and optionally `hero_block` and `content_blocks[]`.
- `content_blocks` are arrays of objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- The actual markdown body is ignored for `.md` pages — prose must live inside a `TextBlock`'s `text_content` or in a `.astro` page.

## Component Registration
- A new block component must be added to **both** `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`.

## SEO Front-matter Rule
- `seo:` front-matter in markdown is all-or-nothing. Include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`.
- Missing keys can be `null`.
- `no_index` must be a real boolean.

## Trailing Slash
- Trailing slash rule is `"always"`. Every internal link must end in `/`. (Verified in `astro.config.mjs`: `trailingSlash: "always"`).
