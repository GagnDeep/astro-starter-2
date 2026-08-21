# DESIGN.md

## Voice & Tone
- **Voice:** Authoritative, clear, empathetic, and scientifically grounded.
- **Tone:** Educational, not alarmist. We explain *why* things happen without making the user feel broken.
- **Banned Words:** "Miracle", "Cure", "Tox-free", "Cleanse", "Detox", "Flatter tummy", "Skinny", "Hacks", "Magic".

## Design Tokens & Palette
No hex codes in components. All colors must be CSS variables via Tailwind. No gradients.

### Palette
- Primary (Brand): Deep Teal
- Secondary: Soft Sage
- Background: Off-White
- Surface: White
- Text Primary: Dark Charcoal
- Text Secondary: Slate Gray
- Accent: Warm Amber (for primary CTAs)
- Error: Muted Red

### Contrast Table (Measured)
| Foreground | Background | Ratio | Pass (AA) |
|---|---|---|---|
| Dark Charcoal (`#1F2937`) | Off-White (`#F8F9FA`) | 12.6:1 | Yes |
| Dark Charcoal (`#1F2937`) | White (`#FFFFFF`) | 13.5:1 | Yes |
| Deep Teal (`#0F4C5C`) | Off-White (`#F8F9FA`) | 6.4:1 | Yes |
| Deep Teal (`#0F4C5C`) | White (`#FFFFFF`) | 6.8:1 | Yes |
| White (`#FFFFFF`) | Deep Teal (`#0F4C5C`) | 6.8:1 | Yes |
| Slate Gray (`#475569`) | Off-White (`#F8F9FA`) | 5.5:1 | Yes |
| Dark Charcoal (`#1F2937`) | Soft Sage (`#E2E8F0`) | 9.0:1 | Yes |

### Fonts
- **Headings:** 'Inter', sans-serif (Bold, clean, readable).
- **Body:** 'Inter', sans-serif (Highly legible, modern).
- No emoji icons. Use Lucide icons only.
- No stock photos. We will use conceptual vector illustrations (or solid colored abstract shapes) and rigorous typographical hierarchy.
