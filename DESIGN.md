# Design Direction

## Art Direction
**Technical-brutalist**: A stark, highly technical aesthetic emphasizing function, clarity, and unvarnished truth, suited for a security-focused audience.

## Palette
**Materials from the Industry:**
*   **Titanium/Anodized Aluminum (Neutral Ramp):** The casing of premium security hardware. Neutral ramp built around OKLCH lightness 0.1 to 0.9, chroma 0.015, hue 260.
*   **Terminal Phosphor (Brand Hue):** The classic green of command-line interfaces. OKLCH lightness 0.7, chroma 0.15, hue 140.
*   **Caution Tape/Alert (Supporting Hue):** The yellow of warning indicators. OKLCH lightness 0.8, chroma 0.15, hue 90 (50 degrees away).

**Implementation Rules:**
*   The accent covers at most a tenth of painted pixels.
*   Dark mode is designed: surfaces are the brand hue at low lightness (never #000); raise accent chroma; replace shadows with a 1px top highlight.

## Typography
**Font Families:**
*   **Fira Code (Monospace):** For technical data, tabular information, and navigational elements.
*
*   **Work Sans (Sans-serif):** Clean, legible body text. (Or Atkinson Hyperlegible).
*   **Display:** `clamp(2.75rem, 6vw, 5.5rem)` with line-height `0.95-1.05` and tracking `-0.02` to `-0.035em`.
*   **Body:** `17-19px` at line-height `1.6`; measure capped near `65ch`.

## Layout & Motion
*   At most half the sections on a page may be centred. The hero is asymmetric.
*   No three identical feature cards (use bento with unequal spans, numbered lists, or alternating rows).
*   Motion: one-shot scroll reveal (12-20px plus opacity, 300-500ms), hover transitions at or under 200ms. CSS only. Prefers-reduced-motion: reduce. CLS stays at zero.

## Banned Elements
*   No purple or indigo gradients.
*   No centred hero with two centred buttons.
*   No glassmorphism.
*   No emoji as icons.
*   No uniform 8px radius everywhere.
*   No gradient blobs.
*   No fake avatars.
*   "Get Started" cannot be the only CTA.
*   No AI-generated 3D renders.
