# Design Rules

## Art Direction
- **Chosen Direction:** Technical-brutalist.

## Palette (OKLCH based on Industry Materials)
- **Brand Hue:** Bloomberg Terminal Accent (Amber/Gold for actionable UI).
- **Secondary Hue:** Accounting Ink (Blue/Teal for secondary accents/links).
- **Neutral Ramp:** Ledger Paper (low-chroma neutral for surfaces/borders, never pure gray, chroma 0.01-0.03).
- **Note:** The accent covers at most a tenth of painted pixels.

## Typography
- **Self-hosted Fonts:** Two families (neither Inter, Poppins, Montserrat, Roboto, Open Sans, nor Lato).
  - e.g., JetBrains Mono and IBM Plex Serif.
- **Display:** `clamp(2.75rem, 6vw, 5.5rem)` with line-height 0.95-1.05 and tracking -0.02 to -0.035em.
- **Body:** 17-19px at line-height 1.6.
- **Measure:** Capped near 65ch.

## Dark Mode
- Must be designed, not inverted.
- Surfaces use the brand hue at low lightness (never pure #000).
- Raise accent chroma.
- Replace shadows with a 1px top highlight.

## Motion & Interactivity
- CSS only.
- Respect `prefers-reduced-motion: reduce`.
- One-shot scroll reveal (12-20px plus opacity, 300-500ms).
- Hover transitions ≤200ms.
- At most one ambient element.
- CLS must stay at zero.

## Layout & Banned Elements
- At most half the sections on a page may be centered.
- The hero is asymmetric unless explicitly Swiss.
- Never three identical feature cards (use unequal spans bento, numbered list, or alternating full-width media rows).
- **Banned:** Purple/indigo gradients, 2-button centered heroes, glassmorphism, emoji icons, uniform 8px radius, gradient blobs, fake avatars, AI 3D renders, and "Get Started" as the only CTA.
