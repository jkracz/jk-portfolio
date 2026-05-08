"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
