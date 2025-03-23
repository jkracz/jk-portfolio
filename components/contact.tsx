"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Twitter, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
        access_key: "a8f35a93-f6aa-4139-8242-fe11ff0ab441",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `Contact form submission from ${formData.name}`,
      }),
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
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

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
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
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5 + i * 0.1,
      },
    }),
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
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
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Get in touch and let's discuss how I can help bring your vision
            to life.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <motion.div variants={contentVariants} custom={0}>
            <h3 className="mb-4 text-xl font-semibold">Get in Touch</h3>
            <p className="mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </p>

            <div className="space-y-6">
              <div className="group">
                <h4 className="mb-1 font-medium transition-colors group-hover:text-primary">
                  Email
                </h4>
                <p className="text-muted-foreground transition-colors group-hover:text-foreground">
                  hello@joekracz.com
                </p>
              </div>

              <div className="group">
                <h4 className="mb-1 font-medium transition-colors group-hover:text-primary">
                  Location
                </h4>
                <p className="text-muted-foreground transition-colors group-hover:text-foreground">
                  San Francisco, CA
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Social Media</h4>
                <div className="mt-2 flex space-x-4">
                  <motion.a
                    href="https://github.com/jkracz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 transition-colors hover:bg-primary/10 hover:text-primary"
                    variants={socialVariants}
                    custom={0}
                    whileHover="hover"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/joe-kracz-219829119/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 transition-colors hover:bg-primary/10 hover:text-primary"
                    variants={socialVariants}
                    custom={1}
                    whileHover="hover"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://x.com/joey_kracz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 transition-colors hover:bg-primary/10 hover:text-primary"
                    variants={socialVariants}
                    custom={2}
                    whileHover="hover"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={contentVariants} custom={1}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="transition-all duration-300 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="transition-all duration-300 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="transition-all duration-300 focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="group relative w-full overflow-hidden"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-white/20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Button>
              </form>
            ) : (
              <motion.div
                className="flex h-full flex-col items-center justify-center rounded-lg bg-primary/10 p-8 text-center"
                variants={successVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Message Sent!</h3>
                <p className="mb-4">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
