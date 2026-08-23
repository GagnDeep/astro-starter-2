# Design System

## Art Direction
- **Technical-brutalist**: Selected for a regulatory/compliance focused site. Highly legible, structured, dense but clearly hierarchical. Prioritises factual accuracy over decorative flair.

## Palette & Materials
- **Materials:**
  1. Cobalt (blue-tinted battery component)
  2. Graphite (anode material, dark grey/black)
  3. Lithium salt (white/light grey powder)
- **OKLCH Colors:**
  - **Brand Hue (Cobalt):** `oklch(0.55 0.15 260)`
  - **Supporting Hue (Copper/Nickel contrast - 40 deg):** `oklch(0.70 0.10 300)` (shifted slightly for warning/alert statuses)
  - **Neutral Ramp (Graphite/Lithium):** Chroma 0.01-0.03 from `oklch(0.99 0.01 260)` down to `oklch(0.15 0.02 260)`. Never pure grey.

## Typography
- **Families:**
  - *Primary (Headings):* System UI (fallbacks applied) for now; will self-host a structured grotesque (e.g. *Space Grotesk* or *JetBrains Mono* for data). No Inter/Roboto/Open Sans.
  - *Body:* A highly legible system serif or structured sans for reading long compliance texts.
- **Sizing & Measure:**
  - Display headers: `clamp(2.75rem, 6vw, 5.5rem)`, leading `0.95-1.05`, tracking `-0.02em`.
  - Body: 17-19px, line-height 1.6, measure capped near `65ch`.

## Layout & Components
- Asymmetric heroes; max 50% sections centered.
- Bento grids for non-identical cards.
- Motion: CSS only, max one scroll reveal, fast hover (< 200ms). Respect `prefers-reduced-motion`.
- Dark Mode: Lower lightness of brand hue, replace shadows with 1px top border highlight.
