import fs from 'fs';
const content = `@import "tailwindcss";

@theme {
  --color-brand-primary: #166534;
  --color-brand-bg: #f8fafc;
  --color-brand-text: #0f172a;
  --color-brand-accent: #d97706;
  --color-brand-surface: #ffffff;
}

@layer base {
  html {
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--color-brand-text);
    background-color: var(--color-brand-bg);
  }

  main {
    min-height: 100vh;
  }

  img {
    object-fit: cover;
  }
}

@layer components {
  .prose h1,
  .prose h2,
  .prose h3,
  .prose h4 {
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-wrap: balance;
    line-height: 1.2;
    max-width: 72ch;
  }
  .prose h1 { font-size: 2rem; color: var(--color-brand-primary); }
  .prose h2 { font-size: 1.75rem; color: var(--color-brand-primary); }
  .prose h3 { font-size: 1.5rem; }
  .prose h4 { font-size: 1.25rem; }

  .prose p,
  .prose a,
  .prose ol li,
  .prose ul li {
    line-height: 1.75;
    max-width: 72ch;
    text-wrap: pretty;
  }
  .prose p,
  .prose ol,
  .prose ul {
    margin-bottom: 1.5rem;
  }
  .prose li p {
    margin-bottom: 0.125rem;
  }
  .prose li {
    margin-bottom: 0.25rem;
    max-width: fit-content;
  }
  .prose blockquote {
    font-style: italic;
    border-left: 5px solid var(--color-brand-primary);
    padding-inline: 1rem;
    margin-inline: 0;
    margin-block: 1rem;
    background-color: var(--color-brand-surface);
  }
  .prose ul li {
    margin-inline: 1rem;
    padding-block: 0.125rem;
    list-style: disc;
  }
  .prose ol li {
    list-style-type: decimal;
    padding-block: 0.125rem;
    margin-inline: 1rem;
  }
  .prose a {
    color: var(--color-brand-primary);
    text-decoration: underline;
    text-underline-offset: 0.1rem;
    cursor: pointer;
    font-weight: 500;
  }
  .prose a:hover {
    color: var(--color-brand-accent);
  }
  .prose sup { vertical-align: super; font-size: smaller; }
  .prose sub { vertical-align: sub; font-size: smaller; }
  .prose table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
    background-color: var(--color-brand-surface);
  }
  .prose table p { margin-bottom: 0; padding-block: 0.5rem; }
  .prose th,
  .prose td {
    border: 1px solid #e2e8f0;
    padding: 0.5rem;
  }
  .prose thead { background-color: #f1f5f9; }
  .prose img {
    max-width: 100%;
    height: auto;
    margin: 1rem auto;
  }
  .prose hr {
    border: 0;
    border-top: 1px solid #cbd5e1;
    margin: 1.5rem 0;
  }
  .prose pre {
    margin-block: 1.5rem;
    padding: 1rem;
  }
  .prose p > code,
  .prose li > code {
    background-color: #f1f5f9;
    color: inherit;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
}

@layer components {
  /* CloudCannon content editor alignment classes */
  .align-left { text-align: left; }
  .align-center { text-align: center; }
  .align-right { text-align: right; }
  .align-justify { text-align: justify; }
}
`;
fs.writeFileSync('src/styles/main.css', content);
