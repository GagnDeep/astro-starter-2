# BUILD-NOTES

## Page Block Model
- A page is typically `src/content/pages/*.md` with `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g. Hero, LeftRight, TextBlock).
- The markdown body is IGNORED for `.md` pages. Prose belongs inside a TextBlock's `text_content`.
- If standard block capabilities are insufficient, the page must be written as `.astro` in `src/content/pages/` using a routing wrapper in `src/pages/`.

## SEO Front-Matter Rule
- `seo:` front matter is an all-or-nothing requirement.
- You must include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`.
- Nulls are fine for most fields, but `no_index` must be a real boolean.
- Never add SEO meta tags to components manually; the global SEO component handles it.

## Registering a New Block
- A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`.
- Doing only one renders nothing, silently.

## Trailing-Slash Convention
- Trailing slash is "always": every internal link must end in `/`. (e.g. `/about/`, not `/about`).
