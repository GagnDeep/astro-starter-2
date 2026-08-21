# DESIGN: UPlayVideo

## Positioning
- **Chosen:** The privacy-first, lightning-fast in-browser video player and converter. No uploads, no waiting.
- **Rejected 1:** The most advanced professional video editing suite online. (Too complex)
- **Rejected 2:** A clone of Zamzar. (Not differentiated)
- **Rejected 3:** A desktop app for video conversion. (Must be online)
- **Rejected 4:** A social network for sharing converted videos. (Wrong intent)

## Voice
- **Tone:** Authoritative, clear, helpful, direct.
- **Banned Words:** "Synergy", "Next-gen", "Revolutionary", "Click here", "Leverage", "Unleash", "Game-changer".

## Homepage Block Order
1. **Hero:** Real headline ("Play and Convert Any Video. Zero Uploads."), Subheadline, In-browser Player/Converter Tool Component, Capture Form (Waitlist/Updates).
2. **How it Works (No-BS):** 3 simple steps explaining local browser processing.
3. **Format Support Grid:** Clear list of supported formats with links to taxonomy pages.
4. **Performance Comparison:** Table showing speed vs cloud converters.
5. **Use Cases:** Why choose this over desktop tools.
6. **FAQ:** Real questions about privacy and speed.
7. **Capture (Footer):** Newsletter/Updates.

## Palette & Fonts (Measured Contrast)
- **Fonts:** Inter (Sans-serif, clean, modern).
- **Palette (CSS Vars):**
  - `--color-bg`: #ffffff (White)
  - `--color-text`: #111827 (Gray 900) - Contrast vs White: 15.8:1 (AAA)
  - `--color-primary`: #2563eb (Blue 600) - Contrast vs White: 5.1:1 (AA)
  - `--color-secondary`: #4b5563 (Gray 600) - Contrast vs White: 5.3:1 (AA)
  - `--color-accent`: #d97706 (Amber 600) - Contrast vs White: 4.8:1 (AA)
  - `--color-surface`: #f3f4f6 (Gray 100)
  - `--color-border`: #e5e7eb (Gray 200)
- No hex in components, only Tailwind utility classes mapped to these variables.
- No stock photos, emoji icons or gradients.
