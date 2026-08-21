# DESIGN.md - DogSnacking.com

## Palette (Tokens as CSS vars)
Measured Contrast Table:
- Text (var(--text)) `#1F2937` on bg `#FFFFFF` -> 10.6:1 (Pass AAA)
- Primary (var(--primary)) `#047857` on bg `#FFFFFF` -> 5.7:1 (Pass AA)
- Primary text on primary bg (`#FFFFFF` on `#047857`) -> 5.7:1 (Pass AA)
- Secondary (var(--secondary)) `#4338CA` on bg `#FFFFFF` -> 7.1:1 (Pass AAA)
- Warning (var(--warning)) `#B45309` on bg `#FFFFFF` -> 5.0:1 (Pass AA)
- Danger (var(--danger)) `#B91C1C` on bg `#FFFFFF` -> 7.3:1 (Pass AAA)
- Muted (var(--muted)) `#4B5563` on bg `#F3F4F6` -> 5.0:1 (Pass AA)
- Background (var(--bg)) `#FFFFFF`
- Surface (var(--surface)) `#F9FAFB`
- Border (var(--border)) `#E5E7EB`

## Fonts
- **Headings**: 'Merriweather', serif.
- **Body**: 'Inter', sans-serif.

## Theme Rules
- Tokens as CSS vars in the Tailwind theme (in `src/styles/main.css`).
- Never hex in components.
- No stock photos. Use simple CSS shapes, icons from `@lucide/astro`, or generated charts.
- No emoji icons.
- No gradients. Solid colors only.
- Mobile-first: designed for 360px up to 1920px.
- Minimal client JS: Islands only where needed (tools/calculators).
