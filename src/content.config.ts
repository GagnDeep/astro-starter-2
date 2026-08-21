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
    no_index: z.boolean().optional().default(false),
  })
  .optional();

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    author: z.string().default("FreeTaxPDF Team"),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    seo: seoSchema,
  }),
});

const pageSchema = z.object({
  title: z.string(),
  hero_block: z.any().optional(),
  content_blocks: z.array(z.any()).optional(),
  seo: seoSchema,
});

const paginatedCollectionSchema = z.object({
  title: z.string(),
  page_size: z.number().positive(),
  seo: seoSchema,
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,astro}', base: "./src/content/pages" }),
  schema: z.union([paginatedCollectionSchema, pageSchema]),
});

const formsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/forms" }),
  schema: z.object({
    title: z.string(),
    form_number: z.string(),
    description: z.string(),
    year: z.number(),
    download_url: z.string(),
    category: z.string(),
    software_alternative: z.boolean().default(true),
    seo: seoSchema,
  }),
});

const categoriesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/categories" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seo: seoSchema,
  }),
});

const glossaryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/glossary" }),
  schema: z.object({
    title: z.string(),
    term: z.string(),
    definition: z.string(),
    seo: seoSchema,
  }),
});

const toolsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/tools" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seo: seoSchema,
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  forms: formsCollection,
  categories: categoriesCollection,
  glossary: glossaryCollection,
  tools: toolsCollection,
};
