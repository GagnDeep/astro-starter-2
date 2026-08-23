# Build Notes

## Page Block Model
- A page is a markdown file (e.g. `src/content/pages/*.md`) containing front matter with a `title`, an optional `hero_block`, and `content_blocks[]`.
- **Important**: The markdown body is completely ignored for `.md` pages. All prose belongs inside a TextBlock's `text_content`, or the page must be written as a `.astro` file in `src/content/pages/`.
- Blocks are objects in front matter keyed by `_name` (e.g. Hero, LeftRight, TextBlock).

## Registering New Blocks
- Any new block component must be added to *both*:
  1. `src/layouts/Page.astro` inside the `componentMap`.
  2. `src/scripts/register-components.ts`.
- Skipping either step will result in the block rendering nothing, silently.

## SEO Front-Matter Rule
- The `seo:` front-matter block is all-or-nothing. It must include all seven keys:
  `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
- Nulls are acceptable for optional values; `no_index` must be a boolean.
- SEO tags and JSON-LD are generated via `src/lib/seo/`. Do not insert `<title>`, canonical, OG, robots, or JSON-LD tags directly in the markup.

## Trailing-Slash Convention
- The configuration sets `trailingSlash: "always"` in `astro.config.mjs`. Every internal link must end in a trailing slash.
