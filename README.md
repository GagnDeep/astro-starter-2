# uDocumentViewer

The fastest, lightest, completely unbranded way to embed documents on any website.

This repository contains the static marketing site and technical documentation for uDocumentViewer, built with Astro and Tailwind CSS.

## Overview

uDocumentViewer is an API and web component that allows developers to seamlessly embed PDFs, Word Documents, and Presentations natively into their websites without the heavy payloads of PDF.js or the privacy-invading tracking of standard iframes.

## Features Built

- **Core Pages**: Homepage, Pricing, About, Contact, FAQ, and Legal pages.
- **Reference Library**: 15+ deep technical dives on document viewing architecture (CORS, linearization, iframes).
- **Secondary Taxonomy**: Direct competitor comparisons (Google Drive, Adobe, PDF.js) and feature pages.
- **Tools**: Real-world interactive utilities with no-JS fallbacks:
  - Embed Code Generator
  - Bandwidth Savings Calculator
  - Fast Web View (Linearization) Checker
- **Glossary**: 20 technical terms related to document embedding cross-linked throughout the site.
- **Blog**: 12 comprehensive posts with worked examples, code blocks, and FAQs.

## Architecture

- Static output (`astro build`) with zero client JavaScript by default.
- Forms integrated directly via `capture-form` progressive enhancement components.
- Strict SEO compliance: canonicals, meta tags, and Open Graph rendering natively handled by layout wrappers.
- Styling via Tailwind v4 CSS variables exclusively. No hex codes inside components.

## Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build production static site
- `pnpm check` - Run TypeScript diagnostics

## Telemetry
Analytics are powered by OpenObserve. Configure environment variables in `.env` for production deployment.
