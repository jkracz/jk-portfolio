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
    { name: "Shopify", logo: "/shopify-icon.svg?height=60&width=60" },
    { name: "Webflow", logo: "/webflow-icon.svg?height=60&width=60" },
    { name: "React", logo: "/react-icon.svg?height=60&width=60" },
    { name: "Expo", logo: "/expo-icon.svg?height=60&width=60" },
    { name: "JavaScript", logo: "/javascript-icon.svg?height=60&width=60" },
    { name: "TypeScript", logo: "/typescript-icon.svg?height=60&width=60" },
    { name: "Node.js", logo: "/nodejs-icon.svg?height=60&width=60" },
    { name: "Tailwind CSS", logo: "/tailwind-icon.svg?height=60&width=60" },
  ];

  // const milestones = [
  //   {
  //     year: '2018',
  //     title: 'Started Freelancing',
  //     description:
  //       'Began building websites for local businesses while completing my Computer Science degree.',
  //   },
  //   {
  //     year: '2019',
  //     title: 'First Major Client',
  //     description: 'Landed my first enterprise client and delivered a complex e-commerce solution.',
  //   },
  //   {
  //     year: '2021',
  //     title: 'Expanded to Mobile Development',
  //     description: 'Added React Native to my skillset and launched my first mobile application.',
  //   },
  //   {
  //     year: '2023',
  //     title: '100+ Projects Completed',
  //     description: 'Reached the milestone of completing over 100 successful client projects.',
  //   },
  // ];

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

  // const milestoneVariants = {
  //   hidden: { opacity: 0, x: -20 },
  //   visible: (i: number) => ({
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut",
  //       delay: 0.4 + i * 0.1,
  //     },
  //   }),
  // };

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
    <section id="about" className="relative overflow-hidden py-16 md:py-24">
      <div className="bg-linear-to-b absolute left-0 top-0 h-32 w-full from-muted/50 to-transparent"></div>

      <motion.div
        className="container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div variants={textVariants}>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">About Me</h2>
            <div className="prose max-w-none">
              <p className="mb-4 text-lg">
                I'm Joe Kracz, a software engineer and freelance developer specializing in
                high-performance websites and applications that deliver real business impact.
              </p>
              <p className="mb-4">
                Before transitioning into development, I spent five years as a product manager,
                where I honed my ability to bridge the gap between business needs and technical
                execution. With a Computer Science degree from NYU, I bring both strategic thinking
                and hands-on expertise to every project.
              </p>
              <p>
                I've built websites and web applications for clients ranging from small businesses
                to growing startups, helping them create digital experiences that are fast,
                scalable, and user-friendly. Whether it's an e-commerce store, a marketing site, or
                a custom web app, I focus on delivering high-quality work that meets business goals.
              </p>
            </div>

            {/* <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold">Professional Journey</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="flex"
                    variants={milestoneVariants}
                    custom={index}
                  >
                    <div className="mr-4 shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {milestone.year}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}
          </motion.div>

          <div className="space-y-8">
            <motion.div className="relative h-[400px] rounded-xl" variants={imageVariants}>
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Joe Kracz"
                  fill
                  className="object-cover"
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
                className="absolute -bottom-4 -end-4 z-10 rounded-lg bg-background/90 p-3 shadow-lg backdrop-blur-sm"
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

            <div>
              <h3 className="mb-4 text-xl font-semibold">Technologies I Work With</h3>
              <div className="grid grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div key={index} variants={techVariants} custom={index} whileHover="hover">
                    <Card className="shadow-2xs backdrop-blur-xs border-none bg-card/50 transition-all duration-300 hover:shadow-md">
                      <CardContent className="flex flex-col items-center justify-center p-4">
                        <Image
                          src={tech.logo || "/placeholder.svg"}
                          alt={tech.name}
                          width={40}
                          height={40}
                          className="mb-2"
                        />
                        <span className="text-sm">{tech.name}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
