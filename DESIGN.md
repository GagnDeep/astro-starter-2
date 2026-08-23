# DESIGN

## Art Direction
**Technical-brutalist**

Our aesthetic should reflect quantitative research and systematic analysis. The design is asymmetric, modular, and unornamented. We rely on distinct bento layouts and structured data presentation.

## Palette
Derived from real-world financial/technical materials:
- **Ledger Paper (Neutral Ramp):** A low-chroma OKLCH ramp (chroma 0.01-0.03).
  - Background: `oklch(0.98 0.01 255)`
  - Surface: `oklch(0.95 0.02 255)`
  - Ink: `oklch(0.2 0.02 255)`
- **Bloomberg Terminal Accent (Brand Hue):** Amber/Gold.
  - Accent: `oklch(0.7 0.15 70)` (Used for interactive elements, highlights)
- **Accounting Ink (Supporting Hue):** Blue/Teal (30-60 degrees away).
  - Support: `oklch(0.65 0.1 220)`

*Dark mode is designed, not inverted. Backgrounds are low-lightness brand hues, not pure black (#000).*

## Fonts
1. **Display:** A sturdy, technical serif or geometric sans (e.g., Space Grotesk, IBM Plex Sans, or similar self-hosted). Display sizes at `clamp(2.75rem, 6vw, 5.5rem)`, leading `0.95-1.05`, tracking `-0.02 to -0.035em`.
2. **Body:** A highly readable technical body font (e.g., Lora, Merriweather, or a mono-inspired sans). Body sizes at `17-19px`, leading `1.6`, measure capped at `65ch`.

*(Neither Inter, Poppins, Montserrat, Roboto, Open Sans nor Lato allowed.)*
