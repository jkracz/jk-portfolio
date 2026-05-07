"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function About() {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 },
    },
  } as const;

  return (
    <section id="about" className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-background to-transparent"></div>

      <motion.div
        className="container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column: text + tech grid */}
          <div>
            <motion.div variants={textVariants}>
              <h2 className="h2 mb-6">About Me</h2>
              <div className="prose max-w-none">
                <p className="text-lead mb-4">
                  I'm Joe Kracz, a software engineer, engineering leader, and builder. I love
                  turning ideas into real products that people use.
                </p>
                <p className="text-body-large mb-4">
                  I have spent my career building software across the stack, from leading
                  engineering teams and architecting systems to shipping production code myself. I
                  bring both the technical depth and the product intuition to make the right
                  tradeoffs.
                </p>
              </div>
            </motion.div>

            <motion.div className="mt-8" variants={textVariants}>
              <a
                href="/KraczResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-underline inline-flex items-center gap-1.5 text-sm font-medium"
              >
                <span className="relative z-10">Read my full resume</span>
                <ExternalLink size={14} className="relative z-10" />
              </a>
            </motion.div>
          </div>

          {/* Right column: image, vertically centered */}
          <motion.div className="flex items-center" variants={imageVariants}>
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/joe-kracz.avif"
                alt="Joe Kracz"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                unoptimized
                className="scale-[1.01] object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
