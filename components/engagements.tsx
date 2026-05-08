"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { EngagementMode } from "@/types/content";

type EngagementsProps = {
  modes: EngagementMode[];
};

export function Engagements({ modes }: EngagementsProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
    },
  };

  const colVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0, 0, 0.2, 1], delay: 0.15 + i * 0.1 },
    }),
  };

  return (
    <section id="how-i-work" className="relative py-16 md:py-24">
      <div ref={ref} className="container">
        <motion.div
          className="mb-12 max-w-3xl md:mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="h2 mb-4">How I work</h2>
          <p className="text-lead text-muted-foreground">
            Three ways to work together. Pick the one that fits.
          </p>
        </motion.div>

        {/* Grid: stacks on tablet and mobile (single column), spreads to 3 columns at lg+
            so the mono body has room to breathe. Vertical Cobalt rules appear only on
            desktop, between (not around) columns. No backgrounds, no borders around
            columns — newspaper spread, not card grid. */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-14 lg:grid-cols-3 lg:gap-x-0">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.slug}
              custom={i}
              variants={colVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`relative px-0 lg:px-10 ${
                i > 0 ? "lg:border-l lg:border-primary/30" : ""
              }`}
            >
              <p className="mb-5 font-mono text-xs tracking-[0.25em] text-muted-foreground">
                {mode.number}
              </p>
              <h3 className="mb-5 font-heading text-2xl font-semibold leading-tight tracking-tight md:text-[1.75rem]">
                {mode.label}
              </h3>
              <p className="mb-5 text-base leading-relaxed text-foreground">{mode.lead}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{mode.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
