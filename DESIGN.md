# DESIGN.md

## 1. Palette & Fonts

**Fonts:**
*   **Sans-serif (Headings):** Inter (clean, authoritative, readable).
*   **Serif (Body):** Merriweather (adds a journalistic, editorial feel, great for long-form reading).
*   **Monospace (Data/Code):** JetBrains Mono.

**Palette:**
We need a professional, financial journal look. No bright neon colors, no gradients.
*   **Primary (Brand):** Navy Blue (trust, finance, corporate).
*   **Secondary:** Slate Gray (neutral, professional).
*   **Accent:** Deep Teal or Gold (for subtle highlights, buttons).
*   **Background:** Off-white/Paper (for readability) and crisp white for cards.
*   **Text:** Charcoal (near black, better contrast than pure black).

**Contrast Table:**
*   Navy (`#0f172a`) on White (`#ffffff`): 12.3:1 (Pass AAA)
*   Charcoal (`#1e293b`) on White (`#ffffff`): 9.3:1 (Pass AAA)
*   White (`#ffffff`) on Navy (`#0f172a`): 12.3:1 (Pass AAA)

**Tailwind CSS Vars Mapping (in src/styles/main.css):**
```css
@theme {
  --color-brand-50: #f0fdfa;
  --color-brand-100: #ccfbf1;
  --color-brand-500: #14b8a6;
  --color-brand-700: #0f766e;
  --color-brand-900: #042f2e;

  --color-navy-900: #0f172a;
  --color-navy-800: #1e293b;

  --color-paper: #f8fafc;
  --color-charcoal: #334155;

  --font-sans: 'Inter', sans-serif;
  --font-serif: 'Merriweather', serif;
}
```

## 2. UI/UX Rules
*   No stock photos of smiling executives. Use licensed images (or none) of Cayman landscapes, Georgetown, or abstract data/finance concepts.
*   No emoji icons. Use Lucide icons.
*   No glassmorphism or gradients. Solid colors, sharp or slightly rounded corners (e.g., `rounded-md`), subtle borders.
*   Mobile-first: Tap targets >= 44px.
