# AGENTS.md

Astro 6 static site starter — Tailwind v4, CloudCannon Editable Regions, OpenObserve RUM, SEO-first.
Read this before editing. Keep it accurate when you change how things work.

## Commands

```bash
pnpm install
pnpm dev            # localhost:4321
pnpm build          # static output -> dist/   (the ONLY build gate)
pnpm preview
pnpm check          # astro check — type-check, optional
pnpm format         # prettier — optional, never runs in build/CI
pnpm assets         # regenerate favicons + OG image, then verify
pnpm assets:check   # verify brand assets exist and are correctly sized
```

`pnpm build` must stay dependency-free of linters and formatters. Do not add
`check`/`format`/tests to the `build` script.

## MANDATORY for every new site

Do not consider a site "set up" until all of these are done. Each one ships
publicly and each one is wrong by default.

1. **`data/site.json`** — `site_title`, `description`, `tagline`, `image_alt`,
   `theme_color`, `organization` (name, logo, `same_as` social profiles), `locale`.
2. **`astro.config.mjs` → `site:`** — the real production origin. Canonicals, the
   sitemap, RSS and OG URLs all derive from it; leaving the demo domain silently
   points every canonical at someone else's site.
3. **Brand mark → `src/assets/brand/icon.svg`** — replace the placeholder square
   SVG, then run `pnpm assets`. This regenerates `favicon.svg`, 16/32 px PNGs,
   `favicon.ico`, `apple-touch-icon.png` (180), PWA icons (192/512 + maskable),
   `site.webmanifest`, and the default Open Graph image.
4. **Open Graph image** — `pnpm assets:og` renders `public/images/og/og-default.png`
   (1200x630) from `data/site.json`. For a one-off page image:
   `node scripts/generate-og.mjs --title "Post title" --out public/images/og/post.png`,
   then set `seo.featured_image: /images/og/post.png` on that page.
5. **Verify** — `pnpm assets:check` must pass (it checks every file's presence and
   exact dimensions, and warns while the placeholder mark or starter copy is still
   in place). Then `pnpm build` and confirm `dist/index.html` carries your title,
   canonical and `og:image`.
6. **`.env`** — copy `.env.example`, set `PUBLIC_OO_SERVICE`, `PUBLIC_OO_APPLICATION_ID`,
   `PUBLIC_OO_ENV`, and `PUBLIC_OO_ENABLED=true` for deployed environments.
7. **`capture.config.ts`** — paste this site's own `wcs_pk_…` public key and give
   each form a label. Every form on the site posts to the shared capture server;
   do not build a form backend. See "Form submissions" below.

Generated assets are committed to the repo — regenerate deliberately, never during
`astro build`.

## Icons

