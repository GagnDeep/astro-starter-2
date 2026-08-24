# Institute of Retirement

A fully disclosed, honestly published comparison site for near-retirees deciding where to retire abroad. It scores destinations based on cost of living, visas, healthcare, and tax implications, monetizing via affiliate links and lead generation.

Built with **Astro 6** and **Tailwind CSS v4**, this site uses progressive enhancement, an `Editorial/Swiss` art direction, and strict zero-client-JavaScript rules (Astro islands are only used when unavoidable).

## Page Inventory
The site architecture follows a hub-and-spoke model radiating from the methodology pillars:

- `/` — Homepage: Summarizes the four-pillar methodology.
- `/cost-of-living/` — Hub: Aggregates purchasing power and housing costs.
  - Spokes: `/cost-of-living/portugal-vs-spain/`, `/cost-of-living/panama-budget-breakdown/`, `/cost-of-living/costa-rica-housing-market/`
- `/visas/` — Hub: Directory of passive income and retirement visas.
  - Spokes: `/visas/spain-non-lucrative-visa/`, `/visas/panama-pensionado-requirements/`, `/visas/italy-elective-residency/`
- `/healthcare/` — Hub: Compares public vs private systems.
  - Spokes: `/healthcare/spain-private-insurance-requirements/`, `/healthcare/mexico-imss-vs-private/`, `/healthcare/pre-existing-conditions-abroad/`
- `/taxes/` — Hub: Explains tax residency triggers and dual taxation.
  - Spokes: `/taxes/portugal-nhr-alternatives/`, `/taxes/us-social-security-abroad/`, `/taxes/italy-7-percent-flat-tax/`

Other Pages:
- `/about/`, `/contact/`, `/editorial-policy/`, `/how-we-make-money/`, `/thanks/`, `/404/`

## How to Run
1. Install dependencies: `pnpm install`
2. Start development server: `pnpm dev`
3. Check types: `pnpm check`
4. Build static output to `dist/`: `pnpm build`
5. Generate brand assets (icons, OG image): `pnpm assets`

## How to Audit
After running `pnpm build`, run the rigorous SEO and link audit script:
```bash
pnpm seo:audit
```
This script ensures zero missing/duplicate SEO tags, exact H1 counts, valid canonicals, resolving JSON-LD graphs, unbroken internal trailing-slash links, and zero `http://` mixed content.

## Deploy Checklist
Before deploying, ensure you configure the following:

1. **DNS**: Point your production domain and set `site` in `astro.config.mjs`.
2. **Capture Key**: Set the `capture.publicKey` (and optionally endpoints) in `capture.config.ts` so forms (contact and newsletter) land correctly in your Markremover dashboard.
3. **OpenObserve Environment Variables**: Ensure the typed `astro:env` observability variables are correctly set for production in your CI/CD pipeline or `.env` file:
   - `PUBLIC_OO_APPLICATION_ID`
   - `PUBLIC_OO_SERVICE`
   - `PUBLIC_OO_ENV="production"`
   - `PUBLIC_OO_ENABLED=true`
