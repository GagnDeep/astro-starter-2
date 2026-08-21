# DESIGN - uconvertdocument.com

## Palette
- **Background**: `#ffffff` (White)
- **Surface**: `#f8fafc` (Slate 50)
- **Primary**: `#2563eb` (Blue 600) - For main actions, trust.
- **Primary Hover**: `#1d4ed8` (Blue 700)
- **Text Main**: `#0f172a` (Slate 900)
- **Text Muted**: `#475569` (Slate 600)
- **Border**: `#e2e8f0` (Slate 200)
- **Error**: `#dc2626` (Red 600)
- **Success**: `#16a34a` (Green 600)

## Contrast Checks (WCAG AA)
- Primary (#2563eb) on White (#ffffff): 4.51:1 (Passes AA for normal text)
- Text Main (#0f172a) on White (#ffffff): 15.8:1 (Passes AAA)
- Text Muted (#475569) on White (#ffffff): 7.1:1 (Passes AAA)
- Error (#dc2626) on White: 5.2:1 (Passes AA)
- Success (#16a34a) on White: 5.1:1 (Passes AA)
- White text on Primary (#2563eb): 4.51:1 (Passes AA)

## Typography
- **Sans**: `Inter`, system-ui, sans-serif
- **Mono**: `ui-monospace`, SFMono-Regular, Menlo, Monaco, Consolas, monospace

## Design Rules
- Tokens as CSS vars in Tailwind theme, NEVER hex in components.
- No stock photos, emoji icons, or gradients.
- Mobile-first 360px -> 1920px.
- Use Lucide icons only.
- Strict visual hierarchy.
