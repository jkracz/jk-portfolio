import type { PricingConfig, PricingFormData } from "@/types/content";

export const pricingConfig: PricingConfig = {
  sectionTitle: "Project Estimate Calculator",
  sectionDescription:
    "Get an instant estimate for your project based on your specific requirements.",
  estimateLabel: "Estimated Project Cost",
  estimateDisclaimer:
    "This is a preliminary estimate and may vary based on detailed requirements.",
  successTitle: "Thank You!",
  successDescription: "I've received your request and will reach out to you shortly.",
  projectTypes: [
    { value: "website", label: "Website", basePrice: 800 },
    { value: "webapp", label: "Web Application", basePrice: 1200 },
    { value: "mobileapp", label: "Mobile Application", basePrice: 2000 },
  ],
  features: [
    {
      key: "ecommerce",
      label: "E-commerce Functionality",
      description: "Online store with product listings and checkout",
      price: 1000,
    },
    {
      key: "blog",
      label: "Blog/Content Management",
      description: "Ability to publish and manage content",
      price: 600,
    },
    {
      key: "authentication",
      label: "User Authentication",
      description: "Login, registration, and user accounts",
      price: 800,
    },
    {
      key: "apiIntegration",
      label: "API Integrations",
      description: "Connect with third-party services",
      price: 800,
    },
  ],
  timelines: [
    { value: "asap", label: "ASAP (Rush)", multiplier: 1.3 },
    { value: "standard", label: "Standard (4-8 weeks)", multiplier: 1 },
    { value: "flexible", label: "Flexible (8+ weeks)", multiplier: 0.9 },
  ],
  complexityLevels: [
    {
      value: 1,
      label: "Simple",
      description: "Basic functionality with minimal customization",
      multiplier: 1,
    },
    {
      value: 2,
      label: "Moderate",
      description: "Custom features and integrations",
      multiplier: 1.2,
    },
    {
      value: 3,
      label: "Complex",
      description: "Advanced functionality, multiple integrations, and custom architecture",
      multiplier: 1.4,
    },
  ],
};

export const initialPricingFormData: PricingFormData = {
  name: "",
  email: "",
  message: "",
  projectType: "website",
  timeline: "standard",
  complexity: 1,
  features: {
    ecommerce: false,
    blog: false,
    authentication: false,
    apiIntegration: false,
  },
};
