# usignpdf

usignpdf is the frictionless, instantly usable e-signature tool that just works for small businesses. Zero signup for your clients, zero enterprise bloat.

## Development

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm check`
- `pnpm assets` (to regenerate brand assets from `src/assets/brand/icon.svg`)

## Structure

Built with Astro and Tailwind CSS v4.
- `src/pages/`: Core routes (homepage, about, pricing) and tools (calculators, signature generator).
- `src/content/blog/`: Blog posts.
- `src/components/forms/`: Form capture logic integrated via progressive enhancement.
