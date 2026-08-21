# ibs-go.com — IBS Go Web Portal & App Companion

Marketing site, low-FODMAP food directory, symptom reference, protocol guides, and interactive tools for **IBS Go**, a warm, practical, non-judgemental IBS symptom and low-FODMAP diet tracking app.

## Design System & Justification

- **Color Palette:**
  - **Primary Warm Terracotta (`#C85A32`):** Evokes warmth, earthiness, human comfort, and vitality without the sterile "clinical white-and-teal" health app cliché.
  - **Secondary Sage Green (`#4A7A63`):** Represents growth, nature, ease, and restoration.
  - **Background Oat/Sand (`#FDFBF7`, `#F4EFE6`):** Gentle on the eyes, avoiding harsh pure-white glare for users who may be reading while uncomfortable.
  - **Charcoal Text (`#2C2825`):** High-contrast, warm dark grey for optimal WCAG AA accessibility readability.
- **Typography:**
  - Standard system sans-serif with geometric/humanist fallback characteristics (`system-ui`, `-apple-system`, `sans-serif`) for rapid, lightweight loading.
  - **Monospace Tabular Numerals (`font-numeric`, `font-mono`):** Applied to all quantitative values, clinical serving thresholds, dates, pricing, and nutrient metrics to align with strict health publishing standards.
- **Motif:** Gentle, organic gut-leaf curves (`<svg>` brand mark and decorative divider accents) representing balance, digestive transit, and nourishment.

## Health Rules & Clinical Compliance

1. **Cited Evidence:** Every clinical threshold and protocol claim cites authoritative bodies (Monash FODMAP Research Group, NICE CG61 guidelines, ACG Clinical Guideline 2021) with explicit publication or revision dates.
2. **Medical Advice Disclaimer:** Prominently featured across header, footer, and individual clinical/food/symptom pages:
   > *Education only. IBS Go provides educational information and self-tracking tools. It is not a diagnostic tool and does not replace professional medical advice, diagnosis, or treatment.*
3. **Red-Flag Warnings:** Prominently displayed across symptom and protocol guides:
   > *Consult a healthcare professional immediately if you experience red-flag symptoms: unexplained weight loss, nocturnal diarrhea, rectal bleeding, persistent vomiting, fever, or new onset symptoms after age 50.*
4. **Time-Limited Protocol:** Low-FODMAP is explicitly framed as a 2-6 week elimination phase followed by structured reintroduction, avoiding unnecessary long-term restrictive eating.
5. **Mark Unconfirmed Data:** Any prospective clinical trial or user outcome is explicitly marked `[NEEDS CONFIRMATION]`.

## Commands

```bash
pnpm install
pnpm dev            # Local server at http://localhost:4321
pnpm build          # Static output to dist/
pnpm check          # Astro type check
pnpm assets         # Regenerate icons and Open Graph images
```
