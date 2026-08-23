# DESIGN

**Art Direction**: Archival-serif

**Palette Constraints (OKLCH)**:
- **Materials**: Aged Legal Paper (neutral ramp), Fountain Pen Ink (brand hue), Mahogany Desk (supporting hue).
- **Brand Hue**: oklch(0.35 0.1 250) - A deep, authoritative ink blue.
- **Supporting Hue**: oklch(0.4 0.1 20) - A rich mahogany tone, ~130 degrees away from the brand hue, representing traditional legal desks.
- **Neutral Ramp**: oklch(L 0.02 90) - Warm, aged paper tones (never pure grey), with lightness varying by shade.
- **Accent**: Used sparingly, covering at most 10% of painted pixels.

**Typography**:
- Two self-hosted families (Not Inter, Poppins, Montserrat, Roboto, Open Sans, or Lato).
  - **Display**: A traditional serif (e.g., Lora or Playfair Display). Clamp(2.75rem, 6vw, 5.5rem), line-height 0.95-1.05, tracking -0.02 to -0.035em.
  - **Body**: A clean sans or serif (e.g., Source Sans Pro or PT Serif). 17-19px, line-height 1.6, measure capped near 65ch.

**Layout & Motion**:
- At most half the sections on a page may be centred.
- Hero is asymmetric.
- Never three identical feature cards (use bentos with unequal spans, numbered lists, or alternating rows).
- Motion: CSS only, one-shot scroll reveal (12-20px plus opacity, 300-500ms), hover transitions <= 200ms, one ambient element max. Respects `prefers-reduced-motion`. CLS strictly zero.

**Banned Elements**:
- Purple or indigo gradients.
- Centred hero with two centred buttons.
- Glassmorphism.
- Emoji as icons.
- Uniform 8px radius everywhere.
- Gradient blobs.
- Fake avatars.
- "Get Started" as the only CTA.
- AI-generated 3D renders.
- Dark mode inversion (must be custom designed with brand hue low lightness, 1px top highlight instead of shadows).
