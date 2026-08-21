# STATUS.md

## Current State
The FreeFileForm project has 60+ pages (guides, types, tools, glossary, blog) and 4 interactive calculators. Capture forms are wired. Dynamic routing is fixed.

## Ranked Gap List (Top Down Priority)
1. **Content Depth:** 5 weakest pages (e.g., standard-deduction-2024, child-tax-credit, w2-form-guide, 1099-nec-vs-1099-misc, irs-free-file) need deepening with tables, examples, sourced numbers, and edge cases.
2. **Missing Internal Links:** Most blog posts and guides have only 2 links; they need 4+ to meet the spec.
3. **Capture Placement:** Need to verify that capture components are embedded natively within the Markdown/MDX or the layout templates for *every* reference page, *after every post*, and in *tool results*.
4. **Tool Verification:** Verify 2024 constants inside `refund-calculator.astro`, `self-employment-calculator.astro`, `w4-calculator.astro`, `capital-gains-calculator.astro`.
5. **[NEEDS CONFIRMATION] Missing OG Images:** The generated `thumb_image_path` in blog posts uses a placeholder image. Real images should be curated for each post to avoid duplicate visual assets.
