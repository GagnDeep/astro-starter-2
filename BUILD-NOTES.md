# Build Notes

## Page Block Model
A page consists of `src/content/pages/*.md` files containing frontmatter. The markdown body is ignored.
Instead, content must be provided in `content_blocks[]`, which are objects keyed by `_name` (e.g., `Hero`, `LeftRight`, `TextBlock`), and optionally a `hero_block`.
If prose is needed, it must go inside a `TextBlock`'s `text_content`, or the page itself must be built as an `.astro` component inside `src/content/pages/`.

## SEO Front-Matter Rule
The `seo` front matter is all-or-nothing. You must include all seven keys:
`page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
Nulls are acceptable, but `no_index` must be a valid boolean.

## Registering New Blocks
Whenever a new block component is created, it **must** be registered in two locations:
1. `src/layouts/Page.astro` (in `componentMap`)
2. `src/scripts/register-components.ts` (using `registerAstroComponent`)
Failing to do so in both places will result in the block rendering nothing.

## Trailing-Slash Convention
The `trailingSlash` configuration in `astro.config.mjs` is set to `"always"`. Every internal link MUST end in a `/`.
