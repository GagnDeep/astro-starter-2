# FreeFormPDF

The fast, bullshit-free tool to fill, sign, and export PDF forms.
No watermarks on the free tier.

## Architecture & Libraries

- **Framework**: Astro 6 static site starter
- **Styling**: Tailwind CSS v4, custom utility classes
- **Forms**: Form capture mapped to shared API `api.markremover.com/v1/collect` via `src/lib/capture.ts`. Waitlists and contacts are configured automatically.
- **Observability**: OpenObserve RUM/telemetry is available in `.env` configurations.

## Development

- \`pnpm install\`
- \`pnpm dev\` (starts local dev server on localhost:4321)
- \`pnpm build\` (builds to dist/)
- \`pnpm check\` (runs Astro TS type checks)
- \`pnpm assets\` (generates OG images and favicons from source mark)

## How to add content

All content models have rigid schemas to ensure correct generation:

- **Blog posts**: \`src/content/blog/\` (.mdx). Ensure front matter has \`post_hero\`, \`thumb_image_path\`, and \`seo\`.
- **Glossary/Tax Forms**: \`src/content/pages/\` (.md) with \`content_blocks\` structure.

## Where tokens live
Tokens are defined in \`src/styles/main.css\` via \`@theme\` mapping to Tailwind colors.

## How capture is wired

All capture settings rely on \`capture.config.ts\`. The `publicKey` and `endpoint` drive the API. Use `CaptureForm` and `NewsletterForm` components across pages to tap into this config.
