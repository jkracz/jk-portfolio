"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { name: "React", logo: "/technology-icons/react-icon.svg?height=60&width=60" },
    { name: "TypeScript", logo: "/technology-icons/typescript-icon.svg?height=60&width=60" },
    { name: "Node.js", logo: "/technology-icons/nodejs-icon.svg?height=60&width=60" },
    { name: "Expo", logo: "/technology-icons/expo-icon.svg?height=60&width=60" },
    { name: "Tailwind CSS", logo: "/technology-icons/tailwind-icon.svg?height=60&width=60" },
    { name: "JavaScript", logo: "/technology-icons/javascript-icon.svg?height=60&width=60" },
    { name: "Shopify", logo: "/technology-icons/shopify-icon.svg?height=60&width=60" },
    { name: "Webflow", logo: "/technology-icons/webflow-icon.svg?height=60&width=60" },
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

  const techVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        delay: 0.4 + i * 0.05,
      },
    }),
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
                <p className="text-body-large mb-4">
                  Whether it's a custom web application, a mobile app, an e-commerce store, or a
                  marketing site, I pick the right tool for the job and build it well. The
                  technology serves the goal, not the other way around.
                </p>
              </div>
            </motion.div>

            <motion.div className="mt-10" variants={textVariants}>
              <h3 className="mb-5 text-lg font-semibold">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    custom={index}
                    variants={techVariants}
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                      <Image
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        width={36}
                        height={36}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground/60 transition-colors duration-300 group-hover:text-muted-foreground">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
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
