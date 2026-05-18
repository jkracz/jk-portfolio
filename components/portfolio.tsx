"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import type { PortfolioProject } from "@/types/content";

const VISIBLE_COUNT = 4;

type PortfolioProps = {
  projects: PortfolioProject[];
};

export function Portfolio({ projects }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.05 });

  const initialProjects = projects.slice(0, VISIBLE_COUNT);
  const hiddenProjects = projects.slice(VISIBLE_COUNT);
  const hasHidden = hiddenProjects.length > 0;

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

        <div className="mx-auto max-w-5xl">
          {initialProjects.map((project, index) => (
            <CaseStudyRow
              key={project.slug}
              project={project}
              delayMs={100 + index * 80}
              isFirst={index === 0}
              onOpen={() => setSelectedProject(project)}
            />
          ))}

          {hasHidden && (
            <div className="expand" data-open={showAll} aria-hidden={!showAll}>
              <div>
                {hiddenProjects.map(project => (
                  <CaseStudyRow
                    key={project.slug}
                    project={project}
                    delayMs={0}
                    isFirst={false}
                    onOpen={() => setSelectedProject(project)}
                    revealOnMount
                  />
                ))}
              </div>
            </div>
          )}

          {hasHidden && (
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
  delayMs: number;
  isFirst: boolean;
  onOpen: () => void;
  revealOnMount?: boolean;
};

function CaseStudyRow({
  project,
  delayMs,
  isFirst,
  onOpen,
  revealOnMount = false,
}: CaseStudyRowProps) {
  return (
    <article
      className={`${revealOnMount ? "enter" : "reveal"} grid gap-8 py-12 md:grid-cols-[3fr_2fr] md:gap-14 md:py-16 ${
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
        />
      </button>
    </article>
  );
}
