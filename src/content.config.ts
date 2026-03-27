import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const committees = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/committees' }),
  schema: z.object({
    name_ua: z.string(),
    name_en: z.string(),
    icon: z.string(),
    description_ua: z.string(),
    description_en: z.string(),
    order: z.number(),
  }),
});

const leadership = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/leadership' }),
  schema: z.object({
    name_ua: z.string(),
    name_en: z.string(),
    title_ua: z.string(),
    title_en: z.string(),
    bio_ua: z.string(),
    bio_en: z.string(),
    photo: z.string().optional(),
    order: z.number(),
  }),
});

const council = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/council' }),
  schema: z.object({
    name: z.string(),
    affiliation_ua: z.string(),
    affiliation_en: z.string(),
  }),
});

const experts = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/experts' }),
  schema: z.object({
    name: z.string(),
    affiliation_ua: z.string(),
    affiliation_en: z.string(),
    country_ua: z.string(),
    country_en: z.string(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title_ua: z.string(),
    title_en: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    type: z.enum(['panel', 'summit', 'conference']),
    featured: z.boolean(),
    time: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title_ua: z.string(),
    title_en: z.string(),
    type: z.enum(['policy-brief', 'report', 'analysis']),
    author: z.string(),
    date: z.coerce.date(),
    pdf: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title_ua: z.string(),
    title_en: z.string(),
    date: z.coerce.date(),
    category_ua: z.string(),
    category_en: z.string(),
  }),
});

const alerts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/alerts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    readTime: z.number(),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/settings' }),
  schema: z.object({
    email: z.string().optional(),
    linkedin: z.string().optional(),
    whatsapp: z.string().optional(),
    phone: z.string().optional(),
  }),
});

export const collections = {
  committees,
  leadership,
  council,
  experts,
  events,
  publications,
  news,
  alerts,
  settings,
};
