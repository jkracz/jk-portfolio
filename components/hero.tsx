"use client";

import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0, 0, 0.2, 1] },
    },
  };

  const lottieVariants: Variants = {
    hidden: { scale: 0.94, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: [0, 0, 0.2, 1], delay: 0.25 },
    },
  };

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden pb-16 pt-24 md:min-h-[82vh] md:pb-20 md:pt-32 lg:pt-36">
      <div className="container mx-auto grid w-full items-center gap-12 md:grid-cols-[3fr_2fr] md:gap-16 lg:gap-20">
        {/* Type column (60%) */}
        <motion.div
          className="flex flex-col gap-7 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-heading text-5xl font-bold leading-[1.05] tracking-[-0.025em] md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            I lead, build,
            <br />
            and ship product.
          </motion.h1>

          <motion.p
            className="max-w-[58ch] text-lg leading-relaxed text-muted-foreground md:text-xl"
            variants={itemVariants}
          >
            Senior software engineer and engineering leader. Open to full-time, fractional, and
            project work.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-x-7 gap-y-3"
            variants={itemVariants}
          >
            <Button size="lg" onClick={() => scrollToSection("contact")} className="px-7">
              Get in touch
            </Button>
            <button
              type="button"
              onClick={() => scrollToSection("portfolio")}
              className="animated-underline text-base font-medium"
            >
              <span className="relative z-10">See my work</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Lottie column (40%) — single soft Cobalt circle behind, no other atmosphere. */}
        <motion.div
          className="relative flex h-[320px] w-full items-center justify-center md:h-[420px] lg:h-[480px]"
          variants={lottieVariants}
          initial="hidden"
          animate="visible"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-6 size-[22rem] rounded-full bg-primary/15 blur-3xl md:size-[26rem]"
          />

          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <DotLottieReact
              src="/freelancer.lottie"
              loop
              autoplay
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "none",
                objectFit: "contain",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
