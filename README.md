# doctorameena.com — Medical Practice Website

Official personal brand and patient education website for **Dr. Ameena Patel, MD, FACE**, Board-Certified Endocrinologist in Austin, Texas.

## Tech Stack & Architecture

- **Astro (v5+)**: Static Site Generation (SSG) with zero client JS by default for ultra-fast rendering, optimal SEO, and high Lighthouse scores.
- **Tailwind CSS v4**: CSS-first design token setup configured via `@theme` in `src/styles/main.css`.
- **TypeScript**: Strict type-checking with Astro content collection Zod schemas.
- **React Islands (`@astrojs/react`)**: Isolated interactive islands for client-side search modal and responsive mobile navigation drawer.

## Dependency Justification & Pinning

All extra dependencies are strictly justified and pinned in `package.json`:

- `@astrojs/mdx`: Required for rich medical content authoring with interactive citation components and callouts.
- `@astrojs/sitemap`: Automatically builds XML sitemaps including conditions, procedures, and educational posts for search engine indexing.
- `@astrojs/rss`: Generates `/rss.xml` for patient education articles feed.
- `@astrojs/react`: Enables interactive islands (`SearchModal.tsx`, `NavDrawer.tsx`).
- `lucide-react`: Lightweight, accessible UI icon library.
- `sharp`: High-performance image transformation via `astro:assets`.

## Design System Tokens

Design tokens are declared in `src/styles/main.css` and strictly avoid "medical blue":
- **Primary Brand**: Warm Terracotta (`#9C4A2F`)
- **Accent**: Forest Sage (`#3D6B52`)
- **Background**: Soft Cream (`#FAF8F5`)
- **Surface**: Sandstone (`#F2EFE9`)
- **Text**: Obsidian Charcoal (`#1E2229`)
- **Font Display**: Playfair Display (Serif)
- **Font Body**: Plus Jakarta Sans (Sans-serif)

## Local Development

```bash
npm install
npm run dev
```

Build and type-check:
```bash
npm run build
```
