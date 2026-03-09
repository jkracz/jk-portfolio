import type { PortfolioProject } from "@/types/content";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "dj-david-events-site",
    title: "DJ David Event Site",
    description: "Full redesign of a prominent DJ's marketing and portfolio site.",
    fullDescription:
      "Complete redesign of DJ David's marketing and portfolio website, built to match the scale of his personal brand as the founder of Club 1BD and NU2U Radio. Built with Astro and Sanity CMS to handle a deep catalog of events, mixes, and media. Includes a custom background music player with audio streaming so visitors can listen while they browse. Brands started reaching out within days of launch.",
    image: "/projects/djDavid/djdavid-homepage.avif",
    technologies: ["Astro", "Cloudflare", "Sanity CMS"],
    results: "Brand inquiries within 2 days of launch.",
    resultMetric: "5,000+",
    resultLabel: "visitors in 2 weeks",
    link: "https://www.djdavidevents.com/",
  },
  {
    slug: "club-1bd-website",
    title: "Club 1BD Website",
    description: "Webflow site built to launch an international tour.",
    fullDescription:
      "Designed and built a Webflow site to launch Club 1BD's international tour. Focused on media-rich layouts that stay performant, showcasing video, photography, and event content without sacrificing load times. The site attracted 200k+ unique visitors in its first 60 days with nearly every show selling out.",
    image: "/projects/club1bd/1bd-homepage.avif",
    technologies: ["Webflow", "Canva", "Relume"],
    results: "200k+ unique visitors in 60 days, nearly every show sold out.",
    resultMetric: "200k+",
    resultLabel: "visitors in 60 days",
    link: "https://www.club1bd.com/",
  },
  {
    slug: "nu2u-radio-website",
    title: "NU2U Radio Website",
    description: "Brand launch site for a music discovery event series.",
    fullDescription:
      "Built the web presence for NU2U Radio, an explorative event series centered on music discovery. The site was designed to establish a strong brand identity for the series and its curators, giving the project a home that matches the creative vision behind the events.",
    image: "/projects/nu2uRadio/nu2u-homepage.avif",
    technologies: ["Webflow", "Canva"],
    results: "Over 20,000 unique visitors in the first 90 days.",
    resultMetric: "20,000+",
    resultLabel: "visitors in 90 days",
    link: "https://www.nu2uradio.com/",
  },
  {
    slug: "pull-systems-company-site",
    title: "Pull Systems Company Site",
    description: "Two-week Webflow redesign for a manufacturing AI startup.",
    fullDescription:
      "Redesigned Pull Systems' company site in two weeks, repositioning the brand for enterprise credibility. Pull Systems is a Silicon Valley-based manufacturing AI startup, so the site needed to communicate technical depth while driving inbound leads. Generated 20+ enterprise leads in the first month after relaunch.",
    image: "/projects/pullSystems/pull-homepage.avif",
    transformation: {
      before: "/projects/pullSystems/pull-before.avif",
      after: "/projects/pullSystems/pull-homepage.avif",
    },
    technologies: ["Webflow", "Figma", "API Integration"],
    results: "20+ enterprise leads in the first month.",
    resultMetric: "20+",
    resultLabel: "enterprise leads",
    link: "https://www.pull.systems/",
  },
  {
    slug: "furtado-global",
    title: "Furtado Global",
    description: "Digital home for a global entertainment brand, integrated with Dice.",
    fullDescription:
      "Designed and developed a Webflow site for Furtado Global, a global entertainment brand. Integrated with the Dice API to pull in live event listings, keeping the site current without manual updates. The same performance-first approach from the Club 1BD work carried over here, with media-heavy pages that still load fast. Drew 500+ visitors in its first week.",
    image: "/projects/furtadoGlobal/furtado-global-homepage.avif",
    technologies: ["Webflow", "Dice API", "Canva", "Relume"],
    results: "500+ visitors in the first week of launch.",
    resultMetric: "500+",
    resultLabel: "visitors in week 1",
    link: "https://www.furtadoglobal.com/",
  },
];
