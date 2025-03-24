"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Project = {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  before?: string;
  after?: string;
  results: string;
  link?: string;
};

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Club 1BD Event Site",
      description: "Webflow site with 40% conversion increase",
      fullDescription:
        "Complete redesign of an outdated Webflow site with modern UI, improved product filtering, and optimized checkout flow.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Webflow", "Canva", "Relume"],
      before: "/placeholder.svg?height=300&width=500",
      after: "/placeholder.svg?height=300&width=500",
      results:
        "40% increase in conversion rate and 25% increase in average order value within the first month after launch.",
      link: "#",
    },
    {
      id: 2,
      title: "Furtado Global",
      description: "Webflow site with 40% conversion increase",
      fullDescription:
        "Built a comprehensive analytics dashboard for a financial services company, featuring real-time data visualization and reporting tools.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Webflow", "Canva", "Relume"],
      results:
        "Reduced data analysis time by 60% and enabled the client to identify $1.2M in potential revenue opportunities.",
      link: "#",
    },
    {
      id: 3,
      title: "Pull Systems Company Site",
      description: "Webflow site with 40% conversion increase",
      fullDescription:
        "Designed and developed a fitness tracking mobile application with workout plans, progress tracking, and social features.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Webflow", "Figma", "Relume"],
      results: "Achieved 50,000+ downloads across iOS and Android with a 4.8-star average rating.",
      link: "#",
    },
  ];

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2 + i * 0.1,
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <section id="portfolio" className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
      <motion.div
        className="container relative z-10"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="mx-auto mb-12 max-w-3xl text-center" variants={headerVariants}>
          <h2 className="h2 mb-4">Featured Projects</h2>
          <p className="text-lead text-muted-foreground">
            A selection of my recent work delivering impactful solutions for clients across various
            industries.
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
              variants={projectVariants}
              custom={index}
              whileHover="hover"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="h4 mb-1 text-white">{project.title}</h3>
                    <p className="text-caption mb-2 text-white/80">{project.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/20 hover:text-white"
                  >
                    View Project
                  </Button>
                </div>
              </div>
              <div className="bg-card p-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                  )}
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
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-4 left-6 right-6">
                      <DialogTitle className="h3 text-white">{selectedProject.title}</DialogTitle>
                      <DialogDescription className="text-body text-white/80">
                        {selectedProject.technologies.join(" • ")}
                      </DialogDescription>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 p-6">
                  <div>
                    <h4 className="h5 mb-2">Project Overview</h4>
                    <p className="text-body">{selectedProject.fullDescription}</p>
                  </div>

                  {selectedProject.before && selectedProject.after && (
                    <div>
                      <h4 className="h5 mb-2">Transformation</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-caption mb-1 text-muted-foreground">Before</p>
                          <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                            <Image
                              src={selectedProject.before || "/placeholder.svg"}
                              alt="Before"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="text-caption mb-1 text-muted-foreground">After</p>
                          <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                            <Image
                              src={selectedProject.after || "/placeholder.svg"}
                              alt="After"
                              fill
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
