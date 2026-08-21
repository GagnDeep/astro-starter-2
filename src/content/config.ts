import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      post_hero: z.object({
        date: z.union([z.string(), z.date()]),
        heading: z.string(),
        tags: z.array(z.string()),
        author: z.string(),
        image: z.string(),
        image_alt: z.string(),
      }),
      thumb_image_path: z.string(),
      thumb_image_alt: z.string(),
      seo: z.object({
        page_description: z.string().nullable(),
        canonical_url: z.string().nullable(),
        featured_image: z.string().nullable(),
        featured_image_alt: z.string().nullable(),
        author_twitter_handle: z.string().nullable(),
        open_graph_type: z.string().nullable(),
        no_index: z.boolean().default(false),
      }).optional(),
    }),
});

const referenceCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/reference" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seo: z.object({
      page_description: z.string().nullable(),
      no_index: z.boolean().default(false),
    }).optional(),
  }),
});

const glossaryCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/glossary" }),
  schema: z.object({
    title: z.string(),
    definition: z.string(),
    seo: z.object({
      page_description: z.string().nullable(),
      no_index: z.boolean().default(false),
    }).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  reference: referenceCollection,
  glossary: glossaryCollection,
};
