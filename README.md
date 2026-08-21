# ClearPath Finance

A comprehensive, action-oriented financial planning reference library and toolkit for independent professionals and self-directed investors.

## Overview
Built with Astro and Tailwind CSS, this site provides:
- Over 60 deeply researched reference pages, glossary terms, and blog posts.
- Actionable tools (Retirement Calculator, Mortgage Payoff, Compound Interest) driven by verified mathematical logic and complete with no-JavaScript fallbacks showing the formulas.
- A fully responsive, zero-client-JS default architecture (with Astro islands for interactive tools).
- Robust Lead Capture forms distributed strategically throughout the site per the specific business requirements.

## Development

```bash
pnpm install
pnpm dev
pnpm build
pnpm check
```

## Tools
The calculators run their logic strictly on the client using standard compounding and amortization formulas. When JS is disabled, they present the fallback method to the user so they can do the calculations themselves.
