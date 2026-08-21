import { defineConfig, envField } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import sitemapNoIndex from './src/integrations/sitemap-noindex';
import cssCascadeGuard from './src/integrations/css-cascade-guard';

export default defineConfig({
  site: 'https://instituteofcooking.com',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: sitemapNoIndex(),
    }),
    cssCascadeGuard(),
    react(),
  ],
  vite: {
    plugins: [tailwind()],
  },
  env: {
    schema: {
      PUBLIC_OO_ENABLED: envField.boolean({ context: "client", access: "public", default: false }),
      PUBLIC_OO_RESPECT_DO_NOT_TRACK: envField.boolean({ context: "client", access: "public", default: true }),
      PUBLIC_OO_CLIENT_TOKEN: envField.string({ context: "client", access: "public", default: "" }),
      PUBLIC_OO_APPLICATION_ID: envField.string({ context: "client", access: "public", default: "" }),
      PUBLIC_OO_SITE: envField.string({ context: "client", access: "public", default: "api.openobserve.ai" }),
      PUBLIC_OO_ORGANIZATION: envField.string({ context: "client", access: "public", default: "default" }),
      PUBLIC_OO_SERVICE: envField.string({ context: "client", access: "public", default: "web" }),
      PUBLIC_OO_ENV: envField.string({ context: "client", access: "public", default: "production" }),
      PUBLIC_OO_VERSION: envField.string({ context: "client", access: "public", default: "1.0.0" }),
      PUBLIC_OO_API_VERSION: envField.string({ context: "client", access: "public", default: "v1" }),
      PUBLIC_OO_INSECURE_HTTP: envField.boolean({ context: "client", access: "public", default: false }),
      PUBLIC_OO_TRACK_RESOURCES: envField.boolean({ context: "client", access: "public", default: true }),
      PUBLIC_OO_TRACK_LONG_TASKS: envField.boolean({ context: "client", access: "public", default: true }),
      PUBLIC_OO_TRACK_USER_INTERACTIONS: envField.boolean({ context: "client", access: "public", default: true }),
      PUBLIC_OO_FORWARD_ERRORS_TO_LOGS: envField.boolean({ context: "client", access: "public", default: true }),
      PUBLIC_OO_PRIVACY_LEVEL: envField.string({ context: "client", access: "public", default: "allow" }),
      PUBLIC_OO_SESSION_SAMPLE_RATE: envField.number({ context: "client", access: "public", default: 100 }),
      PUBLIC_OO_SESSION_REPLAY_SAMPLE_RATE: envField.number({ context: "client", access: "public", default: 100 }),
      PUBLIC_OO_TRACING_URLS: envField.string({ context: "client", access: "public", default: "" }),
    }
  }
});
