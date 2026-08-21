# PLAN.md: ptetrainer.com

## Content Architecture (60+ pages)
1. **Homepage**: Targeted positioning, high-converting flow.
2. **Reference Library (15+ pages)**: Detailed breakdown of PTE Academic sections (Speaking & Writing, Reading, Listening) and 20 specific item types.
3. **Secondary Taxonomy (10+ pages)**: Score guides (e.g. "How to score 79+", "PTE vs IELTS scoring").
4. **Glossary (20-30 terms)**: PTE-specific terminology.
5. **Calculators (3-4 pages)**: PTE to IELTS converter, Study Time Estimator, Speaking Rate Calculator.
6. **Blog Posts (12 posts)**: 1,500-2,500 words each, focusing on high-intent keywords, with tables, worked examples, and cited figures.
7. **Core Pages**: Comparison, Pricing, About, FAQ, Contact, Legal (Privacy, Terms), Thanks.

## Design System
- **Palette**: Trustworthy blues and neutral grays. Strict contrast requirements.
- **Typography**: Clean sans-serif (Inter/Roboto).
- No gradients, no stock photos, no emoji icons.
- Tokens set as CSS variables in Tailwind.

## Technical Goals
- Zero client JS by default.
- Capture forms everywhere with `no-JS` fallback.
- Lighthouse >= 95, WCAG AA, CLS < 0.1.
- No orphans, clean build, robust internal linking.
