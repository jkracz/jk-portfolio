"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const mobileNavItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      x: -20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xs shadow-2xs bg-background/95" : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group relative text-xl font-bold">
          <span className="relative z-10 bg-gradient-to-r from-primary via-blue-500 to-violet-500 bg-clip-text text-2xl text-transparent">
            Joe Kracz
          </span>
          <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-blue-500 to-violet-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {["services", "portfolio", "pricing", "about"].map((item, i) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="animated-underline text-body-small font-medium"
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 capitalize">{item}</span>
            </motion.button>
          ))}
          <motion.div custom={5} variants={navItemVariants} initial="hidden" animate="visible">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              size="sm"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-background opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
            </Button>
          </motion.div>
          <motion.button
            onClick={toggleTheme}
            className="rounded-full bg-muted/50 p-2 transition-colors hover:bg-muted"
            custom={6}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ rotate: 15 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full bg-muted/50 p-2 transition-colors hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <motion.button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="backdrop-blur-xs shadow-2xs overflow-hidden bg-background/95 md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container flex flex-col gap-4 py-4">
              {["services", "portfolio", "pricing", "about"].map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-body py-2 font-medium capitalize transition-colors hover:text-primary"
                  variants={mobileNavItemVariants}
                >
                  {item}
                </motion.button>
              ))}
              <motion.div variants={mobileNavItemVariants}>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="default"
                  size="sm"
                  className="w-full"
                >
                  Contact Me
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
