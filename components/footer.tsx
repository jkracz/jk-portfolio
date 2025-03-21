"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "hsl(var(--primary))",
      transition: { duration: 0.2 },
    },
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      color: "hsl(var(--primary))",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.footer
      className="relative overflow-hidden border-t py-8 md:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl filter"></div>
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-secondary/5 blur-3xl filter"></div>

      <div className="container relative">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.div className="mb-4 md:mb-0" variants={itemVariants}>
            <Link href="/" className="text-xl font-bold">
              Joe Kracz
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Websites, Web Apps, and Mobile Apps Built for Results
            </p>
          </motion.div>

          <motion.nav className="mb-4 flex gap-8 md:mb-0" variants={itemVariants}>
            {["services", "portfolio", "contact"].map(item => (
              <motion.div key={item} whileHover="hover" variants={linkVariants}>
                <Link
                  href={`#${item}`}
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm capitalize transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div className="flex space-x-4" variants={itemVariants}>
            {[
              {
                icon: <Github className="h-5 w-5" />,
                label: "GitHub",
                href: "https://github.com/jkracz",
              },
              {
                icon: <Linkedin className="h-5 w-5" />,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/joe-kracz-219829119/",
              },
              {
                icon: <Twitter className="h-5 w-5" />,
                label: "Twitter",
                href: "https://x.com/joey_kracz",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
                whileHover="hover"
                variants={socialVariants}
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground"
          variants={itemVariants}
        >
          <p>© {currentYear} Joe Kracz. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
