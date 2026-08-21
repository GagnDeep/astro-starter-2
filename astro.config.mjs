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
  site: "https://dogsnacking.com/",

  trailingSlash: "always",
  build: { format: "directory" },

  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },

  integrations: [
    react(),
    editableRegions(),
    mdx(),
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
      PUBLIC_CAPTURE_KEY: envField.string({
        context: "client",
        access: "public",
        default: "wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE",
      }),
      PUBLIC_OO_APPLICATION_ID: envField.string({
        context: "client",
        access: "public",
        default: "dogsnacking",
      }),
      PUBLIC_OO_SERVICE: envField.string({
        context: "client",
        access: "public",
        default: "dogsnacking-web",
      }),
      PUBLIC_OO_ENV: envField.string({
        context: "client",
        access: "public",
        default: "production",
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
