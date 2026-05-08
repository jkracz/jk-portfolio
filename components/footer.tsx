"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useInView } from "@/lib/hooks/use-in-view";

const navItems = [
  { id: "portfolio", label: "Portfolio" },
  { id: "how-i-work", label: "How I work" },
  { id: "contact", label: "Contact" },
];

const socials = [
  {
    icon: <FaGithub className="h-5 w-5" />,
    label: "GitHub",
    href: "https://github.com/jkracz",
  },
  {
    icon: <FaLinkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joe-kracz-219829119/",
  },
  {
    icon: <FaXTwitter className="h-5 w-5" />,
    label: "X (Twitter)",
    href: "https://x.com/joey_kracz",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    e.preventDefault();
    element.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <footer
      ref={ref}
      data-inview={inView}
      className="relative border-t bg-muted/40 py-10 md:py-14"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
          <div className="reveal" style={{ "--reveal-delay": 0 } as CSSProperties}>
            <Link href="/" className="font-heading text-xl font-semibold tracking-tight">
              Joe Kracz
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Senior engineer. Open to roles, fractional, and project work.
            </p>
          </div>

          <nav
            className="reveal flex flex-wrap items-center justify-center gap-x-7 gap-y-2"
            style={{ "--reveal-delay": 100 } as CSSProperties}
            aria-label="Footer"
          >
            {navItems.map(item => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={e => handleNavClick(e, item.id)}
                className="animated-underline text-sm font-medium"
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
            <a
              href="/KraczResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-underline text-sm font-medium"
            >
              <span className="relative z-10">Resume</span>
            </a>
          </nav>

          <div
            className="reveal flex items-center gap-5"
            style={{ "--reveal-delay": 200 } as CSSProperties}
          >
            {socials.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div
          className="reveal mt-10 border-t pt-6 text-center text-xs text-muted-foreground"
          style={{ "--reveal-delay": 300 } as CSSProperties}
        >
          <p>© {currentYear} Joe Kracz</p>
        </div>
      </div>
    </footer>
  );
}
