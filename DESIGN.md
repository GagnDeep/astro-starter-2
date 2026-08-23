# Design Specifications

## Art Direction: Warm-organic
The design direction is **Warm-organic**. The handpan is a deeply resonant, tactile instrument born out of steel and human craftsmanship, usually played with the hands. The visual style reflects this tactility and warmth. We avoid sterile, technical-brutalist layouts or overly playful tech-startup aesthetics.

## Palette (OKLCH)
Based on three industry materials: Nitrided Steel (brand hue), Brass/Bronze (supporting hue), and Hammered Metal (neutral ramp).

- **Brand Hue (Nitrided Steel):** A deep, rich, warm grey/brown. OKLCH: `oklch(0.35 0.05 45)`
- **Supporting Hue (Brass/Bronze):** A warm, resonant amber/gold. Used for accents (at most a tenth of painted pixels). OKLCH: `oklch(0.65 0.15 75)`
- **Neutral Ramp (Hammered Metal):** Near-neutrals with slight warmth. Chroma kept strictly at 0.01 - 0.03 (never pure grey).

### Dark Mode
Dark mode is designed, not inverted.
- Surfaces use the brand hue at low lightness (e.g., `oklch(0.20 0.05 45)`), never `#000`.
- Accent chroma is slightly raised for legibility.
- Shadows are replaced with a 1px top highlight.

## Typography
- **Headings (Display):** *Instrument Serif* or *Fraunces* (Self-hosted).
  - Sizes: `clamp(2.75rem, 6vw, 5.5rem)` for primary display.
  - Line-height: `0.95 - 1.05`.
  - Tracking: `-0.02em` to `-0.035em`.
- **Body:** *Newsreader* or *Lora* (Self-hosted).
  - Sizes: `17-19px`.
  - Line-height: `1.6`.
  - Measure: Capped near `65ch`.
- Banned fonts: Inter, Poppins, Montserrat, Roboto, Open Sans, Lato.

## Layout & Motion
- At most half the sections on a page may be centred.
- Hero is asymmetric.
- Never three identical feature cards (use bento, numbered lists, or alternating rows).
- Motion: CSS only. One-shot scroll reveal (12-20px + opacity, 300-500ms). Hover transitions <= 200ms. At most one ambient element. Must respect `prefers-reduced-motion`. CLS strictly 0.

## Banned Elements
Purple or indigo gradients, a centred hero with two centred buttons, glassmorphism, emoji as icons, a uniform 8px radius everywhere, gradient blobs, fake avatars, "Get Started" as the only CTA, AI-generated 3D renders.
