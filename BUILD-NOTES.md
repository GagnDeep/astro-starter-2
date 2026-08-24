# Build Notes

## Page Block Model
- A page is `src/content/pages/*.md` with `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- The markdown BODY IS IGNORED for `.md` pages — prose belongs inside a TextBlock's `text_content`, or the page must be written as `.astro` in `src/content/pages/`.

## SEO Front-matter Rule
- `seo:` front matter is all-or-nothing: include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
- Nulls are acceptable, but `no_index` must be a boolean. Never put head tags or JSON-LD in a page; extend `src/lib/seo/` instead.

## Registering Components
- A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`. Doing only one renders nothing, silently.

## Trailing Slash Convention
- `trailingSlash` is "always": every internal link must end in "/".
