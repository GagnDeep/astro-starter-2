# Institute of Property Education Hub

A data-driven property investment education platform, built with Astro and Tailwind CSS v4.
Provides analytical tools, deep-dive reference materials, taxonomy exploration, and robust form capture.

## Structure

- `src/pages/`: Contains static pages (Home, About, Contact, Pricing, Comparison, Legal) and interactive tools (Yield, ROI, Mortgage, Stamp Duty Calculators).
- `src/content/`: Contains markdown collections for `blog`, `reference`, `glossary`, and `taxonomy`. Configured in `src/content.config.ts`.
- `src/styles/`: Contains `main.css` which houses the Tailwind CSS v4 design tokens and configuration (via `@theme`).
- `src/components/`: Modular Astro components, prominently `forms/capture-form.astro` and `forms/newsletter-form.astro`.
- `src/layouts/Layout.astro`: The core HTML wrapper with navigation, SEO, and observability integration.

## Libraries & Stack

- **Astro v6**: Core SSG framework.
- **Tailwind CSS v4**: For all styling, relying completely on CSS-first tokens in `main.css`.
- **Astro Content Collections + Zod**: For schema-driven data modelling of articles and guides.
- **OpenObserve / CloudCannon**: Read `AGENTS.md` and `CLAUDE.md` for specific telemetry and integration guidelines.

## Adding Content

To add new content, simply create a `.mdx` file in the relevant directory under `src/content/`:
- Blogs: `src/content/blog/new-post.mdx`
- Reference Guides: `src/content/reference/new-guide.mdx`
- Taxonomies: `src/content/taxonomy/new-taxonomy.mdx`
- Glossary Terms: `src/content/glossary/new-term.mdx`

Run `pnpm dev` to preview your content. It will be routed automatically through `[...slug].astro` in `src/pages/`.

## Tokens & Styling

All global colors, fonts, and base variables are mapped as CSS properties inside `src/styles/main.css` under the `@theme` block.
Never use raw hex colors in your class names (e.g., `text-[#123456]`). Always use the established variables like `text-primary` or `bg-surface`.

## Forms & Capture

Forms rely strictly on the `capture.config.ts` configuration.
- To add a new capture group, update `forms` within `capture.config.ts`.
- All capture components are wired defensively to degrade gracefully to regular form POST requests when JavaScript is disabled.
- The `actionUrl` points strictly to the `api.markremover.com` endpoint defined in the config. DO NOT use server-side endpoints in this repository.

## Setup & Scripts

- `pnpm install`: Install dependencies.
- `pnpm dev`: Run local dev server.
- `pnpm build`: Generate static production build in `dist/`.
- `pnpm check`: Validate TypeScript and Astro syntax strictly.
