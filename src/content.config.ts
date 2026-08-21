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
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    post_hero: z.object({
      date: z.string().or(z.date()),
      heading: z.string(),
      tags: z.array(z.string()).optional(),
      author: z.string().optional(),
      image: image().optional(),
      image_alt: z.string().optional(),
    }).optional(),
    thumb_image_path: image().optional(),
    thumb_image_alt: z.string().optional(),
    seo: seoSchema,
  }),
});

const pageSchema = z.object({
  title: z.string(),
  hero_block: z.any().optional(),
  content_blocks: z.array(z.any()).optional(),
  seo: seoSchema,
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,astro}', base: "./src/content/pages" }),
  schema: z.union([
    z.object({
      title: z.string(),
      page_size: z.number().positive(),
      seo: seoSchema,
    }),
    pageSchema
  ]),
});

const referenceCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/reference" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    seo: seoSchema,
  }),
});

const glossaryCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/glossary" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    related: z.array(z.string()).optional(),
    seo: seoSchema,
  }),
});

const toolsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/tools" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    script_path: z.string().optional(),
    seo: seoSchema,
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  reference: referenceCollection,
  glossary: glossaryCollection,
  tools: toolsCollection,
};
