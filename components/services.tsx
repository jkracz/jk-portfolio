"use client";

import type React from "react";

import { ShoppingBag, Layers, Code, Smartphone, Globe, Terminal } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ServiceIcon, ServiceItem } from "@/types/content";

type ServicesProps = {
  services: ServiceItem[];
};

const iconMap: Record<ServiceIcon, (cls: string) => React.ReactNode> = {
  "shopping-bag": (cls) => <ShoppingBag className={cls} />,
  layers: (cls) => <Layers className={cls} />,
  code: (cls) => <Code className={cls} />,
  smartphone: (cls) => <Smartphone className={cls} />,
  globe: (cls) => <Globe className={cls} />,
  terminal: (cls) => <Terminal className={cls} />,
};

type CardVisual = {
  orb: string;
  orbPos: string;
  icon: string;
  hoverBorder: string;
  hoverShadow: string;
};

const visualsByColor: Record<string, CardVisual> = {
  "from-primary/20 to-primary/5": {
    orb: "bg-blue-500/15 dark:bg-blue-400/20",
    orbPos: "-top-20 -right-20",
    icon: "text-blue-500 dark:text-blue-400",
    hoverBorder: "hover:border-blue-500/25 dark:hover:border-blue-400/30",
    hoverShadow: "hover:shadow-[0_8px_40px_-8px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_8px_40px_-8px_rgba(96,165,250,0.25)]",
  },
  "from-green-500/20 to-green-600/5": {
    orb: "bg-emerald-500/15 dark:bg-emerald-400/20",
    orbPos: "-bottom-20 -left-20",
    icon: "text-emerald-500 dark:text-emerald-400",
    hoverBorder: "hover:border-emerald-500/25 dark:hover:border-emerald-400/30",
    hoverShadow: "hover:shadow-[0_8px_40px_-8px_rgba(16,185,129,0.2)] dark:hover:shadow-[0_8px_40px_-8px_rgba(52,211,153,0.25)]",
  },
  "from-amber-500/20 to-amber-600/5": {
    orb: "bg-amber-500/15 dark:bg-amber-400/20",
    orbPos: "-top-20 -left-20",
    icon: "text-amber-500 dark:text-amber-400",
    hoverBorder: "hover:border-amber-500/25 dark:hover:border-amber-400/30",
    hoverShadow: "hover:shadow-[0_8px_40px_-8px_rgba(245,158,11,0.2)] dark:hover:shadow-[0_8px_40px_-8px_rgba(251,191,36,0.25)]",
  },
  "from-purple-500/20 to-purple-600/5": {
    orb: "bg-violet-500/15 dark:bg-violet-400/20",
    orbPos: "-bottom-20 -right-20",
    icon: "text-violet-500 dark:text-violet-400",
    hoverBorder: "hover:border-violet-500/25 dark:hover:border-violet-400/30",
    hoverShadow: "hover:shadow-[0_8px_40px_-8px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_8px_40px_-8px_rgba(167,139,250,0.25)]",
  },
};

const defaultVisual: CardVisual = {
  orb: "bg-primary/15",
  orbPos: "-top-20 -right-20",
  icon: "text-primary",
  hoverBorder: "hover:border-primary/25",
  hoverShadow: "hover:shadow-lg",
};

export function Services({ services }: ServicesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.15 + i * 0.1,
      },
    }),
  } as const;

  return (
    <section id="services" className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
      <div className="absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-background to-transparent"></div>

      <motion.div
        className="container relative z-10"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="mx-auto mb-14 max-w-2xl text-center" variants={headerVariants}>
          <h2 className="h2 mb-4">What I Build</h2>
          <p className="text-lead text-muted-foreground">
            I pick the right tool for the job, whether that's a custom-coded application or a
            CMS-powered site, and build it to last.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {services.map((service, index) => {
            const v = visualsByColor[service.color] || defaultVisual;

            return (
              <motion.div
                key={service.slug}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                className="group relative"
              >
                {/* Glow orb */}
                <div
                  className={`pointer-events-none absolute h-44 w-44 rounded-full blur-3xl transition-all duration-700 ease-out ${v.orb} ${v.orbPos} opacity-50 group-hover:scale-125 group-hover:opacity-80`}
                />

                {/* Card surface */}
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/70 p-7 backdrop-blur-xl transition-all duration-500 sm:p-8 ${v.hoverBorder} ${v.hoverShadow}`}
                >
                  <div className="relative z-10 flex h-full flex-col gap-5">
                    {/* Icon */}
                    {iconMap[service.icon]?.(`h-8 w-8 ${v.icon}`)}

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-semibold tracking-tight sm:text-xl">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>

                    {/* Tech stack */}
                    {service.features && (
                      <p className="text-xs tracking-wide text-muted-foreground/50">
                        {service.features.join(" · ")}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