Use [`@lucide/astro`](https://lucide.dev). It renders inline SVG at build time —
no client JS, tree-shaken per import. Never paste raw `<svg>` paths into markup
and never load an icon font or CDN script.

```astro
---
import { ArrowRight, Menu } from "@lucide/astro";
---

<ArrowRight class="w-5 h-5" aria-hidden="true" />
```

Size with Tailwind (`w-5 h-5`), colour with `currentColor` (automatic). Decorative
icons get `aria-hidden="true"`; an icon that is the only content of a button needs
an `aria-label` on the button. `src/components/navigation/header.astro` is the
reference example. If a needed glyph is missing from Lucide, add `astro-icon` with
an Iconify set rather than hand-rolling SVG.

## Images

- Content/decorative images go in `src/assets/images/**` and are used via Astro's
  `<Image />` — they get hashed, resized, converted to modern formats and lazy-loaded.
- `public/` is for files that must keep a stable URL and are served unprocessed:
  favicons, `og-default.png`, `site.webmanifest`, `robots.txt`.
- **If a page needs an image you do not have, download it into the right folder**
  (`src/assets/images/<section>/` for content, `public/images/og/` for share images)
  and reference it by path. Do not hotlink a remote URL: it breaks image
  optimisation, adds a third-party request, and disappears when the source does.
  Record the source and licence in the commit message.
- Always write real `alt` text. Give every image explicit dimensions (`<Image />`
  does this for you) so nothing shifts during load.

## Start here for a new site

| Goal                                                   | Edit                                                                    |
| ------------------------------------------------------ | ----------------------------------------------------------------------- |
| Site name, description, social image, org, locale      | `data/site.json`                                                        |
| Production domain (drives canonicals, sitemap, RSS)    | `site:` in `astro.config.mjs`                                           |
| Nav + footer links                                     | `data/navigation.json`                                                  |
| Telemetry identity (`service`, `env`, `applicationId`) | `.env` (copy `.env.example`)                                            |
| Form capture key, form labels, thank-you URL           | `capture.config.ts` (repo root)                                         |
| Pages                                                  | `src/content/pages/*.md` (front matter → `Page.astro`)                  |
| Blog posts                                             | `src/content/blog/*.mdx`                                                |
| Reusable blocks                                        | `src/components/**`, registered in `src/scripts/register-components.ts` |
| Global styles / design tokens                          | `src/styles/main.css`                                                   |
| Favicons, app icons, OG image                          | `src/assets/brand/icon.svg` + `pnpm assets`                             |

## Layout

```
src/
  components/    UI blocks; seo/ and observability/ are infrastructure — leave alone
  content/       pages + blog collections (schemas in src/content.config.ts)
  assets/brand/  source brand mark for generated icons and OG images
  integrations/  build-time Astro integrations (sitemap filter, CSS cascade guard)
  layouts/       Layout (head/shell) -> Page | Post | Paginated
  lib/
    capture.ts      form capture helper (submit + actionUrl)
    observability/  OpenObserve config + client
    seo/            meta resolution + JSON-LD builders
  components/forms/ capture-form.astro, newsletter-form.astro
  pages/         routes, incl. robots.txt.ts and feed.xml.js
capture.config.ts  form capture endpoint, public key, form labels
data/            editable site-wide JSON (CloudCannon data files)
scripts/         asset generation + verification (not part of the build)
```

## SEO rules (this is the point of the starter)

Every page gets its head from `src/components/seo/seo.astro` via `Layout.astro`.
**Never add `<title>`, canonical, OG, robots or JSON-LD tags in a page** — set
front matter instead; duplicates are worse than missing tags.

Per-page front matter (all optional, falls back to `data/site.json`):

```yaml
seo:
  page_description: ~155 chars, unique per page, written for humans
  featured_image: /images/... (1200x630, absolute-ised automatically)
  featured_image_alt: describes the image
  canonical_url: only when this page duplicates another URL
  open_graph_type: website | article
  no_index: false
```

What is already handled — do not re-implement:

- One canonical per page, trailing-slash-normalised to match `trailingSlash: "always"`.
- `robots` + `googlebot` with `max-image-preview:large, max-snippet:-1, max-video-preview:-1`.
- Open Graph + Twitter `summary_large_image`, with `article:*` tags on posts.
- JSON-LD `@graph`: `WebSite` + `Organization` on every page, `BlogPosting` on posts
  (author, dates, tags), `BreadcrumbList` where the layout passes breadcrumbs.
- `sitemap-index.xml` via `@astrojs/sitemap`; `no_index` pages are stripped from it by
  `src/integrations/sitemap-noindex.ts`, and 404 is filtered out.
- `/robots.txt` pointing at the sitemap; RSS at `/feed.xml`.

When writing pages, the ranking work that is still yours:

- One `<h1>` per page, headings in order, descriptive link text (never "click here").
- Unique title + description per page; front-load the primary keyword, don't stuff it.
- Every `<img>` needs real `alt`; use Astro's `<Image />` (`src/assets/`) so images are
  responsive and lazy by default — `public/` images are served unoptimised.
- Internal links between related posts; keep URLs short and stable (a slug change
  needs a redirect, which this static setup does not provide).
- Don't ship layout-shifting hero images: give width/height or use `<Image />`.
- Content collections drive the sitemap — a page not in `src/pages` or a collection
  will not be discovered.

## Observability (OpenObserve)

RUM + Logs boot from `src/components/observability/observability.astro`, mounted first
in `<head>`. Config lives in `src/lib/observability/config.ts`, sourced entirely from
typed `astro:env` client vars declared in `astro.config.mjs`.

**Rule: never hardcode OpenObserve values in components or `client.ts`. Change `.env`.**

Per project: `PUBLIC_OO_APPLICATION_ID`, `PUBLIC_OO_SERVICE`, `PUBLIC_OO_ENV`,
`PUBLIC_OO_VERSION`, `PUBLIC_OO_ENABLED`.
Org-wide (rarely change): `PUBLIC_OO_CLIENT_TOKEN`, `PUBLIC_OO_SITE`,
`PUBLIC_OO_ORGANIZATION`, `PUBLIC_OO_API_VERSION`.
Full list with comments: `.env.example`.

Behaviour: disabled by default (`PUBLIC_OO_ENABLED=false`) so `pnpm dev` is quiet;
SDKs are dynamically imported, so a disabled build never fetches them; Do Not Track /
GPC is honoured; init is idempotent and failures are swallowed — telemetry must never
break a page. Session + replay sampling default to 100% with
`defaultPrivacyLevel: "allow"` (no masking) — raise masking via `PUBLIC_OO_PRIVACY_LEVEL`
before shipping forms that collect personal data.

The client token is public by design (it can only write RUM/log events and is
rotatable). Never put a real secret behind a `PUBLIC_` prefix — those are inlined
into the browser bundle.

Instrumenting code:

```ts
import { trackEvent, trackError, logInfo, identifyUser } from "../lib/observability/client";

trackEvent("cta_clicked", { location: "hero" });
identifyUser({ id: "1", name: "Captain Hook", email: "hook@example.com" });
```

All helpers are safe no-ops when telemetry is disabled or before init resolves.

## Form submissions

Every form on this site posts to our shared capture server. Do not add a form
backend, a mail service, an SMTP integration or an API route for form handling —
one already exists and it is the only supported path.

- **Endpoint:** `POST https://api.markremover.com/v1/collect/{form}`
- **Auth:** this site's public key in the `X-Public-Key` header (or a hidden
  `key` input on a no-JavaScript form).
