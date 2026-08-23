# DESIGN

**Art Direction**: Archival-serif

**Materials & Palette (OKLCH)**:
- **Navy Passport Cover** (Brand Hue): OKLCH(0.25, 0.05, 260) - A deep, authoritative blue representing official documents and stability.
- **Aged Paper/Parchment** (Supporting Hue 1, ~60 degrees away): OKLCH(0.85, 0.04, 75) - A warm, classic hue for secondary elements.
- **Archival Ink** (Supporting Hue 2): OKLCH(0.40, 0.08, 15) - A rich crimson/burgundy accent for contrast, used on at most 10% of painted pixels.
- **Neutral Ramp**: OKLCH(0.1 to 0.98, 0.01 to 0.03, 260) - Cool grey neutrals with a slight tint.

**Typography**:
- **Display**: Lora (Self-hosted, serif). Clamp at least clamp(2.75rem, 6vw, 5.5rem), line-height 0.95-1.05, tracking -0.02 to -0.035em.
- **Body**: Merriweather (Self-hosted, serif). 17-19px, line-height 1.6, measure capped near 65ch.

**Constraints**:
No Inter, Poppins, Montserrat, Roboto, Open Sans or Lato.
No stock photos, no emoji icons, no gradients.
No pure grey, no #000 shadows in dark mode. Dark mode surfaces use brand hue at low lightness, with 1px top highlight instead of shadows.
At most half the sections on a page may be centred.
Hero must be asymmetric unless explicitly Swiss (this is Archival-serif).
No three identical feature cards (use bento, numbered list, or alternating full-width rows).
One-shot scroll reveal (12-20px + opacity, 300-500ms), hover transitions <= 200ms, max one ambient element. CSS only. Prefers-reduced-motion respected.
