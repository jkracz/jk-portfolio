// Drives the "Selected work" filter. Keep values short: they double as the
// noun in the live status line ("3 apps", "5 marketing sites").
export type ProjectCategory = "app" | "marketing";

export type ProjectScreenshot = {
  src: string;
  caption: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  fullDescription: string;
  image: string;
  // CSS object-position for the card + dialog banner crop. Defaults to center;
  // set when a screenshot's subject sits off-center (e.g. a left-aligned hero).
  imagePosition?: string;
  technologies: string[];
  results: string;
  resultMetric?: string;
  resultLabel?: string;
  link?: string;
  transformation?: {
    before: string;
    after: string;
  };
  // Extra screenshots shown in the project dialog. Order is the read order.
  gallery?: ProjectScreenshot[];
};

export type EngagementMode = {
  slug: string;
  number: string;
  label: string;
  lead: string;
  body: string;
};
