const fs = require('fs');

// We need to evaluate if the blog posts are ACTUALLY 1500-2500 words and unique,
// and if reference/guides are robust. The prompt states:
// "never rescaffold, re-theme, re-plan or duplicate an existing route. Write a ranked gap list to /STATUS.md (thin pages, missing metadata/JSON-LD/OG/alt/internal links, broken capture forms, orphans, stale figures, failing audits), then fix top-down."

const statusContent = fs.readFileSync('STATUS.md', 'utf8');

const newStatus = `# STATUS (Iteration 2)

## Ranked Gap List
1. **Thin Pages (Critical):** The generated blog posts, reference pages, and guides currently contain repetitive filler text and fall short of the 1500-2500 word requirement per post. They lack detailed examples, tables, edge cases, and sourced numbers.
2. **Missing Internal Links (High):** Pages need robust internal linking (at least 2 links per page).
3. **Missing Metadata/SEO (Medium):** Verify that all pages have correct \`seo\` frontmatter fields set according to \`CLAUDE.md\` constraints (description, canonical_url, etc.).
4. **Tool Explanations (Medium):** Tools require deeper scenarios and clearer result explanations.

## Progress
- Fixing Gap 1: Deepening the 5 weakest pages with examples, tables, edge cases, and sourced numbers.
`;

fs.writeFileSync('STATUS.md', newStatus);
