# Design & Art Direction

**Art Direction:** Technical-brutalist
- *Justification:* As a data-driven, back-testing site targeting retail investors, a technical-brutalist aesthetic communicates transparency, raw data, and rigorous methodology without the marketing fluff typical of financial tools.

**Palette (OKLCH):**
- Inspired by three industry materials: Ledger Paper, Bloomberg Terminal, and Accounting Ink.
- **Brand Hue (Ledger Paper Neutral):** `oklch(0.98 0.02 95)` — Used for main backgrounds, giving a slightly warm, structured feel.
- **Supporting Hue (Bloomberg Terminal Accent):** `oklch(0.75 0.15 65)` — Used for accents, charts, and highlights (approximately 60 degrees away, providing high visibility for data).
- **Neutral Ramp (Accounting Ink):** `oklch(0.65 0.12 215)` at chroma 0.01-0.03 for text and borders, avoiding pure grey and adding depth.

**Typography (Self-hosted):**
- **Display Font:** Space Grotesk
  - Characteristics: Technical, structured, readable at large sizes.
  - Sizing: `clamp(2.75rem, 6vw, 5.5rem)`, line-height `0.95-1.05`, tracking `-0.02` to `-0.035em`.
- **Body Font:** IBM Plex Mono
  - Characteristics: Monospaced, data-oriented, highly legible for numbers and methodology.
  - Sizing: 17-19px, line-height 1.6, measure capped near 65ch.
