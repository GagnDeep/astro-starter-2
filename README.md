# UPlayVideo

The privacy-first, lightning-fast in-browser video player and format converter.

## Technical Overview
Built on Astro and Tailwind CSS.
This site uses **zero server-side transcoding infrastructure**. All video processing (conversions, bitrate adjustments, aspect ratio changes) is designed to run locally in the user's browser utilizing HTML5 `File` API and `WebCodecs` or `WebAssembly`.

## Content Architecture
The site encompasses 60+ heavily interlinked pages designed to capture search intent surrounding video engineering:

*   **Tools & Calculators:**
    *   Video Player / Local Converter (`index.astro`)
    *   Bitrate Calculator
    *   Aspect Ratio Calculator
    *   Storage Needs Calculator
    *   Video File Size Calculator
*   **Reference Library:** Exhaustive technical details on H.264, H.265, AV1, MP4, MKV, etc.
*   **Glossary:** Explanations of complex terminology (Multiplexing, VBR vs CBR, Transcoding).
*   **Blog:** 1,500+ word guides on topics like compression, file size reduction, and codec comparisons.

## Forms & Capture
The repository relies on a serverless capture API (`capture.config.ts`). No backend routing exists for contact forms, waitlists, or newsletters. Submissions post directly via API bindings.

## Local Dev
Use standard pnpm/npm commands for dev and build pipelines.
