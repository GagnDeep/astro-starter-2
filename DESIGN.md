# Design System

Art Direction: Technical-brutalist. Functional, stark, verifiable. No gradients, glassmorphism, or rounded blobs.

Palette Materials (Industry):
1. Carbon Fiber / Kevlar (Black/Grey) -> Neutral Ramp
2. Copper (Faraday Cage) -> Brand Hue
3. Silicate / Glass (Screen) -> Supporting Hue

OKLCH Palette:
- Brand (Copper): `oklch(0.65 0.15 45)`
- Supporting (Gold/Bronze wire): `oklch(0.65 0.15 85)` (40 degrees away)
- Neutral Ramp: `oklch(0.98 0.02 260)` to `oklch(0.15 0.02 260)`
- Dark Mode surfaces: Brand hue at very low lightness, e.g., `oklch(0.15 0.02 45)`. Shadows replaced with 1px top highlight.

Typography:
- Two self-hosted woff2 families (e.g., Space Grotesk, IBM Plex Mono).
- Display: clamp(2.75rem, 6vw, 5.5rem), line-height 1.0, tracking -0.03em.
- Body: 18px, line-height 1.6, capped 65ch measure.
