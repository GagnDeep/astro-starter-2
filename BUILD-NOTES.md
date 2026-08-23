# Build Notes

## Page Block Model
Pages defined in `src/content/pages/*.md` are structured around a `hero_block` and a `content_blocks` array in their front matter. The actual Markdown body of these pages is ignored (as verified in the repo). All textual content must exist within a TextBlock's `text_content` or by writing the page entirely in `.astro` within `src/content/pages/`.

## Registering Blocks
Any newly created component block must be registered in **both** `src/layouts/Page.astro` (within its componentMap) and `src/scripts/register-components.ts`. Failing to register a block in both locations will result in silent rendering failures.

## SEO Front Matter Rule
The `seo` key in page front matter operates on an all-or-nothing basis. When used, all seven keys (`page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`) must be provided. Nulls are valid, but the structure is mandatory. Missing elements will cause errors.

## Trailing-Slash Convention
The `astro.config.mjs` has `trailingSlash: "always"` enabled. This means every internal link across the site must explicitly end in a trailing slash (e.g., `/suppliers/` instead of `/suppliers`).
