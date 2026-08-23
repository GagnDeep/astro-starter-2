# Build Notes

## Page Block Model
- A page is typically defined in `src/content/pages/*.md` with a `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- **Important:** The markdown BODY IS IGNORED for `.md` pages. Prose belongs inside a TextBlock's `text_content`. Otherwise, the page must be written as `.astro` in `src/content/pages/`.

## Component Registration
- A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`. Doing only one results in a silent failure to render.

## SEO Front-Matter Rule
- `seo:` front matter is all-or-nothing. If included, it must have all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`.
- Nulls are acceptable, but `no_index` must be a real boolean.
- Do not add SEO tags to pages directly, `src/lib/seo/` handles meta and JSON-LD.

## Trailing-Slash Convention
- `trailingSlash: "always"` is configured in `astro.config.mjs`. Every internal link must end in a `/`.
