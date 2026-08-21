import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const seoSchema = z
  .object({
    page_description: z.string().nullable().optional(),
    canonical_url: z.string().nullable().optional(),
    featured_image: z.string().nullable().optional(),
    featured_image_alt: z.string().nullable().optional(),
    author_twitter_handle: z.string().nullable().optional(),
    open_graph_type: z.string().nullable().optional(),
    no_index: z.boolean().default(false),
  })
  .optional();

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    post_hero: z.object({
      date: z.string().or(z.date()),
      heading: z.string().optional(),
      tags: z.array(z.string()).optional().default([]),
      author: z.string().optional(),
      image: z.string().optional(),
      image_alt: z.string().optional(),
    }).optional(),
    seo: seoSchema,
  }),
});

const referenceCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/reference" }),
  schema: z.object({
    title: z.string(),
    seo: seoSchema,
  }),
});

const pageSchema = z.object({
  title: z.string(),
  seo: seoSchema,
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,astro}', base: "./src/content/pages" }),
  schema: pageSchema,
});

export const collections = {
  blog: blogCollection,
  reference: referenceCollection,
  pages: pagesCollection,
};
