"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function Hero() {
  const [text] = useTypewriter({
    words: ["Websites", "Online Stores", "Mobile Apps"],
    loop: true,
    delaySpeed: 2000,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8 + custom * 0.1,
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const gradientVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-40 lg:pb-32 lg:pt-48">
      <motion.div
        className="absolute inset-0 -z-10"
        variants={gradientVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="absolute start-1/4 top-20 size-72 rounded-full bg-primary/20 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-20 end-1/4 size-80 rounded-full bg-secondary/30 opacity-40 blur-3xl"></div>
      </motion.div>

      <div className="container grid items-center gap-8 md:grid-cols-2">
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            <span className="text-primary">{text}</span>
            <Cursor cursorStyle="_" />
            <br />
            Built for Results.
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground" variants={itemVariants}>
            Helping businesses launch, grow, and scale with high-quality development.
          </motion.p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.div variants={buttonVariants} custom={0} whileHover="hover" whileTap="tap">
              <Button
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Get an Estimate</span>
                <span className="inset-block-0 inset-inline-0 absolute h-full w-0 bg-white/20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} custom={1} whileHover="hover" whileTap="tap">
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("portfolio")}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <span className="inset-block-0 inset-inline-0 absolute h-full w-0 bg-primary/10 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="relative h-[300px] md:h-[400px] lg:h-[500px]"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Developer workspace"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -end-6 size-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -start-6 -top-6 size-48 rounded-full bg-secondary/20 blur-3xl"></div>

          {/* Floating elements */}
          <motion.div
            className="backdrop-blur-xs absolute -start-4 -top-4 rounded-lg bg-background/90 p-3 shadow-lg"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">Webflow Creator</span>
            </div>
          </motion.div>

          <motion.div
            className="backdrop-blur-xs absolute -bottom-4 -end-4 rounded-lg bg-background/90 p-3 shadow-lg"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          >
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-blue-500"></div>
              <span className="text-sm font-medium">React Developer</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
