# Design Law

## Art Direction

- **Editorial/Swiss:** The chosen art direction, utilizing asymmetric hero sections, stark contrast, strong typography, and disciplined grids.

## Palette (OKLCH)

- Derived from industry materials:
  - **Stainless Steel:** Neutral ramp, chroma 0.01-0.03.
  - **Copper:** Brand hue (warmth, cooking vessels).
  - **Blue Apron Canvas:** Supporting hue (30-60 degrees away, utility).
- Accent usage covers at most a tenth of painted pixels.
- **Dark Mode:** Surfaces use the brand hue at low lightness (never #000), raised accent chroma, and a 1px top highlight instead of drop shadows.

## Typography

- Two self-hosted families (excluding Inter, Poppins, Montserrat, Roboto, Open Sans, Lato).
- Display text minimum size: clamp(2.75rem, 6vw, 5.5rem), line-height 0.95-1.05, tracking -0.02 to -0.035em.
- Body text: 17-19px at line-height 1.6; measure capped near 65ch.

## Layout Rules

- At most half the sections on a page may be centered.
- The hero is asymmetric (fitting the Swiss direction).
- Never use three identical feature cards side-by-side. Use a bento grid with unequal spans, a numbered editorial list, or alternating full-width media rows.

## Motion

- Motion is strictly CSS only.
- One-shot scroll reveal: 12-20px plus opacity, 300-500ms.
- Hover transitions: ≤ 200ms.
- Maximum one ambient element.
- Everything must be wrapped in `prefers-reduced-motion: reduce`.
- CLS must stay at zero.

## Strict Bans

- No purple or indigo gradients.
- No centered hero with two centered buttons.
- No glassmorphism.
- No emoji as icons.
- No uniform 8px radius everywhere.
- No gradient blobs.
- No fake avatars.
- "Get Started" cannot be the only CTA.
- No AI-generated 3D renders.
