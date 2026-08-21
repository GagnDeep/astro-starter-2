import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string().optional(),
    seo: z.object({
      page_description: z.string().optional(),
      featured_image: z.string().optional(),
      featured_image_alt: z.string().optional(),
      canonical_url: z.string().optional(),
      open_graph_type: z.string().optional(),
      no_index: z.boolean().optional(),
    }).optional(),
  })
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().optional(),
    seo: z.object({
      page_description: z.string().optional(),
      featured_image: z.string().optional(),
      featured_image_alt: z.string().optional(),
      canonical_url: z.string().optional(),
      open_graph_type: z.string().optional(),
      no_index: z.boolean().optional(),
    }).optional(),
  }).passthrough()
});

const metrics = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/metrics" }),
  schema: z.object({
    title: z.string().optional(),
    seo: z.object({
      page_description: z.string().optional(),
      open_graph_type: z.string().optional(),
      no_index: z.boolean().optional(),
    }).optional(),
  }).passthrough()
});

const features = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/features" }),
  schema: z.object({
    title: z.string().optional(),
    seo: z.object({
      page_description: z.string().optional(),
      open_graph_type: z.string().optional(),
      no_index: z.boolean().optional(),
    }).optional(),
  }).passthrough()
});

const glossary = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/glossary" }),
  schema: z.object({
    title: z.string().optional(),
    seo: z.object({
      page_description: z.string().optional(),
      open_graph_type: z.string().optional(),
      no_index: z.boolean().optional(),
    }).optional(),
  }).passthrough()
});

export const collections = { pages, blog, metrics, features, glossary };
