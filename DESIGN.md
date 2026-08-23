# Design Direction

**Art Direction**: Editorial/Swiss

## Palette
Derived from industry materials and defined in OKLCH:
- **Navy Passport Cover (Brand Hue)**: `oklch(22% 0.05 255)` — Low lightness, authoritative.
- **Gold Emblem/Seal (Supporting Hue)**: `oklch(75% 0.15 85)` — ~170 degrees away, accents for interactions.
- **Parchment/Application Paper (Neutral Ramp)**: `oklch(95% 0.01 90)` down to `oklch(20% 0.02 260)` — Warm, extremely low chroma neutrals, never pure grey.
*(Accent covers at most a tenth of painted pixels)*

## Dark Mode
Designed, not inverted:
- Surfaces use the low-lightness brand hue (`oklch(15% 0.04 255)`), never `#000`.
- Accent chroma is slightly raised for visibility.
- Shadows are replaced with a 1px top highlight for depth.

## Typography
- Two self-hosted families (excluding banned generic Google Fonts):
  - **Display Face**: Bricolage Grotesque (or similar robust grotesque). Size: `clamp(2.75rem, 6vw, 5.5rem)`, Line-height: `0.95-1.05`, Tracking: `-0.02 to -0.035em`.
  - **Body Face**: Switzer (or similar workhorse sans). Size: `17-19px`, Line-height: `1.6`, Measure capped at `~65ch`.

## Layout & Motion
- **Layout**: At most half the sections centred. Hero is asymmetric unless explicitly Swiss (we are using Swiss, so we have flexibility, but prefer structured grid alignments). No three identical feature cards (use bento or lists instead).
- **Motion**:
  - One-shot scroll reveal (12-20px plus opacity, 300-500ms).
  - Hover transitions <= 200ms.
  - At most one ambient element.
  - CSS only. Honours `prefers-reduced-motion: reduce`. CLS strictly 0.

## Banned Items
No purple/indigo gradients, centred hero with two centred buttons, glassmorphism, emojis as icons, uniform 8px radius, gradient blobs, fake avatars, "Get Started" only CTA, or AI 3D renders.
