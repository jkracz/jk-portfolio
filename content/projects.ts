import type { PortfolioProject } from "@/types/content";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "club-1bd-event-site",
    title: "Club 1BD Event Site",
    description: "New Webflow site launching international tour.",
    fullDescription:
      "Custom Webflow site built to launch Club 1BD's international tour, attracting 200k+ visitors and achieving sold-out events.",
    image: "/projects/club1bd/1bd-homepage.avif",
    technologies: ["Webflow", "Canva", "Relume"],
    results: "Over 200,000 unique visitors in the first 60 days, almost all shows sold out.",
    link: "https://www.club1bd.com/",
  },
  {
    slug: "pull-systems-company-site",
    title: "Pull Systems Company Site",
    description: "Rapid Webflow redesign for enterprise appeal.",
    fullDescription:
      "Rapid Webflow redesign transforming Pull Systems' brand into an enterprise-focused experience, driving 20+ enterprise leads in one month.",
    image: "/projects/pullSystems/pull-homepage.avif",
    transformation: {
      before: "/projects/pullSystems/pull-before.avif",
      after: "/projects/pullSystems/pull-homepage.avif",
    },
    technologies: ["Webflow", "Figma", "API Integration", "Relume"],
    results: "Over 20 enterprise leads generated in the first month.",
    link: "https://www.pull.systems/",
  },
  {
    slug: "furtado-global",
    title: "Furtado Global",
    description: "A refined digital presence for a global entertainment brand.",
    fullDescription:
      "Designed and developed a Webflow site to elevate the Furtado Global brand, integrating third-party APIs and streamlined design elements. The launch drew over 500 visitors in the first week, signaling strong early engagement.",
    image: "/projects/furtadoGlobal/furtado-global-homepage.avif",
    technologies: ["Webflow", "API Integration", "Canva", "Relume"],
    results: "500+ visitors in the first week of launch.",
    link: "https://www.furtadoglobal.com/",
  },
];
