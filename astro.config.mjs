import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import editableRegions from "@cloudcannon/editable-regions/astro-integration";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import cssCascadeGuard from "./src/integrations/css-cascade-guard";
import sitemapNoindexFilter from "./src/integrations/sitemap-noindex";

export default defineConfig({
  site: "https://jsonmock.com",
  trailingSlash: "always",
  compressHTML: true,

  integrations: [
    editableRegions(),
    mdx(),
    react(),
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      changefreq: "weekly",
      lastmod: new Date(),
    }),
    sitemapNoindexFilter(),
    cssCascadeGuard(),
  ],

  image: {
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      PUBLIC_OO_APPLICATION_ID: envField.string({
        context: "client",
        access: "public",
        default: "jsonmock",
      }),
      PUBLIC_OO_SERVICE: envField.string({
        context: "client",
        access: "public",
        default: "jsonmock-web",
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
      PUBLIC_OO_RESPECT_DO_NOT_TRACK: envField.boolean({
        context: "client",
        access: "public",
        default: true,
      }),
      PUBLIC_OO_TRACING_URLS: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
    },
  },
});
