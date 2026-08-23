# Build Notes

## Page Block Model

- A page is located at `src/content/pages/*.md`.
- It includes a `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- The Markdown body is ignored for `.md` pages. Prose belongs inside a TextBlock's `text_content` or in a `.astro` page inside `src/content/pages/`.

## Component Registration

- A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`.
- Failing to do so in both places will result in the block rendering nothing, silently.

## SEO Front-Matter Rule

- `seo:` front-matter is all-or-nothing. It must include all seven keys:
  - `page_description`
  - `canonical_url`
  - `featured_image`
  - `featured_image_alt`
  - `author_twitter_handle`
  - `open_graph_type`
  - `no_index` (must be a real boolean)
- Nulls are acceptable for optional fields.
- Never put `<title>`, canonical, OG, robots, or JSON-LD tags directly in a page.

## Trailing-Slash Convention

- `trailingSlash` is set to `"always"` in `astro.config.mjs`.
- Every internal link must end in a trailing slash (`/`).
