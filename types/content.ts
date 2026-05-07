export type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  results: string;
  resultMetric?: string;
  resultLabel?: string;
  link?: string;
  transformation?: {
    before: string;
    after: string;
  };
};

export type EngagementMode = {
  slug: string;
  number: string;
  label: string;
  lead: string;
  body: string;
};
