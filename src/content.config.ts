import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      post_hero: z.object({
        date: z.string().or(z.date()),
        heading: z.string(),
        tags: z.array(z.string()),
        author: z.string(),
        image: image(),
        image_alt: z.string(),
      }),
      thumb_image_path: image(),
      thumb_image_alt: z.string(),
      seo: z.object({
        page_description: z.string().nullable(),
        canonical_url: z.string().nullable(),
        featured_image: image().nullable(),
        featured_image_alt: z.string().nullable(),
        author_twitter_handle: z.string().nullable(),
        open_graph_type: z.string().nullable(),
        no_index: z.boolean(),
      }).optional(),
    }),
  }),
  pages: defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,astro}', base: "./src/content/pages" }),
    schema: z.object({
      title: z.string(),
      hero_block: z.any().optional(),
      content_blocks: z.array(z.any()).optional(),
      page_size: z.number().positive().optional(),
      seo: z.object({
        page_description: z.string().nullable(),
        canonical_url: z.string().nullable(),
        featured_image: z.string().nullable(),
        featured_image_alt: z.string().nullable(),
        author_twitter_handle: z.string().nullable(),
        open_graph_type: z.string().nullable(),
        no_index: z.boolean(),
      }).optional(),
    }),
  }),
};
