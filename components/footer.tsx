"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    e.preventDefault();
    element.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${id}`);
    }
  };

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

  return (
    <motion.footer
      className="relative border-t bg-muted/40 py-10 md:py-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
          <motion.div variants={itemVariants}>
            <Link href="/" className="font-heading text-xl font-semibold tracking-tight">
              Joe Kracz
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Senior engineer. Open to roles, fractional, and project work.
            </p>
          </motion.div>

          <motion.nav
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2"
            variants={itemVariants}
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
          </motion.nav>

          <motion.div className="flex items-center gap-5" variants={itemVariants}>
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
          </motion.div>
        </div>

        <motion.div
          className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground"
          variants={itemVariants}
        >
          <p>© {currentYear} Joe Kracz</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
