# Design Standards

## Art Direction
**Editorial/Swiss**

## Palette
**Industry Materials & Hues:**
- Brand Hue (OCI Blue/Navy): OKLCH derived from passport/OCI booklets. (oklch 35% 0.1 250 - dark navy #082f49).
- Supporting Hue (Warning/Accent Orange): OKLCH derived from Indian flag saffron/stamps, placed ~30-60 degrees away or complementary. (oklch 60% 0.18 45 - burnt orange #ea580c).
- Neutral Ramp: OKLCH at chroma 0.01-0.03 (never pure grey), inspired by official documentation paper stock.

## Typography
- **Headings & Display:** Self-hosted font family (e.g., Geist, Clash Display, or equivalent non-banned font).
- **Body:** Self-hosted font family, body 17-19px at line-height 1.6, measure capped near 65ch.
- Display sizes: at least clamp(2.75rem, 6vw, 5.5rem) with line-height 0.95-1.05 and tracking -0.02 to -0.035em.
- *Banned Fonts:* Inter, Poppins, Montserrat, Roboto, Open Sans, Lato.

## Dark Mode
- Designed, not inverted.
- Surfaces use the brand hue at low lightness (never pure #000).
- Raise accent chroma.
- Replace shadows with a 1px top highlight.

## Layout & Motion
- At most half the sections on a page may be centred.
- Hero is asymmetric unless direction is explicitly Swiss (ours is Editorial/Swiss).
- Never three identical feature cards — use a bento with unequal spans, numbered lists, or alternating media rows.
- Motion: one-shot scroll reveal (12-20px plus opacity, 300-500ms), hover transitions <= 200ms, max one ambient element.
- CSS only. Strictly respect `prefers-reduced-motion: reduce`.
- CLS stays at zero.

## Banned Elements
- Purple or indigo gradients.
- Centred hero with two centred buttons.
- Glassmorphism.
- Emoji as icons.
- Uniform 8px radius everywhere.
- Gradient blobs.
- Fake avatars.
- "Get Started" as the only CTA.
- AI-generated 3D renders.
