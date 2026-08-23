# BUILD NOTES

## Page Block Model
The page structure in this repository follows a specific model for integrating content blocks. A page is typically defined in `src/content/pages/*.md` (or `.astro`).
- Pages have a `title`.
- An optional `hero_block` object.
- A `content_blocks` array of block objects.
- Each block object has a `_name` property (e.g., `Hero`, `LeftRight`, `TextBlock`).
- Note: The Markdown body of a `.md` page is IGNORED unless it is inside a `TextBlock`'s `text_content`. Otherwise, prose must go in a `.astro` page.

## SEO Front-matter Rule
SEO front matter is all-or-nothing. Every page needs all seven of these keys (null values are acceptable, but the keys must exist):
1. `page_description`
2. `canonical_url`
3. `featured_image`
4. `featured_image_alt`
5. `author_twitter_handle`
6. `open_graph_type`
7. `no_index` (must be a boolean, false by default)

**Never add `<title>`, canonical, OG, robots, or JSON-LD tags directly in a page.** These are generated via the `src/components/seo/seo.astro` component and rely on the front-matter data.

## Registering New Blocks
To create a new content block, you must add it in TWO places. If you only add it to one, it will silently fail to render:
1. `src/layouts/Page.astro` (in `componentMap`)
2. `src/scripts/register-components.ts`

## Trailing-Slash Convention
The site uses an "always" trailing slash convention (`trailingSlash: "always"`). Every internal link must end with a trailing slash (e.g., `/about/`, not `/about`).
