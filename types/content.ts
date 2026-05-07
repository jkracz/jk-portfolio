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

export type ServiceIcon = "shopping-bag" | "layers" | "code" | "smartphone" | "globe" | "terminal";

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  color: string;
  features?: string[];
  featured?: boolean;
};
