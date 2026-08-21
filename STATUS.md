# STATUS: UPlayVideo

## Ranked Gap List
1.  **Thin Calculators:** `bitrate-calculator.astro`, `aspect-ratio.astro`, and `storage-needs.astro` are currently just placeholders and need full vanilla JS logic, verified maths, and no-JS fallbacks.
2.  **Thin Blog Pages:** The 12 generated blog posts are stubs (~100 words). They need to be expanded to 1,500-2,500 words with tables, tradeoffs, and cited figures. (Starting with top 3).
3.  **Missing Internal Links:** Most reference/glossary/format pages lack the minimum 2 internal links to other relevant content.
4.  **Incomplete SEO Metadata:** Not all pages are utilizing `seo: { ... }` fully with unique descriptions.

## Current Progress
- 60+ pages scaffolded.
- Global layout, SEO pipeline, and Tailwind CSS variables implemented.
- Base `VideoPlayer` and `Video File Size Calculator` implemented.
- Capture forms (Newsletter, Waitlist, Contact) integrated into components.

## Open [NEEDS CONFIRMATION] Items
- "How to extract audio from a YouTube video" (Pivot to generic local extraction confirmed by in-browser constraint).
