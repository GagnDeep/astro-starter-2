# Design Direction

**Art Direction**: Editorial/Swiss
*Justification*: This direction conveys trustworthiness and clarity, which is essential for a site dealing with sensitive privacy data and affiliate transparency. The clean, asymmetric layouts provide an authoritative editorial feel, separating this site from generic tech marketing and supporting the credibility of its reviews and methodologies.

## Typography
- **Primary/Display**: Self-hosted serif family (e.g., 'Newsreader' or 'Fraunces') to signal editorial rigor and tradition. Must display at `clamp(2.75rem, 6vw, 5.5rem)` with `line-height 0.95-1.05` and tracking `-0.02 to -0.035em`.
- **Secondary/Body**: Self-hosted clean sans-serif (e.g., 'Work Sans' or 'Fira Sans', avoiding Inter/Roboto/Open Sans/Lato). Body is 17-19px at line-height 1.6, with a measure capped near 65ch.

## Palette (OKLCH)
Inspired by industry materials:
1. **Redaction Ink (Brand Hue)**: A dark, stark hue representing redacted text and security. (OKLCH: ~25% lightness, ~0.02 chroma, ~250 hue)
2. **Manila Folder (Supporting Hue)**: A warm, organic tone offset from the brand hue, representing traditional filing and data dossiers. (OKLCH: ~85% lightness, ~0.08 chroma, ~80 hue)
3. **Newsprint/Security Paper (Neutral Ramp)**: Not pure grey. (OKLCH chroma 0.01-0.03, shifting warmth depending on lightness).

*Accent Rules*: The accent covers at most a tenth of painted pixels. Dark mode surfaces use the brand hue at low lightness (never `#000`), replacing shadows with a 1px top highlight, and increasing accent chroma.
