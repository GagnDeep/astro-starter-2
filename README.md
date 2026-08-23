# Institute of Restaurants

A technology comparison and trade publication site for independent restaurant owners.

## What this site is
Institute of Restaurants is a technology comparison site designed to help independent restaurant owners evaluate Point of Sale (POS), reservation, payroll, and online ordering systems. It positions itself strictly as a trade publication and is **not** a professional body or accrediting institute.

## Page Inventory
- **Home:** `/`
- **About:** `/about/`
- **Methodology:** `/methodology/`
- **Contact:** `/contact/`
- **Thanks:** `/thanks/` (Form submission success)
- **Blog:** `/blog/` (and individual posts under `/blog/[slug]/`, tags under `/tags/[tag]/`)
- **POS Comparisons:** `/pos/`, `/pos/fine-dining/`, `/pos/food-truck/`, `/pos/toast-vs-square/`, `/pos/touchbistro-alternatives/`
- **Reservations:** `/reservations/`, `/reservations/deposit-handling/`, `/reservations/table-management/`
- **Online Ordering:** `/online-ordering/`, `/online-ordering/no-commission/`, `/online-ordering/toast-integration/`
- **Payroll:** `/payroll/`, `/payroll/multistate/`, `/payroll/tipped-minimum-wage/`

## How to run and audit it
1. `pnpm install`
2. `pnpm dev` to run the development server
3. `pnpm build` to generate the static site output to `dist/` (this is the only gate and contains no tests/lints)
4. `pnpm check` for type-checking
5. `pnpm audit` to run the SEO, link, and hardening script against the built `dist/` folder
6. `pnpm assets` for brand asset generation

## Deploy Checklist
- **DNS:** Configure domain and ensure HTTPS is provisioned.
- **Capture Form Key:** Ensure the form endpoint config (`capture.config.ts`) or associated environment variables are correct for form submission (`https://api.markremover.com`).
- **OpenObserve Variables:**
  - `PUBLIC_OO_APPLICATION_ID`
  - `PUBLIC_OO_SERVICE`
  - `PUBLIC_OO_ENV`
  - `PUBLIC_OO_ENABLED=true`

---

(Original CloudCannon/Astro starter readme instructions removed for clarity.)
