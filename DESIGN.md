# Aerospace UAE: Design Direction

## Art Direction
**Technical-brutalist**
The visual approach is stark, utilitarian, and focused on function. It relies heavily on high legibility, unadorned structure, and precise layouts without unnecessary embellishments (no soft gradients, glassmorphism, or rounded bubbles).

## Industry Materials & Palette (OKLCH)
The palette is derived from three real aerospace and industrial materials:

1. **Titanium (Neutral Ramp):**
   - High lightness, very low chroma (0.01 - 0.03).
   - Used for structural backgrounds, borders, and general text. Never pure grey, never pure #000.

2. **Anodized Aluminum / Warning Orange (Brand Hue):**
   - The primary brand color. High chroma, precise warning orange.
   - Covers at most a tenth of painted pixels (used for primary actions, critical indicators, and accents).

3. **Aviation Blue / Carbon Fiber (Supporting Hue):**
   - Positioned 30-60 degrees away from the brand hue.
   - Used for secondary actions, deep surfaces in dark mode, or contextual highlights.

## Typography
We rely on two distinct, self-hosted font families:
1. **Clash Display:** Used for bold, precise, structural headings.
2. **IBM Plex Sans:** Used for highly legible body copy and technical data tables.
*(Banned fonts: Inter, Poppins, Montserrat, Roboto, Open Sans, Lato)*

## Motion & Interaction Constraints
- Transitions are CSS-only.
- A one-shot scroll reveal (12-20px plus opacity, 300-500ms).
- Hover transitions strictly <= 200ms.
- Maximum one ambient element.
- CLS must strictly remain at 0, and all motion must respect `prefers-reduced-motion: reduce`.
- Dark mode is meticulously designed (not merely inverted), elevating accent chroma and replacing shadows with a 1px top highlight.
