# Breathing Timer

A highly optimized, zero-fluff box breathing and meditation timer PWA. Built with Astro, Tailwind CSS, and React.

## Structure
- \`src/components/tools/\`: React-based interactive breathing timers.
- \`src/content/\`: Markdown and MDX content for guides, blog, and glossary.
- \`src/styles/main.css\`: Global Tailwind v4 CSS using CSS custom properties for tokens.

## Styling
Tokens (colors, fonts) live in \`src/styles/main.css\` under \`@theme\` and \`@layer base\`. No raw hex codes are used in components.

## Adding Content
- **Blog Posts**: Add \`.mdx\` files to \`src/content/blog/\`. Must include \`post_hero\` and \`thumb_image_path\`.
- **Guides/Pages**: Add \`.md\` files to \`src/content/pages/\`.

## Form Capture API
This site uses the shared \`api.markremover.com\` capture server.
1. The public key and form lists are set in \`capture.config.ts\`.
2. Do not write serverless API endpoints or mail handlers.
3. Import \`src/components/forms/capture-form.astro\` and set the \`form\` prop to a registered form label.
