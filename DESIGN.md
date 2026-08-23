# Design Law

**Art Direction**: Warm-organic.

**Palette**:
- Based on three industry materials:
  1. Baked biscuit (Golden brown)
  2. Peanut butter (Warm amber)
  3. Oatmeal (Soft beige)
- OKLCH Hues:
  - Brand hue: `oklch(0.75 0.15 65)` (Golden brown/amber)
  - Supporting hue: `oklch(0.70 0.12 35)` (Warm reddish-brown, 30 degrees away)
  - Neutral ramp: `oklch(0.98 0.01 65)` to `oklch(0.15 0.02 65)` (Warm beige/brown greys, chroma 0.01-0.03, never pure grey)

**Typography**:
- Font Families (Self-hosted):
  - Heading: *Lora* (or similar serif fitting warm-organic)
  - Body: *Work Sans* (or similar clean sans-serif fitting warm-organic)
- Neither Inter, Poppins, Montserrat, Roboto, Open Sans, nor Lato.

**Motion**:
- One-shot scroll reveal (12-20px plus opacity, 300-500ms).
- Hover transitions at or under 200ms.
- At most one ambient element.
- CSS only. Everything inside prefers-reduced-motion: reduce.
- CLS stays at zero.
