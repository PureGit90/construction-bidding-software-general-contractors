// Brand name, matched to the approved domain constructionbiddingsoftwarecompared.com. This and the tagline are
// the only places the brand appears in code, so renaming is a one-file change.
export const SITE_NAME = 'Construction Bidding Software Compared';
export const TAGLINE = 'Construction bidding software, compared by who pays.';
export const SITE_DESCRIPTION =
  'Prices, who pays and when to skip each tool: 21 bid management, takeoff and estimating products for general contractors and subcontractors.';

// Nothing is crawlable until GATE approval. /publish-directory sets PUBLIC_NOINDEX=false.
export const NOINDEX = import.meta.env.PUBLIC_NOINDEX !== 'false';

// Left null until Marco supplies an address at GATE; pages omit the contact line when null.
export const CONTACT_EMAIL: string | null = null;

export const CATEGORIES = [
  {
    slug: 'bid-networks',
    name: 'Bid networks and ITB management',
    short: 'Bid networks',
    intro:
      'Bid networks connect general contractors and subcontractors. They are priced by who the vendor expects to pay, which vendors rarely say plainly: some charge the GC and let subs respond free, others do the reverse. These tools run from invitation networks to enterprise program platforms.',
  },
  {
    slug: 'takeoff-estimating',
    name: 'Takeoff and estimating',
    short: 'Takeoff and estimating',
    intro:
      'Takeoff and estimating tools measure plans and turn quantities into costs. Per-user prices run from a few hundred dollars a year for a PDF markup tool to several thousand dollars per seat per year for commercial estimating, so the right pick depends on how many bids you price a month.',
  },
  {
    slug: 'all-in-one',
    name: 'All-in-one contractor platforms',
    short: 'All-in-one platforms',
    intro:
      'These platforms bundle estimating and bid comparison with scheduling, job costing and invoicing. The question to ask of each is which plan unlocks bidding, because on several of them it is not the cheapest one.',
  },
] as const;

export const SIDES: Record<string, string> = {
  gc: 'General contractors',
  sub: 'Subcontractors',
  both: 'GCs and subs',
  residential: 'Residential builders',
};

export const CONFIDENCE: Record<string, { label: string; note: string }> = {
  vendor: { label: 'Vendor-published', note: 'Taken from the vendor\'s own pricing page.' },
  'third-party': { label: 'Third-party reported', note: 'Not confirmed on the vendor page; figures come from named third-party sources and may differ.' },
  quote: { label: 'Quote only', note: 'The vendor does not publish a price.' },
};

export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const categoryByName = (name: string) => CATEGORIES.find((c) => c.name === name);
