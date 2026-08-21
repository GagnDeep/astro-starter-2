# Institute of Investing

The calm, objective classroom for the first-time investor.

This repository powers `instituteofinvesting.com`. It is an Astro-based SSG web application utilizing Tailwind CSS v4, Zod schema-enforced Content Collections, and OpenObserve telemetry.

## Features
- **Zero-JS Default:** Core pages are statically generated HTML. Tools feature progressive enhancement (JS required for immediate reactivity, but fully functional via SSR form-posting otherwise).
- **Extensive Education Library:** Organized into `blog`, `reference`, `glossary`, and `taxonomy` collections.
- **Form Capture:** All forms POST securely to a shared capture server. Keys are isolated per `AGENTS.md` and `capture.config.ts`.
- **Automated SEO:** Strict frontmatter-driven SEO blocks to ensure valid JSON-LD, OG, and Twitter Card schemas on every route.

## Getting Started

1. Clone the repository to your local machine.
2. Install dependencies: `pnpm install`
3. Run the development server: `pnpm dev`
4. Build the site statically: `pnpm build`
5. Check TypeScript strictly: `pnpm check`

See `CLAUDE.md` and `AGENTS.md` for specific architectural constraints before modifying this repo.
