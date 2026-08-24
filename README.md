# Washington DC Review

The Institute of Underwriting (washingtondcreview.com) is a sponsorship-funded resource and newsletter for commercial and specialty insurance underwriters. It serves as a trade publication providing authoritative reference material, comparisons, and industry news. **Note:** It is not a chartered professional body and includes disclaimers confirming its status.

## Page Inventory

- **Homepage (`/`)**: Main landing page with a hero, left-right feature blocks, and recent posts.
- **Blog (`/blog/` and `/blog/[slug]/`)**: Articles, industry news, and long-form guides.
- **Tags (`/tags/[tag]/`)**: Tag-based blog archives.
- **Contact (`/contact/`)**: Uses our shared capture form endpoint.
- **Thanks (`/thanks/`)**: Landing page after form submission.
- **404 (`/404/`)**: Custom error page.
- **Content Hubs (e.g. `/compliance/`, `/certifications/`, `/gsa-schedules/`, `/getting-started/`)**: In-depth pillar pages about specific topics.

## Local Development & Auditing

Install dependencies and run the local development server:
```bash
pnpm install
pnpm run dev
```

To build and audit the site before deployment:
```bash
pnpm build
pnpm run seo:audit
pnpm check
```
*Note: `pnpm build` intentionally runs nothing but `astro build`. The audit (`pnpm seo:audit`) must be run separately against the `dist` directory to enforce our strict SEO checks.*

## Deployment Checklist

Before deploying this site to a new domain, verify these essential configurations:

1. **DNS**:
   - Point your custom domain records correctly to the hosting environment.

2. **Capture Server Configuration**:
   - In `capture.config.ts`, replace `publicKey` with the new site's public key (`wcs_pk_…`). This is safe to commit.
   - Verify that your form labels in `capture.config.ts` match the endpoints defined on the capture server.
   - Ensure the site URL is updated in `astro.config.mjs` (`site` variable). Forms will refuse redirects to mismatched origins.

3. **OpenObserve Environment Variables (Observability)**:
   - Configure telemetry in your deployment environment (or `.env` file):
     - `PUBLIC_OO_APPLICATION_ID`
     - `PUBLIC_OO_SERVICE`
     - `PUBLIC_OO_ENV`
     - `PUBLIC_OO_ENABLED=true` (Off by default to keep dev environments quiet).

