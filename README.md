# AI & Investing

A published, reproducible back-testing site for AI stock-picking tools, targeting retail investors. This site relies on rigorous data and transparent methodologies.

## Page Inventory

- **`/`** - Homepage
- **`/methodology/`** - Explanation of our back-testing methods
- **`/reviews/`** - Tool reviews
- **`/back-tests/`** - Back-testing results
- **`/comparisons/`** - Tool comparisons
- **`/editorial-policy/`** - Our editorial policy and disclaimer
- **`/contact/`** - Contact form
- **`/about/`** - About the team

## Running the Site

```bash
pnpm install
pnpm dev
```

To build for production:

```bash
pnpm build
```

## Auditing

Run the following checks before deploying:

```bash
pnpm check      # TypeScript type checking
pnpm seo:audit  # Custom SEO and quality audit on the built output
```

The SEO audit ensures:
- Unique titles and descriptions
- Exactly one `<h1>` per page
- Valid JSON-LD
- No broken links or missing canonicals

## Deploy Checklist

Before deploying, ensure the following are configured correctly:

1. **Capture Key**: Set the appropriate capture key in `capture.config.ts`.
2. **OpenObserve Variables**: Configure `.env` with your `PUBLIC_OO_*` variables for telemetry.
3. **DNS**: Ensure the domain points to the correct production server.
