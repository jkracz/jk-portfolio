"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Victor",
    role: "Founder",
    company: "Club 1BD",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Joe's expertise in Webflow development transformed our brand. His attention to detail and commitment to delivering high-quality work exceeded our expectations.",
  },
  {
    id: 2,
    name: "Arty Furtado",
    role: "Founder",
    company: "Furtado Global",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with Joe on our Webflow site was a game-changer. His adaptive design and attention to detail exceeded our expectations.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "HealthTech Solutions",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Joe's development skills are top-notch. He delivered a cross-platform solution that our users love, on time and within budget.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 8000); // Change testimonial every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="testimonials" className="relative overflow-hidden bg-muted/30 py-16 md:py-24">
      <div className="bg-linear-to-b absolute left-0 top-0 h-32 w-full from-background to-transparent"></div>
      <div className="bg-linear-to-t absolute bottom-0 left-0 h-32 w-full from-background to-transparent"></div>
      <motion.div
        className="container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Client Testimonials</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Don't just take my word for it. Here's what my clients have to say about working with
            me.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-lg bg-card p-8 shadow-lg md:p-12"
            >
              <Quote className="absolute left-4 top-4 h-8 w-8 text-primary/20" />
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                <div className="shrink-0">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <div className="grow text-center md:text-left">
                  <p className="mb-4 text-lg italic md:text-xl">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
