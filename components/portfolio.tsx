"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import type { PortfolioProject, ProjectCategory } from "@/types/content";

const VISIBLE_COUNT = 4;

type Filter = "all" | ProjectCategory;

type FilterTab = {
  value: Filter;
  label: string;
  // Singular/plural noun used in the live status line, e.g. "3 apps".
  noun: string;
};

const FILTER_TABS: FilterTab[] = [
  { value: "all", label: "All", noun: "projects" },
  { value: "app", label: "Apps", noun: "apps" },
  { value: "marketing", label: "Marketing sites", noun: "marketing sites" },
];

type PortfolioProps = {
  projects: PortfolioProject[];
};

export function Portfolio({ projects }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [showAll, setShowAll] = useState(false);
  // Switch the row entrance from scroll-triggered (.reveal) to immediate
  // (.enter) once the visitor starts filtering, so re-filters animate in place.
  const [hasInteracted, setHasInteracted] = useState(false);
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.05 });

  // Counts are stable for the dataset; compute once.
  const counts = useMemo(() => {
    const byCategory = projects.reduce<Record<string, number>>((acc, p) => {
      acc[p.category] = (acc[p.category] ?? 0) + 1;
      return acc;
    }, {});
    return { all: projects.length, ...byCategory } as Record<Filter, number>;
  }, [projects]);

  // Only offer filters once the list is long enough to warrant them and more
  // than one category is present.
  const tabs = useMemo(
    () => FILTER_TABS.filter(t => t.value === "all" || (counts[t.value] ?? 0) > 0),
    [counts]
  );
  const showFilters = projects.length > VISIBLE_COUNT && tabs.length > 2;

  const isAll = filter === "all";
  const matches = useMemo(
    () => (isAll ? projects : projects.filter(p => p.category === filter)),
    [projects, filter, isAll]
  );

  // Expansion (Show more) only applies on the All filter; picking a category is
  // itself the way to shorten the list, so filtered views show every match.
  const hasExpansion = isAll && matches.length > VISIBLE_COUNT;
  const aboveFold = hasExpansion ? matches.slice(0, VISIBLE_COUNT) : matches;
  const hiddenProjects = hasExpansion ? matches.slice(VISIBLE_COUNT) : [];

  const activeTab = tabs.find(t => t.value === filter) ?? FILTER_TABS[0];
  const shownCount = hasExpansion && !showAll ? VISIBLE_COUNT : matches.length;
  const statusLabel =
    shownCount < matches.length
      ? `${shownCount} of ${matches.length} ${activeTab.noun}`
      : `${matches.length} ${activeTab.noun}`;

  const rowAnimation = hasInteracted ? "enter" : "reveal";

  function selectFilter(next: Filter) {
    if (next === filter) return;
    setHasInteracted(true);
    setShowAll(false);
    setFilter(next);
  }

  return (
    <section id="portfolio" className="relative overflow-hidden bg-muted/40 py-16 md:py-24">
      {/* Top fade: bleed Hero's Paper background into Portfolio's Mist band so the transition reads as a soft gradient, not a hard line. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent"
      />
      <div ref={ref} data-inview={inView} className="container">
        <div className="reveal mb-12 max-w-3xl md:mb-16">
          <h2 className="h2 mb-4">Selected work</h2>
          <p className="text-lead text-muted-foreground">
            Work I can publish. The{" "}
            <a
              href="/KraczResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-underline text-foreground"
            >
              <span className="relative z-10">resume</span>
            </a>{" "}
            has more I can&apos;t.
          </p>
        </div>

        <div className="max-w-5xl">
          {showFilters && (
            <div
              className="reveal mb-2 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-border pb-4"
              style={{ "--reveal-delay": 60 } as CSSProperties}
            >
              <div
                role="group"
                aria-label="Filter work by type"
                className="flex flex-wrap items-center gap-x-7 gap-y-2"
              >
                {tabs.map(tab => (
                  <button
                    key={tab.value}
                    type="button"
                    data-active={filter === tab.value}
                    aria-pressed={filter === tab.value}
                    onClick={() => selectFilter(tab.value)}
                    className="filter-tab focus-visible:outline-hidden rounded-sm text-sm font-medium tracking-wide focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <p className="text-caption tabular-nums" aria-live="polite">
                {statusLabel}
              </p>
            </div>
          )}

          {/* Re-key on filter so rows remount and replay their entrance when the
              category changes. showAll toggles do not change the key, so the
              Show More expansion animates via .expand instead. */}
          <div key={filter}>
            {aboveFold.map((project, index) => (
              <CaseStudyRow
                key={project.slug}
                project={project}
                animation={rowAnimation}
                delayMs={100 + index * 80}
                isFirst={index === 0}
                onOpen={() => setSelectedProject(project)}
              />
            ))}

            {hasExpansion && (
              <div className="expand" data-open={showAll} aria-hidden={!showAll}>
                <div>
                  {hiddenProjects.map(project => (
                    <CaseStudyRow
                      key={project.slug}
                      project={project}
                      animation="enter"
                      delayMs={0}
                      isFirst={false}
                      onOpen={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {hasExpansion && (
            <div className="mt-10 flex justify-center md:mt-14">
              <button
                onClick={() => setShowAll(s => !s)}
                aria-expanded={showAll}
                className="animated-underline text-sm font-medium tracking-wide"
              >
                <span className="relative z-10">
                  {showAll ? "Show fewer" : `Show ${hiddenProjects.length} more`}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={open => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-3xl overflow-hidden p-0">
            <div className="relative h-[240px] w-full">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                sizes="(min-width: 1024px) 48rem, 100vw"
                className="object-cover"
                style={{ objectPosition: selectedProject.imagePosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--overlay)_/_0.8)] via-[rgb(var(--overlay)_/_0.3)] to-transparent">
                <div className="absolute bottom-5 left-6 right-6">
                  <DialogTitle className="font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-xs tracking-wide text-white/70">
                    {selectedProject.technologies.join(" · ")}
                  </DialogDescription>
                </div>
              </div>
            </div>

            <div className="space-y-6 p-6 md:p-8">
              <p className="text-body-large">{selectedProject.fullDescription}</p>

              {selectedProject.transformation && (
                <div>
                  <h4 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">
                    Before / After
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <figure>
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border">
                        <Image
                          src={selectedProject.transformation.before}
                          alt="Before"
                          fill
                          sizes="(min-width: 1024px) 24rem, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-2 text-xs text-muted-foreground">Before</figcaption>
                    </figure>
                    <figure>
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border">
                        <Image
                          src={selectedProject.transformation.after}
                          alt="After"
                          fill
                          sizes="(min-width: 1024px) 24rem, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-2 text-xs text-muted-foreground">After</figcaption>
                    </figure>
                  </div>
                </div>
              )}

              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div>
                  <h4 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">
                    Screens
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedProject.gallery.map(shot => (
                      <figure key={shot.src}>
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-muted">
                          <Image
                            src={shot.src}
                            alt={shot.caption}
                            fill
                            sizes="(min-width: 1024px) 22rem, 50vw"
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="mt-2 text-xs text-muted-foreground">
                          {shot.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="mb-1 text-sm font-semibold tracking-wide text-muted-foreground">
                  Outcome
                </h4>
                <p className="text-body">{selectedProject.results}</p>
              </div>

              {selectedProject.link && (
                <div className="pt-2">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      Visit project
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

type CaseStudyRowProps = {
  project: PortfolioProject;
  animation: "reveal" | "enter";
  delayMs: number;
  isFirst: boolean;
  onOpen: () => void;
};

function CaseStudyRow({ project, animation, delayMs, isFirst, onOpen }: CaseStudyRowProps) {
  return (
    <article
      className={`${animation} grid gap-8 py-12 md:grid-cols-[3fr_2fr] md:gap-14 md:py-16 ${
        isFirst ? "" : "border-t border-border"
      }`}
      style={{ "--reveal-delay": delayMs } as CSSProperties}
    >
      <div className="flex flex-col justify-center">
        <h3 className="font-heading text-xl font-semibold tracking-tight md:text-2xl">
          {project.title}
        </h3>

        {project.resultMetric && (
          <div className="mt-3">
            <p className="font-heading text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
              {project.resultMetric}
            </p>
            {project.resultLabel && (
              <p className="mt-2 text-sm text-muted-foreground">{project.resultLabel}</p>
            )}
          </div>
        )}

        <p className="mt-6 max-w-prose text-base text-muted-foreground">{project.description}</p>

        <p className="mt-4 text-xs tracking-wide text-muted-foreground/70">
          {project.technologies.join(" · ")}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="animated-underline inline-flex items-center gap-1.5 text-sm font-medium"
            >
              <span className="relative z-10">Visit project</span>
              <ExternalLink size={14} className="relative z-10" />
            </a>
          )}
          {(project.fullDescription || project.transformation) && (
            <button onClick={onOpen} className="animated-underline text-sm font-medium">
              <span className="relative z-10">Read more</span>
            </button>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={onOpen}
        aria-label={`Read more about ${project.title}`}
        className="focus-visible:outline-hidden group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          style={{ objectPosition: project.imagePosition }}
        />
      </button>
    </article>
  );
}
