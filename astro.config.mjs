import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import customSitemap from "./scripts/sitemap-plugin.ts";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://doctorameena.com",
  integrations: [react(), mdx(), customSitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
