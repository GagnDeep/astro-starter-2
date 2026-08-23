# Build Notes & Architecture Constraints

These constraints are verified against the repository configuration and `AGENTS.md`.

## Page Block Model
- A page (`src/content/pages/*.md`) uses structured front matter containing `title`, an optional `hero_block`, and `content_blocks[]`.
- **The markdown body is ignored** for `.md` pages. Prose belongs inside a block's `text_content` (e.g., inside a TextBlock). To use regular markdown content, the page must be written as `.astro` in `src/content/pages/`.

## Block Registration
A new block component must be registered in TWO places:
1. `src/layouts/Page.astro` (in the `componentMap`)
2. `src/scripts/register-components.ts`
Failing to add it to both will result in the block rendering nothing, silently.

## SEO Front-matter Rule
- `seo:` front matter is an all-or-nothing configuration.
- If included, it MUST have all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
- Null values are acceptable, but `no_index` must be a boolean.
- Meta tags are handled by `src/components/seo/seo.astro`. **Never put `<title>`, `<link rel="canonical">`, or JSON-LD manually into a page.**

## Trailing Slash Convention
- Configured in `astro.config.mjs` as `trailingSlash: "always"`.
- Every internal link MUST end in a trailing slash (`/`).