- **Config:** `capture.config.ts` at the repo root — endpoint, public key, form
  labels, thank-you URL, optional honeypot field. **The only file to edit when
  standing up a new site.**
- **Helper:** `src/lib/capture.ts` exports `submit(formLabel, fields)` and
  `actionUrl(formLabel)`.
- **Components:** `src/components/forms/capture-form.astro` (full form, fields
  passed as a slot) and `src/components/forms/newsletter-form.astro` (one-line
  email capture). `src/pages/contact.astro` is the reference page,
  `src/pages/thanks.astro` the no-JavaScript landing page.
- **Enhancement script:** `src/scripts/capture-forms.ts`, imported by the form
  components — a page with no form ships none of it.
- **Docs:** https://api.markremover.com/docs (machine-readable at `/openapi.json`).

### New domain checklist (three edits, no code)

1. In `capture.config.ts`, replace `publicKey` with the new site's `wcs_pk_…`
   key. That is the whole per-domain change for capture.
2. Add or rename entries in `capture.config.ts` → `forms` for the forms this
   site has (`contact`, `newsletter`, `waitlist`, `quote`, …). The label is how
   submissions are grouped in the dashboard; no registration call is needed.
3. Set `site:` in `astro.config.mjs` to the real production origin — the
   thank-you redirect is built from it and the server refuses a redirect that
   is not same-origin with the referrer.

