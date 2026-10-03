import { defineCollection, z } from 'astro:content';

const listings = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string().min(1),
    directoryType: z.enum(['software-tool', 'local-business']),
    summary: z.string().min(1),
    differentiator: z.string().min(1),
    url: z.string().url(),
    // Tracked referral link, set once an affiliate program approves us. The plain
    // url stays as the fallback so a listing never links nowhere.
    affiliateUrl: z.string().url().optional(),
    pricing: z.string().nullable().optional(),
    address: z.string().nullable().optional(),
    category: z.string().min(1),
    side: z.enum(['gc', 'sub', 'both', 'residential', 'service']),
    whoPays: z.string().min(1),
    entryPrice: z.string().min(1),
    pricingConfidence: z.enum(['vendor', 'third-party', 'quote']),
    bestFor: z.string().min(1),
    skipIf: z.string().min(1),
    lastChecked: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    sources: z.array(z.string().url()).min(1),
  }),
});

const comparisons = defineCollection({
  type: 'data',
  schema: z.object({
    kind: z.enum(['alternatives', 'versus']),
    title: z.string().min(1),
    h1: z.string().min(1),
    description: z.string().min(1),
    lead: z.string().min(1),
    // listing ids: one for an alternatives page, two for a versus page
    subjects: z.array(z.string()).min(1).max(2),
    why: z.array(z.string()).min(1),
    picks: z.array(z.object({ id: z.string(), pickIf: z.string(), watchOut: z.string() })).default([]),
    table: z.object({
      title: z.string(),
      headers: z.array(z.string()),
      rows: z.array(z.array(z.string())),
      note: z.string().optional(),
    }).optional(),
    calc: z.object({
      title: z.string(),
      headers: z.array(z.string()),
      rows: z.array(z.array(z.string())),
      note: z.string().optional(),
    }).optional(),
    verdict: z.array(z.string()).min(1),
    lastChecked: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  }),
});

export const collections = { listings, comparisons };
