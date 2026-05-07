import type { EngagementMode } from "@/types/content";

export const engagementModes: EngagementMode[] = [
  {
    slug: "full-time",
    number: "01",
    label: "Full-time",
    lead: "Senior IC or engineering leadership at companies building serious product.",
    body: "I'm open to roles with real ownership and an awesome team. Hands-on technical depth required. I'll write code, not just docs.",
  },
  {
    slug: "fractional",
    number: "02",
    label: "Fractional / Advisory",
    lead: "Embedded part-time with your team.",
    body: "I shape technical direction and product strategy, write code alongside the team, and help with hiring. Useful when you need senior eng judgment without adding a full-time hire.",
  },
  {
    slug: "project",
    number: "03",
    label: "Project Contracts",
    lead: "End-to-end ownership of a defined build.",
    body: "Greenfield builds, relaunches, and custom feature work. Scoped and shipped end-to-end. Best when you have a clear deliverable and need someone to own it from kickoff to handoff.",
  },
];
