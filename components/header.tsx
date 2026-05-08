"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { id: "portfolio", label: "Portfolio" },
    { id: "how-i-work", label: "How I work" },
    { id: "about", label: "About" },
  ];

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
        <Link href="/" className="group relative">
          <Image
            src="/logoLight.png"
            alt="JK"
            width={54}
            height={40}
            style={{ height: "auto" }}
            className="block rounded-lg transition-all duration-300 group-hover:brightness-110 dark:hidden"
            priority
          />
          <Image
            src="/logoDark.png"
            alt="JK"
            width={54}
            height={40}
            style={{ height: "auto" }}
            className="hidden rounded-lg transition-all duration-300 group-hover:brightness-110 dark:block"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="animated-underline text-body-small font-medium"
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          ))}
          <motion.div custom={5} variants={navItemVariants} initial="hidden" animate="visible">
            <Button onClick={() => scrollToSection("contact")} variant="default" size="sm">
              Contact me
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
            aria-label={
              mounted
                ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`
                : "Toggle theme"
            }
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )
            ) : (
              <span aria-hidden="true" className="block h-[18px] w-[18px]" />
            )}
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full bg-muted/50 p-2 transition-colors hover:bg-muted"
            aria-label={
              mounted
                ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`
                : "Toggle theme"
            }
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )
            ) : (
              <span aria-hidden="true" className="block h-[18px] w-[18px]" />
            )}
          </button>
          <motion.button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(open => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
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
            id="mobile-menu"
            className="backdrop-blur-xs shadow-2xs overflow-hidden bg-background/95 md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-body py-2 font-medium transition-colors hover:text-primary"
                  variants={mobileNavItemVariants}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div variants={mobileNavItemVariants}>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="default"
                  size="sm"
                  className="w-full"
                >
                  Contact me
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
