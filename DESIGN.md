# Design Specifications

## Art Direction
**Editorial/Swiss**
The site uses a clean, grid-based aesthetic that prioritizes readability and typography.
Asymmetric hero sections and uncentered layouts are preferred unless specifically centered for structural balance.

## Industry Materials and Palette (OKLCH)
Inspired by materials common in the underwriting and business documentation space:
1. **Bond Paper** (Off-white / Warm Gray): Used for the neutral ramp.
2. **Navy Ink** (Deep Blue): Represents traditional signatures and seals. Used as the brand hue.
3. **Security Pattern Tint** (Teal/Cyan): Represents document security features. Used as the supporting accent hue.

**OKLCH Palette:**
- **Brand Hue:** `oklch(25% 0.05 255)` (Deep Navy Blue ink)
- **Supporting Hue:** `oklch(65% 0.15 210)` (Security Tint Teal - 45 degrees away from brand hue)
- **Neutral Ramp:** `oklch(x 0.01 255)` (Low chroma navy/gray)

Dark mode features brand hue surfaces at low lightness (never #000).

## Typography
The site uses two self-hosted font families:
- **Display:** Lora (Serif)
- **Body:** Work Sans (Sans-serif)
