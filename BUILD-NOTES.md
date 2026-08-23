# Build Notes

## Page Block Model
- A page is a markdown file in `src/content/pages/*.md`.
- It uses structured front matter containing `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- **Important:** The markdown BODY IS IGNORED for `.md` pages. Prose belongs inside a block's text field (like `TextBlock`'s `text_content`). Alternatively, write `.astro` directly in `src/content/pages/` mapped to `src/pages/`.

## Component Registration
- A new block component must be registered in **both** of these locations:
  1. `src/layouts/Page.astro` (inside the `componentMap`)
  2. `src/scripts/register-components.ts`
- Doing only one will result in silent rendering failures.

## SEO Front-Matter Rule
- The `seo:` block in page front-matter is strictly all-or-nothing.
- You must include all 7 keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`.
- Nulls are acceptable for missing values, but `no_index` must be a real boolean.
- Meta tags are handled globally by `src/components/seo/seo.astro`. Never manually add `<title>`, `<link rel="canonical">`, Open Graph, or JSON-LD tags directly inside a page component.

## Trailing-Slash Convention
- `trailingSlash` is set to `"always"` in Astro config.
- Every internal link in the site must end with a trailing slash (e.g., `/methodology/`, not `/methodology`).
