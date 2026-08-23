# Design System

**Art Direction:** Editorial/Swiss
Every layout and styling choice will be justified against this strict, grid-focused, high-legibility direction. Expect asymmetric layouts and asymmetric typography scales.

## Palette

**Inspiration Materials:** Stainless steel (neutral), Copper cookware (brand hue), and Blue apron canvas (supporting hue).

- **Neutral Ramp (Stainless Steel):** OKLCH lightness scale around chroma `0.02`, hue `250` (a cold, slightly blue, steel neutral). Never pure grey.
- **Brand Hue (Copper):** OKLCH `0.65 0.15 45` — a warm, metallic copper tone. Used sparingly as an accent covering at most 10% of painted pixels.
- **Supporting Hue (Apron Blue):** OKLCH `0.55 0.12 260` — a deep, working canvas blue.

## Typography

Self-hosted fonts specifically excluding the banned families (Inter, Poppins, Montserrat, Roboto, Open Sans, Lato).

- **Display Family:** A grotesque sans-serif with tight letter spacing, such as _Archivo_ or _Space Grotesk_. Minimum scale: `clamp(2.75rem, 6vw, 5.5rem)`, `line-height: 1.0`, `tracking: -0.03em`.
- **Body Family:** A highly legible serif or sturdy geometric sans, such as _Lora_ or _Chivo_. Size: `18px`, `line-height: 1.6`, measure capped near `65ch`.

## Layout & Motion

- At most half the sections on a page may be centred.
- Heroes are asymmetric.
- Avoid three identical feature cards (use bentos with unequal spans or alternating rows).
- **Motion:** CSS only. A one-shot scroll reveal (12-20px + opacity, 300-500ms). Hover transitions ≤200ms. One ambient element max.
- Always respect `prefers-reduced-motion`. CLS must remain zero.

## Strict Bans

No purple/indigo gradients, no centred heroes with two centred buttons, no glassmorphism, no emoji icons, no uniform 8px radius everywhere, no gradient blobs, no fake avatars, "Get Started" as the only CTA, or AI-generated 3D renders.
