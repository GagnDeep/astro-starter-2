# Build Notes

## Page Block Model
*   A page is `src/content/pages/*.md` with `title`, an optional `hero_block`, and `content_blocks[]`.
*   Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
*   The markdown BODY IS IGNORED for `.md` pages. Prose belongs inside a TextBlock's `text_content`, or the page must be written as `.astro` in `src/content/pages/`.

## New Block Registration
A new block component must be added to BOTH:
1.  `src/layouts/Page.astro`'s componentMap
2.  `src/scripts/register-components.ts`

## SEO Front-matter Rule
*   `seo:` front matter is all-or-nothing: include all seven keys — `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
*   Nulls are fine; `no_index` must be a real boolean.
*   Never add `<title>`, canonical, OG, robots, or JSON-LD tags directly in a page's markup; set them via front matter instead.

## Trailing-Slash Convention
*   `trailingSlash: "always"` is configured in `astro.config.mjs`. Every internal link ends in `/`.
