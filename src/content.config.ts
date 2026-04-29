import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tagline: z.string(),
    cover: z.string(),                  // hero/wide bg image
    tile: z.string(),                   // image used in homepage tile
    accent: z.enum(['orange', 'pink', 'lime', 'blue', 'violet']).default('orange'),
    role: z.string().optional(),
    year: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
