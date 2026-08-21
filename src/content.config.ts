import { defineCollection, z } from "astro:content";
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
      heading: z.string(),
      tags: z.array(z.string()).optional(),
      author: z.string(),
      image: z.string().optional(),
      image_alt: z.string().optional(),
    }),
    thumb_image_path: z.string().optional(),
    thumb_image_alt: z.string().optional(),
    seo: seoSchema,
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,astro}', base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    hero_block: z.any().optional(),
    content_blocks: z.array(z.any()).optional(),
    seo: seoSchema,
  }),
});

const guidesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    seo: seoSchema,
  }),
});

const glossaryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/glossary" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    seo: seoSchema,
  }),
});

const industriesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/industries" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    seo: seoSchema,
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  guides: guidesCollection,
  glossary: glossaryCollection,
  industries: industriesCollection,
};
