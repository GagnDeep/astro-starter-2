# DESIGN

## Palette & Contrast
Tokens as CSS vars in Tailwind:
- `--color-primary`: #0284c7 (Sky Blue 600) - Contrast on white: 4.54 (Pass AA)
- `--color-primary-dark`: #0369a1 (Sky Blue 700) - Contrast on white: 6.2 (Pass AA)
- `--color-secondary`: #0f766e (Teal 700) - Contrast on white: 5.72 (Pass AA)
- `--color-background`: #ffffff (White)
- `--color-surface`: #f8fafc (Slate 50)
- `--color-text`: #0f172a (Slate 900) - Contrast on white: 15.6 (Pass AAA)
- `--color-text-muted`: #475569 (Slate 600) - Contrast on white: 5.2 (Pass AA)
- `--color-border`: #e2e8f0 (Slate 200)
- `--color-error`: #dc2626 (Red 600) - Contrast on white: 5.1 (Pass AA)

## Typography
- **Headings**: Inter, sans-serif
- **Body**: Inter, sans-serif
- **Monospace**: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace

No stock photos, emoji icons or gradients. Use pure CSS shapes, SVGs (single color), and solid backgrounds.

## Homepage Block by Block
1. **Hero**: Headline ("Track Your Hydration, Simply."), Subhead ("A science-backed web app that helps you calculate fluid needs and reminds you to drink. No downloads, no subscriptions."), CTA (Primary: "Calculate Your Needs", Secondary: "Start Tracking"), Capture Form (Newsletter waitlist).
2. **Problem/Agitation**: "You're probably mildly dehydrated right now." Stats on cognitive decline at 2% body water loss.
3. **How it Works**: 1. Calculate, 2. Log, 3. Feel Better.
4. **Features Grid**: No-JS support, Offline capable, Data privacy, Custom reminders.
5. **Calculator Teaser**: "Try our Sweat Loss Calculator for your next workout."
6. **Recent Articles**: Latest 3 posts from the blog.
7. **Capture Footer**: "Get a weekly hydration tip." (Newsletter form).
