# Design Specifications

## Art Direction: Technical-brutalist
- Justification: Compliance (SB 253/261) demands clarity, rigor, and an absence of fluff. A Technical-brutalist aesthetic strips away embellishment and focuses purely on readable data, statutory citations, and structured reporting.

## Color Palette (OKLCH)
Based on three industry materials related to reporting and sustainability (recycled paper/cardboard, technical blueprints/carbon accounting charts, and industrial steel/concrete):
- **Brand Hue (Carbon/Steel):** `oklch(0.35 0.05 250)` (a deep slate blue/grey for severe tech authority)
- **Supporting Hue (Recycled Cardboard/Manila):** `oklch(0.85 0.04 70)` (a muted, warm beige/tan 180 degrees away for contrast and warmth)
- **Neutral Ramp (Industrial Concrete):** `oklch(0.95 0.01 250)` to `oklch(0.15 0.01 250)` (almost zero chroma, very stark greys)
- *Constraint: The accent (Brand Hue) covers at most a tenth of painted pixels.*

## Typography
- Two self-hosted families (None of: Inter, Poppins, Montserrat, Roboto, Open Sans, Lato)
  - **Display:** Space Grotesk (or similar stark, structured geometric sans) - `clamp(2.75rem, 6vw, 5.5rem)`, line-height `0.95-1.05`, tracking `-0.02` to `-0.035em`.
  - **Body:** Lora (or similar functional serif to convey regulatory authority) - `17-19px`, line-height `1.6`, measure capped near `65ch`.

## Dark Mode
- Designed, not inverted.
- Surfaces are the brand hue at low lightness (never `#000`).
- Accent chroma is raised.
- Shadows are replaced with a `1px` top highlight.

## Layout Constraints
- At most half the sections on a page may be centred.
- Hero is asymmetric.
- Never use three identical feature cards (use bento with unequal spans, numbered lists, or alternating rows).

## Motion Constraints
- One-shot scroll reveal (12-20px plus opacity, 300-500ms).
- Hover transitions at or under 200ms.
- At most one ambient element.
- CSS only.
- Respects `prefers-reduced-motion: reduce`.
- CLS strictly zero.

## Banned Elements
- Purple or indigo gradients
- Centred hero with two centred buttons
- Glassmorphism
- Emoji as icons
- Uniform 8px radius everywhere
- Gradient blobs
- Fake avatars
- "Get Started" as the only CTA
- AI-generated 3D renders
