# Design Standards

## Art Direction
**Technical-brutalist**. The aesthetic must reflect a serious, code-first testing tool. No gradients, glassmorphism, or emoji. Surfaces are stark, and interactive elements are obvious and utilitarian.

## Palette
Materials: Server rack steel (neutral), IDE syntax highlight (accent), terminal phosphor (supporting).
- **Brand Hue:** Cyan/Blue (OKLCH: ~60% L, 0.15 C, 240 H)
- **Supporting Hue:** Purple/Indigo (OKLCH: ~60% L, 0.15 C, 290 H) - 50 degrees away
- **Neutral Ramp:** Slate/Zinc (chroma 0.01-0.03)

## Dark Mode
Dark mode is designed, not inverted. Surfaces are the brand hue at low lightness, never `#000`. Accent chroma is raised. Shadows are replaced with a 1px top highlight.

## Typography
Two self-hosted families:
1. **Geist Mono** (Utility-monospace for code and metadata)
2. **Geist** (Display/Body)
- Display: `clamp(2.75rem, 6vw, 5.5rem)` with line-height `0.95-1.05` and tracking `-0.02` to `-0.035em`.
- Body: `17-19px` at line-height `1.6`. Measure capped near `65ch`.

## Layout & Motion
- At most half the sections on a page may be centred.
- Hero is asymmetric.
- Never use three identical feature cards (use bentos, numbered lists, or alternating rows).
- Motion: CSS only one-shot scroll reveal (12-20px plus opacity, 300-500ms), hover transitions at or under 200ms, and at most one ambient element. Must respect `prefers-reduced-motion: reduce`. CLS zero.

## Banned
- Purple or indigo gradients
- A centred hero with two centred buttons
- Glassmorphism
- Emoji as icons
- A uniform 8px radius everywhere
- Gradient blobs
- Fake avatars
- "Get Started" as the only CTA
- AI-generated 3D renders