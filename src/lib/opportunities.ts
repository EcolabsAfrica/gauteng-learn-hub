export interface OpportunityDoc {
  title: string;
  description?: string;
  closingDate?: string;
  /** Public URL of the downloadable file (asset pointer .url) */
  file: string;
}

export interface OpportunityCategory {
  slug: string;
  title: string;
  blurb: string;
  documents: OpportunityDoc[];
}

export const opportunityCategories: OpportunityCategory[] = [
  {
    slug: "council-nominations",
    title: "College Council Nominations",
    blurb:
      "Nomination forms and related documents for the Gauteng CET College Council.",
    documents: [],
  },
  {
    slug: "vacancies",
    title: "Vacancies",
    blurb:
      "Current job openings at Gauteng CET College and its community learning centres.",
    documents: [],
  },
  {
    slug: "tenders",
    title: "Tenders",
    blurb:
      "Open bids and tender invitations issued by the college.",
    documents: [],
  },
  {
    slug: "rfq",
    title: "Request for Quotation (RFQ)",
    blurb:
      "Requests for quotation for goods and services required by the college.",
    documents: [],
  },
  {
    slug: "bursaries",
    title: "Bursaries",
    blurb:
      "Bursary and financial aid opportunities for current and prospective students.",
    documents: [],
  },
];

export function getOpportunityCategory(slug: string) {
  return opportunityCategories.find((c) => c.slug === slug);
}
