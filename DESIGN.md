# DESIGN.md for udocumentviewer.com

## Positioning
**Core:** The fastest, lightest, completely unbranded way to embed documents on any website.
**Target Audience:** Web developers, agency owners, and content managers who are frustrated by bloated, branded, or clunky document viewers.
**Rejected Positioning:**
1. A full document management system (too complex).
2. A collaborative editing tool (not our focus).
3. A flipbook generator (tacky, niche).
4. An enterprise DRM solution (too sales-heavy, complex setup).

## Voice & Tone
**Voice:** Direct, technical but accessible, pragmatic, anti-bloat.
**Banned Words:** "Synergy," "Revolutionary," "Next-gen," "Game-changer," "Robust" (unless specifically referring to error handling), "Seamless" (describe *how* it integrates instead).

## Route Tree

### Core Pages
- `/` (Home) - best document viewer for websites
- `/pricing` - document embed api pricing
- `/about` - about udocumentviewer
- `/contact` - contact udocumentviewer
- `/faq` - document viewer faq
- `/legal/privacy`
- `/legal/terms`

### Comparison (Taxonomy 1: vs Competitors)
- `/compare/google-drive` - google drive embed alternative
- `/compare/pdfjs` - pdf.js alternative
- `/compare/adobe-embed` - adobe embed api alternative
- `/compare/issuu` - cheap alternative to issuu
- `/compare/scribd` - scribd alternative for websites

### Features/Formats (Taxonomy 2: Formats)
- `/formats/pdf` - lightweight pdf viewer embed
- `/formats/docx` - open docx file in browser
- `/formats/pptx` - display pptx on website
- `/formats/xlsx` - display excel online without office365
- `/features/white-label` - embed pdf without branding
- `/features/responsive` - responsive document viewer css
- `/features/secure` - prevent pdf download html
- `/features/accessible` - accessibility embedded documents
- `/features/analytics` - track document views html
- `/features/no-iframe` - embed pdf without iframe

### Reference Library (15+ pages)
- `/reference/html-embed-tags` - html tags for embedding documents
- `/reference/iframe-attributes` - standard iframe attributes for viewers
- `/reference/cors-headers` - fixing cors issues with documents
- `/reference/content-disposition` - content-disposition header explained
- `/reference/pdf-linearization` - fast web view pdfs
- `/reference/mime-types` - complete list of document mime types
- `/reference/mobile-viewport` - viewport meta tag for document viewers
- `/reference/aria-labels` - aria labels for embedded content
- `/reference/csp-directives` - content security policy for iframes
- `/reference/lazy-loading` - lazy loading iframes
- `/reference/pdf-metadata` - stripping metadata from pdfs
- `/reference/base64-encoding` - base64 encoding documents for web
- `/reference/object-vs-embed` - object vs embed vs iframe
- `/reference/svg-conversion` - converting documents to svg
- `/reference/canvas-rendering` - html5 canvas document rendering
- `/reference/print-css` - css media queries for printing documents

### Glossary (20+ terms)
- `/glossary/pdf`
- `/glossary/docx`
- `/glossary/iframe`
- `/glossary/cors`
- `/glossary/linearization`
- `/glossary/mime-type`
- `/glossary/responsive-design`
- `/glossary/accessibility`
- `/glossary/wcag`
- `/glossary/drm`
- `/glossary/white-label`
- `/glossary/blob-url`
- `/glossary/content-delivery-network`
- `/glossary/lazy-loading`
- `/glossary/x-frame-options`
- `/glossary/content-security-policy`
- `/glossary/render-blocking`
- `/glossary/dom`
- `/glossary/webassembly`
- `/glossary/api`
- `/glossary/webhook`
- `/glossary/jwt`

### Tools (Calculators/Generators)
- `/tools/embed-generator` - document viewer embed code generator
- `/tools/iframe-responsive` - generate responsive iframe
- `/tools/bandwidth-calculator` - document hosting bandwidth calculator
- `/tools/pdf-linearization-checker` - check if pdf is fast web view optimized

### Blog (12 Posts)
- `/blog/how-to-embed-pdf-in-html` - how to embed pdf in html
- `/blog/stop-pdf-downloads` - prevent pdf download html
- `/blog/mobile-friendly-pdfs` - pdf iframe mobile friendly
- `/blog/adobe-vs-pdfjs` - adobe embed api vs pdf.js
- `/blog/accessible-document-viewers` - accessibility embedded documents
- `/blog/fastest-way-to-load-pdfs` - fast pdf viewer web
- `/blog/secure-document-sharing` - secure document sharing web
- `/blog/wordpress-pdf-plugins` - best way to show pdfs on wordpress
- `/blog/multiple-documents-one-page` - embed multiple documents on one page
- `/blog/tracking-document-reads` - track how many pages read
- `/blog/html5-document-viewers` - html5 document viewer open source
- `/blog/why-iframes-suck` - why iframes are bad for mobile

## Homepage Block Order (Unique)
1. **Hero:** Instant Demo (Upload a file or paste a URL to see it instantly, no sign-up)
2. **The Problem:** The "Loading..." spinner of death on mobile (visualized)
3. **The Solution:** Side-by-side comparison of our 12kb payload vs PDF.js (2MB+)
4. **Code Snippet:** 2 lines of HTML, exactly how to implement
5. **Feature Grid (Anti-features):** What we *don't* do (No tracking, no branding, no bloat)
6. **Use Cases by Format:** Tabs for PDF, DOCX, PPTX showing perfect rendering
7. **Social Proof / Capture Form:** "Join 10,000+ developers making the web faster"
8. **Footer**

## Palette and Fonts Contrast Table

**Fonts:**
- Headings: Inter (sans-serif)
- Body: system-ui (sans-serif)
- Monospace: JetBrains Mono

**Palette Tokens (CSS Variables):**
- `--color-bg`: #FAFAFA (Light gray/white)
- `--color-text`: #111827 (Dark gray)
- `--color-primary`: #2563EB (Blue)
- `--color-primary-hover`: #1D4ED8 (Darker Blue)
- `--color-surface`: #FFFFFF (White)
- `--color-border`: #E5E7EB (Light gray)
- `--color-error`: #DC2626 (Red)

**Contrast Checks (WCAG AA requires 4.5:1 for normal text):**
- `--color-text` on `--color-bg`: #111827 on #FAFAFA -> ~16.5:1 (Pass)
- `--color-text` on `--color-surface`: #111827 on #FFFFFF -> 17.5:1 (Pass)
- `--color-primary` on `--color-bg`: #2563EB on #FAFAFA -> 4.9:1 (Pass)
- `--color-primary` on `--color-surface`: #2563EB on #FFFFFF -> 5.1:1 (Pass)
- `--color-surface` on `--color-primary`: #FFFFFF on #2563EB -> 5.1:1 (Pass)

*Note: No hex in components, only `var(--color-...)` or tailwind classes mapped to these variables.*
