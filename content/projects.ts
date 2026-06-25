import type { PortfolioProject } from "@/types/content";

// Order is intentional: the first 4 are the default "above the fold" set for
// the Selected Work section. The rest reveal via Show More (on the All filter).
// The lead is the shipped-product work (category "app") so both filter groups —
// Apps and Marketing sites — are represented before any expansion.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "cause-compass",
    title: "CauseCompass",
    category: "app",
    description:
      "An open-source discovery engine for nonprofits. It turns raw IRS records and public web data into AI-written profiles you can actually browse, so you find causes that match your values.",
    fullDescription:
      "Designed and built CauseCompass end to end: a Turborepo monorepo with a five-stage data pipeline behind a calm consumer app. A parser ingests raw IRS Exempt Organizations records into Convex; cron jobs and the Google Search API find each org's website; Playwright and Cheerio workers crawl it; then OpenAI's Batch API writes the mission, summary, donation link, keywords, and activities for every profile. The Next.js front end turns that data into discovery: search, a swipe-to-save flow, sixteen cause categories, and a My Causes page that plots your giving as a Compass Constellation across axes like Stewardship, Knowledge, Care, and Imagination. It is deliberately not a charity-rating or Form 990 tool, just a quieter way to find organizations you would never have known to search for.",
    image: "/projects/causeCompass/cause-compass-hero.avif",
    imagePosition: "left",
    technologies: [
      "Next.js 16",
      "Convex",
      "OpenAI Batch API",
      "Playwright",
      "TypeScript",
      "Tailwind CSS",
      "PostHog",
    ],
    results:
      "An end-to-end pipeline that turns raw IRS filings into a searchable nonprofit directory with generated profiles.",
    resultMetric: "250k+",
    resultLabel: "Nonprofit profiles created from the AI pipeline",
    link: "https://www.causecompass.org",
    gallery: [
      {
        src: "/projects/causeCompass/cause-compass-browse.avif",
        caption: "Browse by cause, with AI-written featured profiles.",
      },
      {
        src: "/projects/causeCompass/cause-compass-constellation.avif",
        caption: "My Causes plots your giving as a constellation.",
      },
      {
        src: "/projects/causeCompass/cause-compass-profile.avif",
        caption: "A generated profile: mission, activities, and links.",
      },
    ],
  },
  {
    slug: "sidequest",
    title: "SideQuest",
    category: "app",
    description:
      "A published Chrome extension that blocks distracting sites on a schedule. The only way back in is to finish a side quest, turning an impulse into a deliberate choice instead of an all-or-nothing wall.",
    fullDescription:
      "Built SideQuest as a Manifest V3 Chrome extension for people who bounce off all-or-nothing blockers. A background service worker intercepts navigation and sweeps already-open tabs when a block starts. Users define block lists (matched by hostname, subdomains included), recurring time blocks that support overnight ranges, and ad hoc sessions with no early exit. When you hit a blocked site you are sent to a quest: a reflection prompt, a countdown, an honor-system counter, or a flashcard review. Finishing one earns a timed pass back to the site. A local quest log tracks quests completed, temptations resisted, time saved, and your streak. Everything lives in chrome.storage.local, so there are no accounts, servers, or trackers.",
    image: "/projects/sideQuest/sidequest-popup.avif",
    technologies: ["TypeScript", "React 19", "Vite", "CRXJS", "Chrome MV3", "Tailwind CSS"],
    results:
      "A focus tool that replaces hard blocking with earned, intentional access, all running on-device.",
    resultMetric: "100%",
    resultLabel: "local: no accounts, servers, or trackers",
    link: "https://chromewebstore.google.com/detail/sidequest/jjcfgdklpmmlnlnkoofinlfkieikciel",
    gallery: [
      {
        src: "/projects/sideQuest/sidequest-quest.avif",
        caption: "Hit a blocked site, choose a quest to earn back in.",
      },
      {
        src: "/projects/sideQuest/sidequest-quests.avif",
        caption: "Configurable quests: reflection, timer, counter, flashcards.",
      },
      {
        src: "/projects/sideQuest/sidequest-passes.avif",
        caption: "Earned passes grant timed access back to the site.",
      },
    ],
  },
  {
    slug: "zinegeist",
    title: "Zinegeist",
    category: "app",
    description:
      "Designed and shipped a focused publishing platform for independent writers, centered on ownership, readability, and durable web presence.",
    fullDescription:
      "Led end-to-end product development of Zinegeist, a writer-first publishing app that replaces feed-driven discovery with an editorial shelf model. Built core creation and consumption workflows: PDF upload and publishing, permanent profile shelves, publication detail/read experiences, and profile management. Implemented subscription infrastructure with Free and Plus capacity tiers (5 to 1,000 publications) to support long-term creator growth and monetization readiness, while maintaining a calm, low-noise UX aligned with the product thesis.",
    image: "/projects/zinegeist/zinegeistHero.avif",
    technologies: [
      "SvelteKit",
      "Convex",
      "TypeScript",
      "Better Auth",
      "Tailwind CSS",
      "Polar",
      "PostHog",
    ],
    results:
      "Delivered a production-ready MVP with complete writer publishing lifecycle and monetization rails.",
    resultMetric: "5 → 1,000",
    resultLabel: "publication capacity per writer (Free to Plus)",
    link: "https://zinegeist.club",
  },
  {
    slug: "club-1bd-website",
    title: "Club 1BD",
    category: "marketing",
    description:
      "Webflow site built to launch an international tour. Media-rich, performance-first layouts that handled scale during peak campaign traffic.",
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
    slug: "dj-david-events-site",
    title: "DJ David Events",
    category: "marketing",
    description:
      "Full redesign of a prominent DJ's marketing and portfolio site. Custom background audio player, deep media catalog via Sanity CMS.",
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
    slug: "nu2u-radio-website",
    title: "NU2U Radio",
    category: "marketing",
    description:
      "Brand launch site for a music discovery event series. Established the visual identity and gave the project a home matching its creative vision.",
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
    slug: "furtado-global",
    title: "Furtado Global",
    category: "marketing",
    description:
      "Digital home for a global entertainment brand. Live event listings via Dice API, performance-first under media-heavy pages.",
    fullDescription:
      "Designed and developed a Webflow site for Furtado Global, a global entertainment brand. Integrated with the Dice API to pull in live event listings, keeping the site current without manual updates. The same performance-first approach from the Club 1BD work carried over here, with media-heavy pages that still load fast. Drew 500+ visitors in its first week.",
    image: "/projects/furtadoGlobal/furtado-global-homepage.avif",
    technologies: ["Webflow", "Dice API", "Canva", "Relume"],
    results: "500+ visitors in the first week of launch.",
    resultMetric: "500+",
    resultLabel: "visitors in week one",
    link: "https://www.furtadoglobal.com/",
  },
  {
    slug: "pull-systems-company-site",
    title: "Pull Systems",
    category: "marketing",
    description:
      "Two-week Webflow redesign for a Silicon Valley manufacturing AI startup. Repositioned the brand for enterprise credibility while driving inbound leads.",
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
    resultLabel: "enterprise leads in month one",
    link: "https://www.pull.systems/",
  },
];
