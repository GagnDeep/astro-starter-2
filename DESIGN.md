# Design Specifications

**Art Direction:** Utility-monospace
The humanoid robotics industry is precise, engineering-driven, and highly technical. A utility-monospace direction aligns with a focus on structured component data, hardware specifications, and supply chain accuracy. It strips away fluff, prioritizing data density and clarity over decorative styling.

## Palette & Materials
Inspired by industrial humanoid robotics components:
1. **Titanium/Machined Aluminum:** (Neutral Ramp) OKLCH `L: 0.2 to 0.95`, `C: 0.01-0.03`, `H: 260`. Clean, structural greys that aren't purely sterile.
2. **Warning Tape Yellow/Kapton Polyimide:** (Brand Hue) OKLCH `L: 0.8`, `C: 0.15`, `H: 95`. Used for critical highlights, structural outlines, or important status indicators.
3. **Industrial Orange:** (Supporting Hue) OKLCH `L: 0.6`, `C: 0.12`, `H: 50`. Used for data linkages or secondary technical elements.

## Font Families
- **Display & Monospace:** `JetBrains Mono` or `Fira Code`. Used for tabular data, technical specs, numbers, and rigid structure.
- **Body & Legibility:** `IBM Plex Sans`. Highly readable, structurally sound, and engineering-focused.

## Dark Mode
- Built natively, not inverted.
- Base background sits at low lightness using the brand/neutral hue (e.g., `oklch(0.2 0.02 260)`), never pure `#000`.
- Shadows are replaced with a crisp 1px top highlight to emphasize structural depth.
- Accent chroma is slightly raised for visibility against dark backgrounds.
