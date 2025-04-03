"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { name: "Shopify", logo: "/technology-icons/shopify-icon.svg?height=60&width=60" },
    { name: "Webflow", logo: "/technology-icons/webflow-icon.svg?height=60&width=60" },
    { name: "React", logo: "/technology-icons/react-icon.svg?height=60&width=60" },
    { name: "Expo", logo: "/technology-icons/expo-icon.svg?height=60&width=60" },
    { name: "JavaScript", logo: "/technology-icons/javascript-icon.svg?height=60&width=60" },
    { name: "TypeScript", logo: "/technology-icons/typescript-icon.svg?height=60&width=60" },
    { name: "Node.js", logo: "/technology-icons/nodejs-icon.svg?height=60&width=60" },
    { name: "Tailwind CSS", logo: "/technology-icons/tailwind-icon.svg?height=60&width=60" },
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4 + i * 0.05,
      },
    }),
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

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
          <motion.div variants={textVariants}>
            <h2 className="h2 mb-6">About Me</h2>
            <div className="prose max-w-none">
              <p className="text-lead mb-4">
                I'm Joe Kracz, a software engineer and freelance developer specializing in
                high-performance websites and applications that deliver real business impact.
              </p>
              <p className="text-body-large mb-4">
                Before transitioning into development, I spent five years as a product manager,
                where I honed my ability to bridge the gap between business needs and technical
                execution. With a Computer Science degree from NYU, I bring both strategic thinking
                and hands-on expertise to every project.
              </p>
              <p className="text-body-large mb-4">
                I've built websites and web applications for clients ranging from small businesses
                to growing startups, helping them create digital experiences that are fast,
                scalable, and user-friendly. Whether it's an e-commerce store, a marketing site, or
                a custom web app, I focus on delivering high-quality work that meets business goals.
              </p>
            </div>
          </motion.div>

          <motion.div className="relative h-[500px] rounded-xl" variants={imageVariants}>
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <Image
                src="/joe-kracz.avif"
                alt="Joe Kracz"
                fill
                className="object-cover object-[center_20%]"
              />
              <div className="bg-linear-to-t absolute inset-0 from-black/30 to-transparent"></div>
            </div>

            <motion.div
              className="absolute -start-4 -top-4 z-10 rounded-lg bg-background/90 p-3 shadow-lg backdrop-blur-sm"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-green-500"></div>
                <span className="text-caption font-medium">Webflow Creator</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -end-4 z-10 rounded-lg bg-background/90 p-3 shadow-lg backdrop-blur-sm"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-blue-500"></div>
                <span className="text-caption font-medium">React Developer</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12">
          <h3 className="h4 mb-4">Technologies I Work With</h3>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
            {technologies.map((tech, index) => (
              <motion.div key={index} variants={techVariants} custom={index} whileHover="hover">
                <Card className="shadow-2xs backdrop-blur-xs h-full border-none bg-card/50 transition-all duration-300 hover:shadow-md">
                  <CardContent className="flex h-full flex-col items-center justify-center p-4">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center">
                      <Image
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="text-caption">{tech.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
