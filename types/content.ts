export type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  results: string;
  link?: string;
  transformation?: {
    before: string;
    after: string;
  };
};

export type ServiceIcon = "shopping-bag" | "layers" | "code" | "smartphone";

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  color: string;
};

export type ProjectType = "website" | "webapp" | "mobileapp";
export type Timeline = "asap" | "standard" | "flexible";
export type FeatureKey = "ecommerce" | "blog" | "authentication" | "apiIntegration";
export type ComplexityLevel = 1 | 2 | 3;

export type PricingProjectTypeOption = {
  value: ProjectType;
  label: string;
  basePrice: number;
};

export type PricingFeatureOption = {
  key: FeatureKey;
  label: string;
  description: string;
  price: number;
};

export type PricingTimelineOption = {
  value: Timeline;
  label: string;
  multiplier: number;
};

export type PricingComplexityOption = {
  value: ComplexityLevel;
  label: string;
  description: string;
  multiplier: number;
};

export type PricingConfig = {
  sectionTitle: string;
  sectionDescription: string;
  estimateLabel: string;
  estimateDisclaimer: string;
  successTitle: string;
  successDescription: string;
  projectTypes: PricingProjectTypeOption[];
  features: PricingFeatureOption[];
  timelines: PricingTimelineOption[];
  complexityLevels: PricingComplexityOption[];
};

export type PricingFormData = {
  name: string;
  email: string;
  message: string;
  projectType: ProjectType;
  timeline: Timeline;
  complexity: ComplexityLevel;
  features: Record<FeatureKey, boolean>;
};
