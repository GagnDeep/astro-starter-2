# Design

## Palette
- **Primary:** High-energy neon green (`#00E676`) for CTAs and accents.
- **Background:** Deep space black (`#0B0F19`) for a premium, tech-focused feel.
- **Surface:** Dark grey (`#1A202C`) for cards and elevated elements.
- **Text:** Off-white (`#F7FAFC`) for body text, pure white (`#FFFFFF`) for headings.
- **Error:** Bright crimson (`#FF3B30`).

*Contrast Table:*
| Foreground | Background | Contrast Ratio | WCAG AA |
| --- | --- | --- | --- |
| Text (Off-white) | Background (Black) | 13.9:1 | Pass |
| Primary (Neon Green)| Background (Black) | 12.1:1 | Pass |
| Text (Off-white) | Surface (Dark Grey) | 10.3:1 | Pass |

## Typography
- **Headings:** Inter (Sans-serif, bold, geometric).
- **Body:** Inter (Sans-serif, highly legible).
- **Monospace:** JetBrains Mono for code blocks and data displays.

## Token Rules
Tokens map directly to Tailwind CSS variables. Never use hex codes in the codebase.
- `--color-primary`
- `--color-bg`
- `--color-surface`
- `--color-text`
- `--color-text-muted`
- `--color-border`

## Imagery
- No stock photos of people pointing at laptops.
- Use high-quality, abstract tech graphics, app UI mockups, and fitness concepts.
- Licensed images stored in `src/assets/images`.
- Strictly no glassmorphism or overly complex gradients.
