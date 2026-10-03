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
    side: z.enum(['gc', 'sub', 'both', 'residential']),
    whoPays: z.string().min(1),
    entryPrice: z.string().min(1),
    pricingConfidence: z.enum(['vendor', 'third-party', 'quote']),
    bestFor: z.string().min(1),
    skipIf: z.string().min(1),
    lastChecked: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    sources: z.array(z.string().url()).min(1),
  }),
});

export const collections = { listings };
