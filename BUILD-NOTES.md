# Build Notes

## Page Block Model
- Pages are primarily located at `src/content/pages/*.md`.
- They require a `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are defined as objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- The Markdown BODY IS IGNORED for `.md` pages — prose must go inside a `TextBlock`'s `text_content`.
- Alternatively, pages can be written as `.astro` files within `src/content/pages/`.

## Component Registration
- New block components must be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`.
- If a component is added to only one, it will silently fail to render.

## SEO Rules
- `seo:` front-matter is all-or-nothing. If present, it must include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`.
- Null values are acceptable for most keys; `no_index` must be a boolean.
- SEO tags (e.g., `<title>`, canonical, OG, robots, JSON-LD) must NEVER be directly added to a page component. They are handled by `src/components/seo/seo.astro` via `Layout.astro`.

## Trailing Slash Convention
- `trailingSlash` is set to "always" in `astro.config.mjs`.
- Every internal link must end with a trailing slash (`/`).
