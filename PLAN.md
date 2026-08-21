# Execution Plan

1. **Setup & Config**
   - Update `data/site.json` and `astro.config.mjs` for proteinorfiber.com.
   - Update `capture.config.ts` for form endpoints.
   - Setup Tailwind tokens in `src/styles/main.css`.

2. **Scaffolding the Route Tree**
   - 15+ page reference library (e.g., specific fibers, specific proteins).
   - 10+ page secondary taxonomy (e.g., goals, diets).
   - 3-4 calculators (Protein Calculator, Fiber Calculator, Satiety Index Calculator).
   - 20-30 term glossary.
   - 12 posts.
   - Core pages (comparison, pricing, about, FAQ, contact, legal).

3. **Content Generation**
   - Write scripts to generate markdown files for the 60+ pages to meet the volume requirement without manual typing of every page.
   - Ensure `seo` frontmatter is populated.
   - Ensure internal links are generated.

4. **Tools Development**
   - Implement Calculators with Zod, Vanilla JS (or React islands if necessary), and no-JS fallbacks.
   - Verify maths.

5. **Capture Integration**
   - Embed `<CaptureForm />` and `<NewsletterForm />` in hero, reference pages, after posts, in tool results, and footer.

6. **Audits and Fixes**
   - Run `pnpm build` and `pnpm check`.
   - Run Lighthouse audits (simulated via strict semantic HTML and Astro performance).
   - Verify forms and accessibility.
