# Design Standards

- **Art Direction**: Technical-brutalist. This fits the regulatory, high-precision nature of battery passports.
- **Palette**:
  - Materials: Lithium (Brand hue - silver/white metallic), Copper (Supporting hue - reddish-brown), Graphite (Neutral ramp - dark grey).
  - Built in OKLCH:
    - Brand hue: Lithium Silver
    - Supporting hue: Copper (30-60 degrees away)
    - Neutral ramp: Graphite (chroma 0.01-0.03, never pure grey)
  - Accent covers at most a tenth of painted pixels.
  - Dark mode surfaces use the brand hue at low lightness (never #000), raise accent chroma, and replace shadows with a 1px top highlight.
- **Typography**:
  - Two self-hosted families (Not Inter, Poppins, Montserrat, Roboto, Open Sans, or Lato).
  - Display: `clamp(2.75rem, 6vw, 5.5rem)` with `line-height` 0.95-1.05 and `tracking` -0.02 to -0.035em.
  - Body: 17-19px at `line-height` 1.6; measure capped near 65ch.
