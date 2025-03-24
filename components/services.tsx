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
        "Custom Shopify stores that convert visitors into customers with seamless checkout experiences.",
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      color: "from-blue-500/20 to-blue-600/5",
      delay: 0.1,
    },
    {
      title: "Webflow Development",
      description:
        "Stunning, responsive websites built with Webflow that are easy to update and maintain.",
      icon: <Layers className="h-10 w-10 text-primary" />,
      color: "from-purple-500/20 to-purple-600/5",
      delay: 0.2,
    },
    {
      title: "React Development",
      description:
        "Fast, interactive web applications built with React that provide exceptional user experiences.",
      icon: <Code className="h-10 w-10 text-primary" />,
      color: "from-primary/20 to-primary/5",
      delay: 0.3,
    },
    {
      title: "React Native Development",
      description:
        "Cross-platform mobile apps that work seamlessly on both iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      color: "from-green-500/20 to-green-600/5",
      delay: 0.4,
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2 + i * 0.15,
      },
    }),
    hover: {
      y: -15,
      scale: 1.05,
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
    hover: {
      rotate: [0, -10, 10, -5, 5, 0],
      transition: { duration: 0.6 },
    },
  };

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
        <motion.div className="mx-auto mb-16 max-w-3xl text-center" variants={headerVariants}>
          <h2 className="h2 mb-4">Services & Expertise</h2>
          <p className="text-lead text-muted-foreground">
            I deliver fast, high-quality development with solutions tailored to your specific
            business needs. My focus is on creating products that drive real results.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card
                className={`h-full border-none bg-gradient-to-br shadow-lg ${service.color} group relative overflow-hidden transition-all duration-500 hover:shadow-xl`}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/10 blur-xl"></div>
                </div>

                <CardHeader className="relative z-10">
                  <motion.div
                    className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-background/80 backdrop-blur-sm"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="relative">{service.icon}</div>
                  </motion.div>
                  <CardTitle className="h5 transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-body-small">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
