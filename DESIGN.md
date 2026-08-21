# DESIGN.md

## Design Rules

1.  **NO Stock Photos:** All images must be custom illustrations, diagrams, UI screenshots, or heavily stylized thematic imagery. No generic people smiling or meditating.
2.  **NO Emoji Icons:** Use the integrated `@lucide/astro` library for all iconography. No OS-level emojis in UI elements or content.
3.  **NO Gradients:** Solid colors only for backgrounds, buttons, and UI elements to maintain a clean, clinical, and modern aesthetic. Flat design is mandatory.
4.  **CSS Variables:** All colors, spacing, and typography tokens must be defined as CSS variables in `src/styles/main.css` within the Tailwind `@theme` block. No hardcoded hex values in components.

## Color Palette

The palette should evoke calm, science, and clarity.

*   **Primary:** A deep, calming teal.
*   **Secondary:** A soft, clinical blue.
*   **Accent:** A muted coral for warnings or active states (like a timer running).
*   **Background:** Off-white/slate for low eye strain.
*   **Text:** Dark slate (not pure black) for readability.

| Token | Hex | Role | Contrast Ratio (vs #FFFFFF) |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `#0f766e` | Brand, primary buttons, links | 4.8:1 (Passes AA) |
| `--color-primary-hover` | `#0d9488` | Hover states for primary | 3.5:1 (Passes AA for large text) |
| `--color-secondary` | `#0369a1` | Secondary accents, active states | 5.5:1 (Passes AA) |
| `--color-accent` | `#e11d48` | Active timer, warnings, highlights | 4.6:1 (Passes AA) |
| `--color-background` | `#f8fafc` | Main page background | N/A |
| `--color-surface` | `#ffffff` | Cards, tool panels | N/A |
| `--color-text-main` | `#0f172a` | Primary text | 15.3:1 (Passes AAA) |
| `--color-text-muted` | `#475569` | Secondary text, captions | 7.4:1 (Passes AAA) |
| `--color-border` | `#e2e8f0` | Dividers, card borders | N/A |

## Typography

*   **Headings:** Clean, authoritative geometric sans-serif. System font stack prioritising `Inter` or standard system sans.
*   **Body:** Highly readable sans-serif.

## Theme Configuration (Tailwind CSS v4)

To be implemented in `src/styles/main.css`:

```css
@theme {
  --color-primary: #0f766e;
  --color-primary-hover: #0d9488;
  --color-secondary: #0369a1;
  --color-accent: #e11d48;
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text-main: #0f172a;
  --color-text-muted: #475569;
  --color-border: #e2e8f0;
}
```
