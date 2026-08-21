# Battery Digital Passport Hub

A compliance content hub and lead-gen directory for EU Battery Digital Passport services.

## Scope
- Comprehensive routing tree aligned to search intent (Informational, Investigational, Transactional).
- Detailed technical content (`src/content/library`, `src/content/glossary`, `src/content/blog`). Core pages feature extended depth regarding JRC carbon footprint methodology, specific dates, target threshold percentages, exceptions, and implementation challenges for the 2025/2026/2027 timelines.
- Interactive, progressively-enhanced, javascript-light compliance tools mapping JRC methodology (`src/components/tools/`).
- Seamless API integration with `capture.config.ts` without hardcoding forms or API endpoints locally.
- Strict SEO and Accessibility integration.

## Build Requirements
- Tailwind CSS v4 driven entirely through `src/styles/main.css`.
- OpenObserve RUM/Telemetry ready.
- CloudCannon CMS structure aligned.

## How to edit forms
Update `capture.config.ts` globally or map new tool form submissions as hidden values to pre-existing forms via `<CaptureForm>` wrappers.
