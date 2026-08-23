# Build Notes

## Page Block Model
- A page is `src/content/pages/*.md` with `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- The markdown body is ignored for `.md` pages — prose must be placed inside a TextBlock's `text_content`, or the page must be written as `.astro` in `src/content/pages/`.

## SEO Front-Matter Rule
- The `seo:` front-matter is all-or-nothing. It requires all seven keys:
  - `page_description`
  - `canonical_url`
  - `featured_image`
  - `featured_image_alt`
  - `author_twitter_handle`
  - `open_graph_type`
  - `no_index`
- Nulls are acceptable for optional values; `no_index` must be a real boolean.
- Never add `<title>`, canonical, OG, robots, or JSON-LD tags in a page directly—set front matter instead.

## Registering Components
- A new block component must be added to BOTH:
  1. `src/layouts/Page.astro`'s `componentMap`
  2. `src/scripts/register-components.ts`
- Doing only one will result in silent rendering failures.

## Trailing-Slash Convention
- `trailingSlash` is set to "always" in Astro configuration.
- Every internal link must end in a `/`.

## Observability
- Do not hardcode OpenObserve values. Use typed client vars in `astro.config.mjs` / `.env`.

## Build
- `pnpm build` is the only deployment gate. Never add check, format, or tests to it.
