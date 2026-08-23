# Design Law

- **Art Direction**: Technical-brutalist. This aligns with the regulatory accuracy and compliance-focused nature of the brand.
- **Materials/Palette**:
  - Material 1: Lithium Cobalt Oxide (Dark Blue-Grey Base). OKLCH Neutral Ramp at Chroma 0.02.
  - Material 2: Copper (Orange Accent). OKLCH Brand Hue ~45deg.
  - Material 3: Graphite (Supporting Hue ~75deg).
  - Dark mode does not just invert colors; uses the brand hue at low lightness (never `#000`), raises accent chroma, and adds a 1px top highlight instead of shadows.
- **Typography**:
  - Self-hosted Font 1: IBM Plex Mono (for tabular data, verifiable dates, numbers, and technical references).
  - Self-hosted Font 2: Space Grotesk (for headers and body text).
  - Strictly avoiding Inter, Poppins, Montserrat, Roboto, Open Sans, Lato.