Then drop `<CaptureForm />` or `<NewsletterForm />` onto a page. Nothing else
changes: no API route, no env var, no server code.

### Rules

1. Use `submit()` from `src/lib/capture.ts`. Never `fetch` the endpoint
   directly, or the page URL, referrer and UTM parameters go uncollected.
2. The public key (`wcs_pk_…`) is **safe in client code and safe in git** — the
   capture endpoint's database role has no `SELECT` on captured content, so the
   key can only append. Never put an admin key (`wcs_sk_…`) in this repo; that
   one reads every submission. Do not move the public key into `.env`: it is
   inlined into the bundle anyway and a missing env var breaks forms silently.
3. Every field is optional and unknown fields are kept automatically — `email`,
   `phone`, `name` and `message` get indexed columns, everything else is folded
   into the submission's `data` object. A new input just works: add it to the
   form, change nothing else.
4. Give each form a label in `capture.config.ts`. Never hardcode a label string
   in a component.
5. `200`, `201` and `202` are all success — treat `response.ok` as the test.
   `200` means a duplicate was merged (`duplicate: true`), `202` means the row
   was safely spooled while the database was briefly down. Errors are
   `application/problem+json`: show `title` to the visitor and nothing else,
   branch on `code` (it is stable; `title`/`detail` are prose).
6. Keep forms working without JavaScript: hidden `key` and `redirect` inputs
   plus a real `action`, then enhance. `redirect` must be same-origin with the
   page — the server returns `redirect_not_allowed` otherwise. On success it
   303s to `thanksUrl?wcs_id=…&wcs_outcome=…`.
7. **Never send `key` or `redirect` in the JSON body.** A body containing
   `redirect` makes the server answer `303`; `fetch` follows it, gets HTML, and
   the parse fails — the visitor sees an error for a submission that was stored.
   `submit()` strips both, which is why `new FormData(form)` is safe to pass it.
8. An `Idempotency-Key` header makes a network retry exactly-once; reusing one
   with a different body is a `409`. `submit()` sends a fresh one per attempt.
9. Security controls (origin allowlist, per-site rate limit, honeypot,
   time-trap, Turnstile, HMAC signing) are configured per site on the server and
   are all off by default. If a honeypot is switched on server-side, set
   `honeypotField` in `capture.config.ts` so the components render it.
10. Forms collect personal data — set `PUBLIC_OO_PRIVACY_LEVEL="mask-user-input"`
    before enabling session replay on a site with real form traffic.

## Conventions

- TypeScript strict; `pnpm check` must stay at 0 errors.
- Tailwind v4 is CSS-first: no `tailwind.config.js`. Add tokens/utilities in
  `src/styles/main.css` (`@theme`, `@layer`), not inline `<style>` blocks.
- **Never write an unlayered rule in `src/styles/main.css`.** Tailwind v4 emits
  utilities inside `@layer utilities`, and unlayered CSS beats every layer no matter
  the specificity or order — so a bare `* { margin: 0; padding: 0 }` silently kills
  every `p-*`, `m-*`, `mx-auto` and `space-y-*` on the site while colours and flex
  keep working. Put element and helper rules inside `@layer base` / `@layer components`.
  Tailwind's preflight already resets margin, padding and box-sizing, so no custom
  reset is needed. `pnpm build` warns (never fails) if an unlayered spacing rule
  reaches the output — `src/integrations/css-cascade-guard.ts`.
- Components are `.astro` by default. Use React islands only for real interactivity,
  with an explicit `client:*` directive.
- CloudCannon editable regions (`data-editable`, `<editable-component>`) must be kept
  intact when refactoring markup, or the visual editor breaks. New page-building
  components must be registered in `src/scripts/register-components.ts`.
- Content shape changes go in `src/content.config.ts` _and_ `cloudcannon.config.yml`.
- Site-wide values belong in `data/*.json`, not hardcoded in components.
