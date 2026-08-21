# WaterTrackLog

Simple hydration and water-intake tracking web app with reminders. Built with Astro, Tailwind CSS v4, and editable regions for CloudCannon.

## Structure
- `/src/pages`: Astro pages, tools, and the homepage.
- `/src/content`: Content collections for Blog, Library, Glossary, and editable pages.
- `/src/components`: UI components, including the shared capture form.
- `/src/assets`: Images and icons.

## Libraries
- **Astro**: Static site generation.
- **Tailwind CSS v4**: Styling. Variables defined in `src/styles/main.css`.
- **Zod**: Content validation.

## Adding Content
- **Library**: Add Markdown files to `src/content/library`.
- **Glossary**: Add Markdown files to `src/content/glossary`.
- **Blog**: Add Markdown files to `src/content/blog`.
- All use frontmatter that matches the schema defined in `src/content.config.ts`.

## Tokens
CSS tokens are located in `src/styles/main.css` within the `@theme` block. These map to Tailwind classes (e.g., `text-brand-primary`). Do not use hex codes directly in components.

## Capture
All forms use `src/components/forms/capture-form.astro` or `src/components/forms/newsletter-form.astro`.
- Configured in `capture.config.ts`.
- Form targets: `https://api.markremover.com/v1/collect/{form}`
- Public Key environment variable: `PUBLIC_WCS_PK`
