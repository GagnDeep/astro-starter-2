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

## Forms — always the capture API

Any form (contact, newsletter, waitlist, quote, enquiry) posts to the shared
capture server. **Never** write an API route, mail sender or third-party form
service into this repo — read AGENTS.md → "Form submissions" first.

- New domain = edit `capture.config.ts` only: swap `publicKey` for that site's
  `wcs_pk_…`, list its form labels, confirm `thanksUrl`. Also set `site:` in
  `astro.config.mjs`, since the thank-you redirect must be same-origin.
- Build forms from `src/components/forms/capture-form.astro` (fields go in the
  slot) or `newsletter-form.astro`. Adding an input needs no other change —
  unknown fields are stored in the submission's `data` automatically.
- Call `submit()` from `src/lib/capture.ts`; never `fetch` the endpoint directly
  (you lose page URL, referrer and UTM), and never put `key`/`redirect` in a
  JSON body (the server 303s and the visitor sees a false error).
- `200`/`201`/`202` are all success. Show a failure's `title` and nothing else.
- The `wcs_pk_…` key belongs in git and in client code; it can only append. An
  admin key `wcs_sk_…` must never enter this repo.
- To verify a change end to end, POST once with curl and confirm `"ok":true`:
  `curl -s -X POST https://api.markremover.com/v1/collect/contact -H 'content-type: application/json' -H "x-public-key: $KEY" -d '{"email":"test@example.com"}'`

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
4. If you added or changed a form, confirm the built page carries the endpoint
   action (`grep -o 'api.markremover.com[^"]*' dist/contact/index.html`) and that
   `dist/thanks/index.html` exists.
5. If you changed SEO, assets, telemetry or form-capture behaviour, update
   AGENTS.md in the same change.
