# bro.tax — Taxes Without the Suits

**bro.tax** is an irreverent, CPA-verified, zero-bs tax estimation platform and write-off intelligence system built for US freelancers, creators, gig workers, and self-employed professionals in their 20s–30s.

---

## 📦 Dependency Justification & Pinned Versions

All dependencies in `package.json` are strictly pinned without wildcards (`^` or `~`) to ensure deterministic builds across development, CI/CD, and production environments.

| Package | Version | Purpose & Justification |
| :--- | :--- | :--- |
| `astro` | `6.0.2` | Core static site generator framework providing fast build times, zero client JS by default, and content collections. |
| `@astrojs/mdx` | `5.0.0` | Enables MDX support for rich educational guides and deduction articles with interactive component embedding. |
| `@astrojs/react` | `4.3.0` | UI framework integration required solely for the interactive Tax Estimator island (`client:visible`). |
| `@astrojs/sitemap` | `3.2.1` | Automatically generates compliant XML sitemaps for maximum search engine crawlability across all route collections. |
| `@astrojs/rss` | `4.0.17` | Generates official RSS 2.0 XML feeds (`/rss.xml`) for blog posts and freelance tax guides. |
| `tailwindcss` | `4.0.0` | Utility-first CSS engine powering the high-contrast design system. |
| `@tailwindcss/vite` | `4.0.0` | Lightning-fast Vite integration for Tailwind CSS v4 design tokens and theme rules. |
| `lucide-react` | `0.475.0` | Clean, accessible, lightweight vector SVG icons (replaces raw emoji/stock icons). |
| `react` & `react-dom`| `18.3.1` | Production UI library powering stateful logic inside the Tax Estimator island. |
| `@astrojs/check` | `0.9.4` | Diagnostic tool for running full TypeScript and template checking across all Astro files. |
| `typescript` | `5.7.3` | Strong static typing for Zod schemas, tax math functions, and component props. |
| `sharp` | `0.33.5` | Native image processing engine for Astro's `astro:assets` optimization pipeline. |

---

## 🛠️ Architecture & Build Verification

### Local Development
```bash
npm install
npm run dev
```

### Type Checking & Build
```bash
npm run check    # Runs npx astro check
npm run build    # Generates production SSG output in dist/
```

---

## 🎨 Design System Rules

1. **Tokens Only:** All styling references CSS variables declared in `src/styles/global.css` and mapped via `@theme` in Tailwind CSS v4. No raw hex colors in component files.
2. **Tabular Monospace Numbers:** Every financial figure, rate, and date uses `font-mono` and `tabular-nums` for precise visual vertical alignment.
3. **SSG First:** Entire site is static HTML. The React Tax Estimator is the only island (`client:visible`), which degrades gracefully to static HTML worked examples and official rate tables when JavaScript is disabled.
