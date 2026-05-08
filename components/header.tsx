"use client";

import { useState, useEffect, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { id: "portfolio", label: "Portfolio" },
  { id: "how-i-work", label: "How I work" },
  { id: "about", label: "About" },
];

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

  const themeLabel = mounted
    ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`
    : "Toggle theme";

  const themeIcon = mounted ? (
    resolvedTheme === "dark" ? (
      <Sun size={18} />
    ) : (
      <Moon size={18} />
    )
  ) : (
    <span aria-hidden="true" className="block h-[18px] w-[18px]" />
  );

  return (
    <header
      className={`enter fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "backdrop-blur-xs shadow-2xs bg-background/95" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group relative">
          <Image
            src="/logoLight.png"
            alt="JK"
            width={54}
            height={40}
            style={{ height: "auto" }}
            className="block rounded-lg transition-[filter] duration-200 group-hover:brightness-110 dark:hidden"
            priority
          />
          <Image
            src="/logoDark.png"
            alt="JK"
            width={54}
            height={40}
            style={{ height: "auto" }}
            className="hidden rounded-lg transition-[filter] duration-200 group-hover:brightness-110 dark:block"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="enter animated-underline text-body-small font-medium"
              style={{ "--reveal-delay": 200 + i * 80 } as CSSProperties}
            >
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
          <span
            className="enter"
            style={{ "--reveal-delay": 200 + navItems.length * 80 } as CSSProperties}
          >
            <Button onClick={() => scrollToSection("contact")} variant="default" size="sm">
              Contact me
            </Button>
          </span>
          <button
            onClick={toggleTheme}
            className="enter rounded-full bg-muted/50 p-2 transition-[background-color,transform] duration-200 hover:rotate-12 hover:bg-muted"
            style={
              { "--reveal-delay": 200 + (navItems.length + 1) * 80 } as CSSProperties
            }
            aria-label={themeLabel}
          >
            {themeIcon}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full bg-muted/50 p-2 transition-colors duration-200 hover:bg-muted"
            aria-label={themeLabel}
          >
            {themeIcon}
          </button>
          <button
            className="p-2 transition-transform duration-150 active:scale-90"
            onClick={() => setIsMobileMenuOpen(open => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — grid-rows trick for animated height auto */}
      <div
        id="mobile-menu"
        className="expand backdrop-blur-xs shadow-2xs bg-background/95 md:hidden"
        data-open={isMobileMenuOpen}
        aria-hidden={!isMobileMenuOpen}
      >
        <div>
          <div className="container flex flex-col gap-4 py-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-body py-2 text-left font-medium transition-colors hover:text-primary"
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              size="sm"
              className="w-full"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
