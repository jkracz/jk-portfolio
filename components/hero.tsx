"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-12 pt-16 md:pb-20 md:pt-24 lg:pb-24 lg:pt-28">
      <motion.div
        className="absolute inset-0 -z-10"
        variants={gradientVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="absolute start-1/4 top-20 size-96 rounded-full bg-primary/20 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-20 end-1/4 size-96 rounded-full bg-secondary/30 opacity-40 blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto grid w-full items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          className="flex flex-col gap-8 md:pr-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="h1" variants={itemVariants}>
            <span className="text-primary">{text}</span>
            <Cursor cursorStyle="_" />
            <br />
            Built for Results.
          </motion.h1>
          <motion.p className="text-lead text-muted-foreground" variants={itemVariants}>
            Helping businesses launch, grow, and scale with high-quality development.
          </motion.p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.div variants={buttonVariants} custom={0} whileHover="hover" whileTap="tap">
              <Button
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="group relative overflow-hidden px-8 py-6 text-lg"
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
                className="group relative overflow-hidden px-8 py-6 text-lg"
              >
                <span className="relative z-10">View My Work</span>
                <span className="inset-block-0 inset-inline-0 absolute h-full w-0 bg-primary/10 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="relative flex h-[400px] w-full items-center justify-center md:h-[500px] lg:h-[600px]"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute bottom-1/2 right-1/2 size-96 translate-x-[40%] translate-y-[30%] rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute left-1/2 top-1/2 size-96 -translate-x-[60%] -translate-y-[40%] rounded-full bg-secondary/20 blur-3xl"></div>
          </div>

          <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl">
            <div className="flex h-full w-full items-center justify-center">
              <DotLottieReact
                src="/freelancer.lottie"
                loop
                autoplay
                style={{
                  width: "150%",
                  height: "150%",
                  maxWidth: "none",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
