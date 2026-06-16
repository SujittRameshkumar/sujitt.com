import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    place: z.string().default('NEW YORK, NY'),
    draft: z.boolean().default(false),
    // Topics that feed the rotating hero word. Newest post wins on duplicates.
    tags: z.array(z.string()).default([]),
    // For pieces published elsewhere: link out instead of rendering a local page.
    external: z.string().url().optional(),
    publication: z.string().optional(),
  }),
});

export const collections = { writing };
