# Institute of Underwriting

A sponsorship-funded resource and newsletter for commercial and specialty insurance underwriters. *Disclaimer: The Institute of Underwriting is a trade publication and is not a chartered professional body.*

This repository is built on a CloudCannon CMS starter template using **Editable Regions** for visual editing, and uses **Tailwind CSS v4** with a CSS-first approach.

## Page Inventory
- **Home**: `src/content/pages/index.md`
- **About**: `src/content/pages/about.astro`
- **Commercial Property**: `src/content/pages/commercial-property/index.md`
  - Business Interruption Worksheets: `src/content/pages/commercial-property/business-interruption-worksheets.md`
  - Fire Protection Classes: `src/content/pages/commercial-property/fire-protection-classes.md`
  - Wind Hail Deductibles: `src/content/pages/commercial-property/wind-hail-deductibles.md`
- **Cyber Risk**: `src/content/pages/cyber-risk/index.md`
  - Business Email Compromise: `src/content/pages/cyber-risk/business-email-compromise.md`
  - Ransomware Controls: `src/content/pages/cyber-risk/ransomware-controls.md`
  - Vendor Supply Chain Risk: `src/content/pages/cyber-risk/vendor-supply-chain-risk.md`
- **Liability Casualty**: `src/content/pages/liability-casualty/index.md`
  - Excess Umbrella Attachment Points: `src/content/pages/liability-casualty/excess-umbrella-attachment-points.md`
  - General Liability Classification Codes: `src/content/pages/liability-casualty/general-liability-classification-codes.md`
  - Workers Compensation Experience Modifiers: `src/content/pages/liability-casualty/workers-compensation-experience-modifiers.md`
- **Specialty Lines**: `src/content/pages/specialty-lines/index.md`
  - Directors and Officers: `src/content/pages/specialty-lines/directors-and-officers.md`
  - Environmental Pollution: `src/content/pages/specialty-lines/environmental-pollution.md`
  - Inland Marine Transit: `src/content/pages/specialty-lines/inland-marine-transit.md`
- **Sponsorship**: `src/content/pages/sponsorship.md`
- **Contact**: `src/pages/contact.astro`
- **Thanks**: `src/pages/thanks.astro`
- **Blog (Articles)**: `src/pages/articles/index.astro`, `src/content/blog/*.mdx`
- **404**: `src/pages/404.astro`

## How to run and audit

1. **Install dependencies**: `pnpm install`
2. **Development server**: `pnpm dev`
3. **Build site**: `pnpm build`
4. **Type check**: `pnpm check`
5. **SEO Audit**: `pnpm seo:audit` (Run this after `pnpm build` to verify SEO checks, broken links, canonicals, etc).

## Deploy Checklist

Before deploying, ensure the following environment variables and settings are configured:
- **Capture Key**: Set the capture key in `capture.config.ts` or via the respective environment variable for `https://api.markremover.com` to process form submissions.
- **OpenObserve Variables**:
  - `PUBLIC_OO_SERVICE`
  - `PUBLIC_OO_APPLICATION_ID`
  - `PUBLIC_OO_ENV`
  - `PUBLIC_OO_ENABLED=true`
- **DNS**: Ensure DNS points correctly and `site` in `astro.config.mjs` matches the production domain (`https://instituteofunderwriting.com/`).
