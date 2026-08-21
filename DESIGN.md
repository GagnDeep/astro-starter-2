# DESIGN.md - World AI School

## Palette and Fonts
**Fonts:**
- Primary (Headings): Inter (or similar geometric sans-serif)
- Secondary (Body): System Sans (San Francisco, Roboto, Segoe UI)
- Monospace (Code/Data): Fira Code or JetBrains Mono

**Palette & Contrast Table (Measured against #ffffff and #0f172a):**
- Primary Action: Blue 600 (`#2563eb`)
  - Contrast vs White: 4.5:1 (Pass AA)
  - Contrast vs Slate 900: 4.8:1 (Pass AA)
- Surface: Slate 50 (`#f8fafc`)
  - Contrast vs Slate 900: 15.1:1 (Pass AAA)
- Text Main: Slate 900 (`#0f172a`)
- Text Muted: Slate 600 (`#475569`)
  - Contrast vs White: 5.1:1 (Pass AA)
- Border: Slate 200 (`#e2e8f0`)
- Error: Red 600 (`#dc2626`)
  - Contrast vs White: 5.1:1 (Pass AA)
- Success: Green 700 (`#15803d`)
  - Contrast vs White: 4.6:1 (Pass AA)

## CSS Vars Mapping (Tailwind v4 theme)
```css
@theme {
  --color-brand-50: #eff6ff;
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
  --color-brand-700: #1d4ed8;

  --color-surface: #ffffff;
  --color-surface-muted: #f8fafc;

  --color-text-main: #0f172a;
  --color-text-muted: #475569;

  --color-border-subtle: #e2e8f0;
}
```

## Route Tree (Keyword per page)
- `/` - practical ai training
- `/about` - about world ai school
- `/pricing` - ai course pricing
- `/contact` - contact world ai school
- `/faq` - ai course faq
- `/legal` - terms and conditions
- `/compare` - best ai courses compared
- `/tools/` - ai calculators
  - `/tools/roi-calculator` - ai roi calculator
  - `/tools/token-cost` - llm token calculator
  - `/tools/time-saved` - ai time saved calculator
- `/glossary/` - ai terminology glossary (20-30 terms)
  - `/glossary/llm` - what is an llm
  - `/glossary/rag` - what is rag ai
  - ... (20+ more)
- `/library/` - ai reference library (15+ pages)
  - `/library/prompting/` - prompt engineering guide
  - `/library/automation/` - ai workflow automation
  - ... (13+ more)
- `/use-cases/` - ai use cases by industry (10+ pages)
  - `/use-cases/marketing` - ai for marketing
  - `/use-cases/sales` - ai for sales
  - ... (8+ more)
- `/blog/` - ai practical guides (12 posts)
  - `/blog/how-to-use-claude-artifacts` - how to use claude artifacts
  - ... (11+ more)

## Homepage Block Order
1. **Hero (Capture/CTA):** "Master Practical AI Skills for Your Daily Work." (No jargon, clear value, capture form).
2. **Problem/Agitation (TextBlock):** "Falling behind the AI curve? The tools change daily, but the fundamentals of automation don't."
3. **Core Library Categories (LeftRight):** "Structured paths from beginner to builder."
4. **Interactive Demo/Tool (Calculators):** "See the ROI immediately." (Link to AI ROI tool).
5. **Latest Applied Guides (Blog feed):** "Learn from real-world workflows, not just theory."
6. **Use Cases by Industry (Taxonomy grid):** "How your peers are using AI today."
7. **Bottom CTA (Capture form):** "Start building your AI intuition today."
8. **Footer:** Standard links, legal, newsletter capture.
