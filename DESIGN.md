# Design Law

## Art Direction
**Technical-brutalist**
The design choices must reflect the industrial, precise, and practical nature of the aerospace and MRO supply chain. The layout should be straightforward, highly structured, data-dense, and utilitarian without being overly styled.

## Materials & Palette (OKLCH)
The palette is derived from three prominent industry materials:
1. **Titanium (Brand Hue):** A robust, high-strength aesthetic.
   - `oklch(25% 0.05 240)` - Deep, structural navy for key surfaces.
2. **Anodized Aluminum (Supporting Hue):** A precise, conductive metallic feel (approx. 40 degrees away).
   - `oklch(60% 0.1 200)` - Teal/Cyan for interactive elements and accents (used on max 10% of painted pixels).
3. **Carbon Fiber (Neutral Ramp):** A lightweight, engineered dark neutral.
   - Chroma capped at `0.01-0.03`. No pure grays.

## Typography
The design relies on two self-hosted, technical font families:
- **Display:** Space Grotesk (for structured, geometric headings)
- **Body / Data:** JetBrains Mono (for specifications, reference data, and directory listings)

## Design Rules
- Center alignment is strictly limited (at most half the sections on a page).
- Hero sections must be asymmetric.
- Never use three identical feature cards (use bento grids, numbered lists, or alternating rows).
- Only CSS-based motion: simple scroll reveals and quick hover transitions (<= 200ms).
- Strictly BANNED: purple/indigo gradients, glassmorphism, emoji icons, uniform 8px radii, gradient blobs, fake avatars, AI-generated 3D renders.
