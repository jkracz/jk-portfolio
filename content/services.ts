import type { ServiceItem } from "@/types/content";

export const services: ServiceItem[] = [
  {
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    description: "Full-stack apps built to scale",
    icon: "code",
    color: "from-primary/20 to-primary/5",
    featured: true,
    features: ["React", "Next.js", "Astro", "Node.js"],
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    description: "Native feel, single codebase",
    icon: "smartphone",
    color: "from-green-500/20 to-green-600/5",
    features: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-Commerce",
    description: "Stores that convert",
    icon: "shopping-bag",
    color: "from-amber-500/20 to-amber-600/5",
    features: ["Shopify", "Custom Storefronts", "Payments"],
  },
  {
    slug: "marketing-brand-sites",
    title: "Marketing & Brand Sites",
    description: "High impact, fast turnaround",
    icon: "globe",
    color: "from-purple-500/20 to-purple-600/5",
    features: ["Webflow", "CMS", "SEO"],
  },
];
