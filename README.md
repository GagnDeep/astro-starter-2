# Aerospace UAE

Aerospace UAE is a subscription directory and hiring board for the UAE's Tier 2/3 aerospace and MRO supply chain. It connects buyers, recruiters, and suppliers within the United Arab Emirates.

## What This Site Is
This static site, built with Astro and Tailwind CSS v4, serves as an independent reference data repository. It includes pages for directory listings, job postings, industry reference posts, and lead generation, and works entirely without relying on client-side JavaScript by default.

**Note:** The site is strictly a B2B platform. It is not affiliated with the UAE government, nor does it host journalism or news reporting.

## Page Inventory
- **Homepage (`/`)**: Main entry and orientation.
- **Directory (`/directory/`)**: A structured list of certified suppliers and organizations. Includes nested pages (e.g., `/directory/cnc-machining/`, `/directory/ndt-services/`).
- **Jobs Board (`/jobs/`)**: Open aerospace sector jobs in the UAE. Features specific postings for roles like Licensed Engineers, Structures Technicians, etc.
- **Blog / Knowledge Base (`/blog/`)**: Technical reference articles and industry posts.
- **About (`/about/`)**: The organization’s purpose.
- **Contact (`/contact/`)**: A functional contact page using our capture forms.
- **Legal & Meta**: `404`, `thanks`, `/privacy/`, `/terms/`, `/editorial-policy/`, and `/how-we-make-money/`.

## Running and Auditing the Site
The site uses `pnpm` for package management.

### Commands
- **Install dependencies**:
  ```bash
  pnpm install
  ```
- **Run the local development server**:
  ```bash
  pnpm dev
  ```
- **Build the site for production**:
  ```bash
  pnpm build
  ```
  *(This is the only deployment gate. It intentionally runs nothing but `astro build`)*
- **Check TypeScript types**:
  ```bash
  pnpm check
  ```
- **Run SEO and hardening audits**:
  ```bash
  pnpm seo:audit
  ```
  *(Always run this after building. It checks for duplicate titles, missing h1s, correct trailing slashes, JSON-LD @id validity, Open Graph tags, broken internal links, and ensures no `http://` assets exist).*

### Design and Build Constraints
- **Styling**: Tailwind CSS v4 is used with a defined `Technical-brutalist` theme in `src/styles/main.css`. No hex values directly in HTML.
- **SEO & Links**: Trailing slashes are enforced (`trailingSlash: "always"`). There is no inline SEO frontmatter allowed on pages; everything connects through `src/lib/seo/schema.ts` and front matter properties.

## Deploy Checklist
Before taking this site to production, you must confirm the following configuration values:

1. **Capture Key**: Set the appropriate write-only `publicKey` in `capture.config.ts`. (Never commit the secret key).
2. **Observability**: Add and configure the `PUBLIC_OO_APPLICATION_ID`, `PUBLIC_OO_SERVICE`, `PUBLIC_OO_ENV`, and set `PUBLIC_OO_ENABLED=true` inside `.env` or your hosting platform’s environment variables.
3. **DNS**: Confirm that the domain matches the `site` variable in `astro.config.mjs` (which drives RSS, `sitemap.xml`, canonicals, etc.).

