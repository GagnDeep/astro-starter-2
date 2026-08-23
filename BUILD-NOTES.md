# Aerospace UAE: Build Notes

## Page Block Model
Pages are built via Astro Content Collections (e.g., `src/content/pages/*.md`).
- **Body Ignore Rule:** The raw markdown body is completely ignored for `.md` pages. Prose must be placed inside a `TextBlock`'s `text_content` field.
- **Alternative:** For highly custom layouts, pages can be written as `.astro` files within `src/content/pages/`.

## Block Registration
When creating a new block component, it must be registered in **two** places to render correctly:
1. The `componentMap` in `src/layouts/Page.astro`.
2. The `src/scripts/register-components.ts` file.
Failing to register in both places will result in the block silently failing to render.

## SEO Front-Matter Rule
The `seo:` block in page front-matter is strictly all-or-nothing. You must include all seven keys:
- `page_description`
- `canonical_url`
- `featured_image`
- `featured_image_alt`
- `author_twitter_handle`
- `open_graph_type`
- `no_index`

While `null` is acceptable for optional string fields, `no_index` must be a valid boolean. Never add tags like `<title>`, canonical, OG, or JSON-LD manually inside a page's HTML; rely on `src/lib/seo/`.

## Trailing-Slash Convention
The `astro.config.mjs` sets `trailingSlash: "always"`. Therefore, every internal link across the site must end in a trailing slash (e.g., `/directory/`, not `/directory`).
