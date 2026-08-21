import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import editableRegions from "@cloudcannon/editable-regions/astro-integration";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import sitemapNoindexFilter from "./src/integrations/sitemap-noindex";
import cssCascadeGuard from "./src/integrations/css-cascade-guard";

// https://astro.build/config
export default defineConfig({
  // The canonical origin of the production site. Everything SEO-related
  // (canonicals, Open Graph URLs, sitemap, robots.txt, RSS) derives from this,
  // so it is the single most important value to change for a new project.
  site: "https://trackandlog.com/",

  // Emit /about/index.html -> URLs always end in a trailing slash. `canonical`
  // in src/lib/seo/meta.ts is built to match, so there is exactly one URL per
  // page and no redirect hop for crawlers.
  trailingSlash: "always",
  build: { format: "directory" },

  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },

  integrations: [
    react(),
    editableRegions(),
    mdx(),
    sitemap({
      // Machine-only routes never belong in a sitemap.
      filter: (page) => !/\/404\/?$/.test(page),
      changefreq: "weekly",
      lastmod: new Date(),
    }),
    // Must come after sitemap(): drops `seo.no_index` pages from the output.
    sitemapNoindexFilter(),
    // Warns (never fails) if unlayered CSS would override Tailwind spacing.
    cssCascadeGuard(),
  ],

  image: {
    // Modern formats by default; Astro falls back automatically.
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  /**
   * Typed, validated environment variables (`astro:env`).
   *
   * Everything OpenObserve needs lives here, so a new project only edits
   * `.env` — never the observability source files. Client fields are inlined
   * into the browser bundle at build time, which is what the RUM client token
   * is designed for (it can only write RUM/log events and is rotatable).
   *
   * See AGENTS.md → "Observability (OpenObserve)" for the full contract.
   */
  env: {
    schema: {
      // --- Per-project: change these for every new site -------------------
      PUBLIC_OO_APPLICATION_ID: envField.string({
        context: "client",
        access: "public",
        default: "astro-starter",
      }),
      PUBLIC_OO_SERVICE: envField.string({
        context: "client",
        access: "public",
        default: "astro-starter",
      }),
      PUBLIC_OO_ENV: envField.string({
        context: "client",
        access: "public",
        default: "development",
      }),
      PUBLIC_OO_VERSION: envField.string({
        context: "client",
        access: "public",
        default: "0.0.1",
      }),

      // --- Org-level: identical across every site in this OpenObserve org --
      PUBLIC_OO_CLIENT_TOKEN: envField.string({
        context: "client",
        access: "public",
        default: "rumGJjCAU1pAyClNuhG",
      }),
      PUBLIC_OO_SITE: envField.string({
        context: "client",
        access: "public",
        default: "data.markremover.com",
      }),
      PUBLIC_OO_ORGANIZATION: envField.string({
        context: "client",
        access: "public",
        default: "default",
      }),
      PUBLIC_OO_API_VERSION: envField.string({
        context: "client",
        access: "public",
        default: "v1",
      }),
      PUBLIC_OO_INSECURE_HTTP: envField.boolean({
        context: "client",
        access: "public",
        default: false,
      }),

      // --- Behaviour toggles ----------------------------------------------
      /** Master switch. Off by default so `astro dev` stays quiet. */
      PUBLIC_OO_ENABLED: envField.boolean({
        context: "client",
        access: "public",
        default: false,
      }),
      PUBLIC_OO_SESSION_SAMPLE_RATE: envField.number({
        context: "client",
        access: "public",
        default: 100,
        min: 0,
        max: 100,
      }),
      PUBLIC_OO_SESSION_REPLAY_SAMPLE_RATE: envField.number({
        context: "client",
        access: "public",
        default: 100,
        min: 0,
        max: 100,
      }),
      /** 'allow' | 'mask-user-input' | 'mask' — read AGENTS.md before changing. */
      PUBLIC_OO_PRIVACY_LEVEL: envField.enum({
        context: "client",
        access: "public",
        values: ["allow", "mask-user-input", "mask"],
        default: "allow",
      }),
      PUBLIC_OO_TRACK_RESOURCES: envField.boolean({
        context: "client",
        access: "public",
        default: true,
      }),
      PUBLIC_OO_TRACK_LONG_TASKS: envField.boolean({
        context: "client",
        access: "public",
        default: true,
      }),
      PUBLIC_OO_TRACK_USER_INTERACTIONS: envField.boolean({
        context: "client",
        access: "public",
        default: true,
      }),
      PUBLIC_OO_FORWARD_ERRORS_TO_LOGS: envField.boolean({
        context: "client",
        access: "public",
        default: true,
      }),
      /** Honour the browser's Do Not Track / Global Privacy Control signal. */
      PUBLIC_OO_RESPECT_DO_NOT_TRACK: envField.boolean({
        context: "client",
        access: "public",
        default: true,
      }),
      /**
       * Comma-separated origins/prefixes that should receive distributed
       * tracing headers, e.g. "https://api.example.com,https://auth.example.com".
       * Empty (the default) disables trace propagation entirely.
       */
      PUBLIC_OO_TRACING_URLS: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
    },
  },
});
