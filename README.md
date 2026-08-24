# Battery Digital Passport

This site provides the authoritative free information layer on the EU Battery Regulation. It is an independent resource for compliance and product managers seeking unvarnished facts without software vendor upselling, relying exclusively on official primary sources (EUR-Lex). The design follows a Technical-brutalist direction, fitting the regulatory, high-precision nature of battery passports.

## Page Inventory

- **Home (`/`)**: Main entry point explaining the mission and linking to core areas.
- **About (`/about/`)**: Information on the independent team.
- **Contact (`/contact/`)**: A functional contact form for inquiries.
- **Thanks (`/thanks/`)**: Success page for form submissions.
- **Data Model (`/data-model/*`)**: Subsections for Circularity, General Info, Materials, and Performance.
- **Editorial Policy (`/editorial-policy/`)**: The site's sourcing rules and transparency guidelines.
- **How We Make Money (`/how-we-make-money/`)**: Funding transparency page.
- **Readiness (`/readiness/*`)**: Guides for Gap Analysis and Vendor Selection.
- **Requirements (`/requirements/*`)**: Specific rules on Carbon Footprint, Recycled Content, and Supply Chain Due Diligence.
- **Timeline (`/timeline/*`)**: Key dates for 2025 Obligations and the 2027 Passport.

## How to Run and Audit

The project uses Astro, Tailwind CSS (v4), and `pnpm`. `pnpm build` intentionally runs nothing but `astro build` — no linters or formatters can block it.

1. **Install dependencies**: `pnpm install`
2. **Local Development**: `pnpm dev`
3. **Build Static Site**: `pnpm build`
4. **Run SEO & Hardening Audit**: `pnpm seo:audit` (fails on missing SEO requirements, unresolvable JSON-LD, broken internal links, etc. Must be run after `pnpm build`).

## Deploy Checklist

Before deploying, ensure the following are correctly configured:

1. **Capture API Key**: Replace the placeholder `publicKey` in `capture.config.ts` with your production, write-only public key (`wcs_pk_...`). Never commit the admin key (`wcs_sk_...`).
2. **OpenObserve Variables (Environment)**: Ensure `.env` is configured for production telemetry:
    - `PUBLIC_OO_APPLICATION_ID`
    - `PUBLIC_OO_SERVICE`
    - `PUBLIC_OO_ENV`
    - `PUBLIC_OO_ENABLED=true`
3. **DNS**: Point your production domain and ensure `site` in `astro.config.mjs` matches exactly to ensure canonical URLs and XML sitemaps render correctly.
