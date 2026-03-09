"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { PortfolioProject } from "@/types/content";

type PortfolioProps = {
  projects: PortfolioProject[];
};

export function Portfolio({ projects }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  } as const;

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.15 + i * 0.12,
      },
    }),
  } as const;

  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3, ease: "easeIn" as const },
    },
  } as const;

  return (
    <section id="portfolio" className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
      <motion.div
        className="container relative z-10"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="mx-auto mb-14 max-w-2xl text-center" variants={headerVariants}>
          <h2 className="h2 mb-4">Featured Projects</h2>
          <p className="text-lead text-muted-foreground">
            Recent work delivering real results for clients.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              custom={index}
              variants={projectVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/40 bg-card shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
                {/* Image area */}
                <div className="relative h-56 w-full overflow-hidden sm:h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Result metric badge */}
                  {project.resultMetric && (
                    <div className="absolute bottom-3 left-3 rounded-lg bg-white/15 px-3 py-1.5 backdrop-blur-md">
                      <span className="block font-heading text-lg font-bold leading-tight text-white">
                        {project.resultMetric}
                      </span>
                      <span className="block text-[11px] leading-tight text-white/70">
                        {project.resultLabel}
                      </span>
                    </div>
                  )}

                  {/* Hover arrow */}
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Info area */}
                <div className="p-5">
                  <h3 className="mb-1 text-base font-semibold tracking-tight">{project.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{project.description}</p>
                  <p className="text-xs tracking-wide text-muted-foreground/50">
                    {project.technologies.join(" · ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={open => !open && setSelectedProject(null)}>
            <DialogContent className="max-w-4xl overflow-hidden p-0">
              <motion.div variants={dialogVariants} initial="hidden" animate="visible" exit="exit">
                <div className="relative h-[250px] w-full">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    sizes="(min-width: 1024px) 64rem, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-4 left-6 right-6">
                      <DialogTitle className="h3 text-white">{selectedProject.title}</DialogTitle>
                      <DialogDescription className="text-body text-white/80">
                        {selectedProject.technologies.join(" · ")}
                      </DialogDescription>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 p-6">
                  <div>
                    <h4 className="h5 mb-2">Project Overview</h4>
                    <p className="text-body">{selectedProject.fullDescription}</p>
                  </div>

                  {selectedProject.transformation && (
                    <div>
                      <h4 className="h5 mb-2">Transformation</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-caption mb-1 text-muted-foreground">Before</p>
                          <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                            <Image
                              src={selectedProject.transformation.before}
                              alt="Before"
                              fill
                              sizes="(min-width: 1024px) 32rem, 100vw"
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="text-caption mb-1 text-muted-foreground">After</p>
                          <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                            <Image
                              src={selectedProject.transformation.after}
                              alt="After"
                              fill
                              sizes="(min-width: 1024px) 32rem, 100vw"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="h5 mb-2">Results</h4>
                    <p className="text-body">{selectedProject.results}</p>
                  </div>

                  {selectedProject.link && (
                    <div className="pt-2 text-right">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1"
                        >
                          <span>Visit Project</span>
                          <ExternalLink size={14} />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
