# CLAUDE.md

**Read [AGENTS.md](./AGENTS.md) first** — it is the canonical guide to this repo
(commands, layout, SEO rules, OpenObserve contract, conventions). This file only
adds Claude Code-specific workflow notes.

## Working here

- Verify with `pnpm build` before claiming anything works; `pnpm check` for types.
  Both must be clean. `pnpm build` is deliberately free of linters/formatters —
  don't add gates to it.
- To see rendered output, inspect `dist/` (e.g. `dist/index.html`, `dist/sitemap-0.xml`,
  `dist/robots.txt`) rather than assuming — head tags and JSON-LD are generated.
- Telemetry is off by default. To exercise it: `PUBLIC_OO_ENABLED=true pnpm build`,
  then confirm the OpenObserve chunk is referenced from the built page.
- `pnpm dev` runs a long-lived server; run it in the background and stop it when done.

## Editing rules worth repeating

- Head tags (`title`, canonical, OG, robots, JSON-LD) come only from
  `src/components/seo/seo.astro`. Add front matter, not tags.
- OpenObserve settings come only from `.env` / `astro.config.mjs`'s `env.schema`.
  Never inline a token, service name, or org into a component.
- Don't remove `data-editable` / `<editable-component>` markup — it powers CloudCannon
  visual editing even though nothing local depends on it.
- Prefer `data/site.json` and `data/navigation.json` over hardcoded strings.

## Assets and CSS gotchas

- Favicons, PWA icons and the OG image are generated: edit `src/assets/brand/icon.svg`
  and run `pnpm assets`, never hand-edit files in `public/meta/`. `pnpm assets:check`
  verifies sizes and warns while placeholder art is still in place.
- Icons come from `@lucide/astro` (build-time inline SVG). Don't paste raw SVG paths.
- Needed image missing? Download it into `src/assets/images/**` (or `public/images/og/`
  for share images) and reference the local path — never hotlink.
- CSS in `src/styles/main.css` must stay inside `@layer base` / `@layer components`.
  An unlayered rule outranks all of Tailwind's utilities and silently zeroes every
  spacing class; the build warns if one slips through.

## Before finishing

1. `pnpm check` → 0 errors.
2. `pnpm build` → completes, and the pages you touched are in `dist/`.
3. `pnpm assets:check` if you touched brand assets or `data/site.json`.
4. If you changed SEO, assets or telemetry behaviour, update AGENTS.md in the same change.
