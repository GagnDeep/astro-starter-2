# Build Notes

## Page Block Model
- A page is `src/content/pages/*.md` (or `.astro`) with `title`, optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- Markdown body is ignored for `.md` pages. Prose belongs inside a TextBlock's `text_content`.

## SEO Front-Matter Rule
- `seo` front matter is all-or-nothing. It must include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
- Nulls are permitted, but `no_index` must be a boolean.
- Do not add `<title>`, canonical, OG, robots, or JSON-LD tags in a page directly; the layout manages this.

## Registering New Blocks
- A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` AND `src/scripts/register-components.ts`.
- Omitting registration in either place causes silent failures.

## Trailing-Slash Convention
- The site configuration enforces `trailingSlash: "always"`. Every internal link must end in `/`.
