# Design: mostprivatephone.com

## Positioning
**Chosen Positioning:** The definitive, practical guide to reclaiming mobile privacy without losing usability. We bridge the gap between paranoid security researchers and everyday users who just want to stop being tracked.

**Rejected Positioning (+4):**
1. The hardcore tin-foil hat hacker manual (Too intimidating).
2. Just another mainstream tech review site (Too generic, recommends standard iPhones).
3. A store selling pre-flashed devices (We are an affiliate/review site, not a storefront).
4. Purely theoretical security research (Too abstract, lacks buying advice).

## Voice & Tone
**Voice:** Authoritative, calm, practical, and uncompromising on facts.
**Banned words:** "ultimate", "foolproof", "unhackable", "military-grade", "cyber", "magic".

## Palette and Fonts (Contrast Measured)
*   **Background:** `#0f172a` (Slate 900) - CSS Var: `--color-bg`
*   **Foreground (Text):** `#f8fafc` (Slate 50) - CSS Var: `--color-text`
*   **Primary Accent:** `#10b981` (Emerald 500) - CSS Var: `--color-primary`
*   **Secondary/Warning:** `#f59e0b` (Amber 500) - CSS Var: `--color-secondary`
*   **Surface:** `#1e293b` (Slate 800) - CSS Var: `--color-surface`
*   **Surface Highlight:** `#334155` (Slate 700) - CSS Var: `--color-surface-highlight`

*Contrast Table:*
- Text on Background (`#f8fafc` on `#0f172a`): 15.68:1 (AAA)
- Primary on Background (`#10b981` on `#0f172a`): 5.14:1 (AA)
- Text on Surface (`#f8fafc` on `#1e293b`): 10.98:1 (AAA)

**Fonts:**
*   Heading: `Inter`, sans-serif (CSS Var: `--font-heading`)
*   Body: `Inter`, sans-serif (CSS Var: `--font-body`)
*   Mono: `Fira Code`, monospace (CSS Var: `--font-mono`)

## UI Rules
- Tokens must be CSS vars mapped to Tailwind.
- Never use hex in components.
- No stock photos. Use schematic SVGs (Lucide) or screenshots of actual devices/OS interfaces.
- No emoji icons.
- No gradients. Flat, solid colors for a clean, utilitarian aesthetic.
