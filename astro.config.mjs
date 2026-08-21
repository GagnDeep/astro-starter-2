import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://usignpdf.com",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("404"),
    }),
    mdx(),
  ],
  env: {
    schema: {
      PUBLIC_OO_APPLICATION_ID: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_OO_SERVICE: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_OO_ENV: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_OO_VERSION: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_OO_ENABLED: envField.boolean({ context: "client", access: "public", default: false }),
      PUBLIC_OO_CLIENT_TOKEN: envField.string({ context: "client", access: "public", default: "pub_cloudcannon" }),
      PUBLIC_OO_SITE: envField.string({ context: "client", access: "public", default: "https://api.openobserve.ai" }),
      PUBLIC_OO_ORGANIZATION: envField.string({ context: "client", access: "public", default: "cloudcannon" }),
      PUBLIC_OO_API_VERSION: envField.string({ context: "client", access: "public", default: "v1" }),
      PUBLIC_OO_PRIVACY_LEVEL: envField.enum({ context: "client", access: "public", values: ["allow", "mask-user-input", "mask"], default: "allow" }),
      PUBLIC_OO_RESPECT_DO_NOT_TRACK: envField.boolean({ context: "client", access: "public", default: true }),
      PUBLIC_OO_INSECURE_HTTP: envField.boolean({ context: "client", access: "public", default: false }),
      PUBLIC_OO_TRACK_RESOURCES: envField.boolean({ context: "client", access: "public", default: true }),
      PUBLIC_OO_TRACK_LONG_TASKS: envField.boolean({ context: "client", access: "public", default: true }),
      PUBLIC_OO_TRACK_USER_INTERACTIONS: envField.boolean({ context: "client", access: "public", default: true }),
      PUBLIC_OO_FORWARD_ERRORS_TO_LOGS: envField.boolean({ context: "client", access: "public", default: true }),
      PUBLIC_OO_SESSION_SAMPLE_RATE: envField.number({ context: "client", access: "public", default: 100 }),
      PUBLIC_OO_SESSION_REPLAY_SAMPLE_RATE: envField.number({ context: "client", access: "public", default: 100 }),
      PUBLIC_OO_TRACING_URLS: envField.string({ context: "client", access: "public", default: "" }),
    },
  },
});
