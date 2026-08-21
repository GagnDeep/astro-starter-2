# DESIGN: uvideoplayer.com

## Palette & Contrast Table

Tokens mapped as CSS variables:
- `--color-primary`: #4F46E5 (Indigo 600)
- `--color-primary-dark`: #3730A3 (Indigo 800)
- `--color-bg-base`: #FAFAFA (Neutral 50)
- `--color-bg-surface`: #FFFFFF
- `--color-text-main`: #171717 (Neutral 900)
- `--color-text-muted`: #525252 (Neutral 600)
- `--color-border`: #E5E5E5 (Neutral 200)

**Contrast Checks (WCAG AA requires 4.5:1 for normal text):**
- Primary (#4F46E5) on Bg Base (#FAFAFA): 5.12:1 (Pass)
- Text Main (#171717) on Bg Base (#FAFAFA): 15.9:1 (Pass)
- Text Muted (#525252) on Bg Base (#FAFAFA): 6.8:1 (Pass)
- White (#FFFFFF) on Primary (#4F46E5): 5.12:1 (Pass)
- White (#FFFFFF) on Primary Dark (#3730A3): 8.9:1 (Pass)

## Typography
- Font Family: Inter, system-ui, sans-serif
- Headings: Bold, tight tracking
- Body: Regular, relaxed line-height (1.75)

## UI Rules
- No hex codes in classes; use Tailwind mapped variables.
- No stock photos.
- No emojis.
- No glassmorphism.
- No gradients.
- Crisp borders and subtle shadows for depth.
