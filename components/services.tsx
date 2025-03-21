"use client";

import { ShoppingBag, Layers, Code, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Shopify Development",
      description:
        "Shopify stores that convert visitors into customers with seamless checkout experiences.",
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
    },
    {
      title: "Webflow Development",
      description:
        "Stunning, responsive websites built with Webflow that are easy to update and maintain.",
      icon: <Layers className="h-10 w-10 text-primary" />,
    },
    {
      title: "React Development",
      description:
        "Fast, interactive web applications built with React that provide exceptional user experiences.",
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      title: "React Native Development",
      description:
        "Cross-platform mobile apps built with Expo that work seamlessly on both iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2 + i * 0.1,
      },
    }),
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -30 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <section id="services" className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
      <div className="bg-linear-to-b absolute left-0 top-0 h-32 w-full from-background to-transparent"></div>
      <div className="bg-linear-to-t absolute bottom-0 left-0 h-32 w-full from-background to-transparent"></div>

      <motion.div
        className="container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="mx-auto mb-12 max-w-3xl text-center" variants={headerVariants}>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Services & Expertise</h2>
          <p className="text-lg text-muted-foreground">
            I deliver fast, high-quality development with solutions tailored to your specific
            business needs. My focus is on creating products that drive real results.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div key={index} custom={index} variants={cardVariants} whileHover="hover">
              <Card className="backdrop-blur-xs group h-full overflow-hidden border-none bg-background/50 shadow-md transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <motion.div className="relative mb-2" variants={iconVariants}>
                    <div className="absolute -inset-1 rounded-full bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="relative">{service.icon}</div>
                  </motion.div>
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
