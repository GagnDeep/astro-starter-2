# STATUS.md

## Run 1 - Initial Generation (Completed)
- Phase 1 & 2 basic infrastructure implemented.
- Routes set up: `/guides/`, `/living/`, `/glossary/`, `/tools/`, `/compare/`.
- 3 Tools created: Salary Calculator, PR Points, Stamp Duty.
- Capture API wired correctly.

## Run 2 - Gap Analysis & Expansion

### Gap Analysis
- **Missing Pages (Volume):** The prompt requires 60+ real pages. We currently have ~2 guides, ~2 living pages, ~2 glossary terms, ~1 blog post. We are far short of the volume requirement (15+ guides, 10+ living, 20-30 glossary, 12 blog).
- **Missing Content Depth:** Existing guides (e.g., `economic-substance-requirements.md`) need more depth (1,500-2,500 words), FAQs, edge cases, tables, and sourced figures.
- **Missing JSON-LD & Metadata:** We need to verify that `Layout.astro` and `Post.astro` properly output JSON-LD (`Article`, `BreadcrumbList`) and that all frontmatter is piped correctly.
- **Missing Pages (Types):** FAQ, About, Contact, Legal (Privacy/Terms) pages need to be fleshed out.
- **Internal Linking:** Need to establish a robust internal linking structure between glossary, tools, and guides.
- **Orphan Pages:** Verify that there are no orphans.

### Priority Fixes for Run 2
1.  **Generate Volume & Depth:** Add at least 5 deep reference guides (1,500+ words), 3 living pages, 10 glossary terms, and 5 blog posts.
2.  **Add Legal/Contact/FAQ Pages:** Implement `/about`, `/contact`, `/legal/privacy`, `/legal/terms`.
3.  **Enhance Tools:** Add a no-JS fallback state for tools (showing reference tables).
4.  **Strengthen Capture:** Ensure capture forms are present on every reference page and tool.
5.  **Audit JSON-LD:** Review SEO components for correct structured data.
