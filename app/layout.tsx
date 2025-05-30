import type React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://joekracz.com"),
  title: {
    default: "Joe Kracz | Freelance Developer",
    template: "%s | Joe Kracz",
  },
  description:
    "Websites, Online Stores, and Mobile Apps Built for Results. Specializing in Shopify, Webflow, React, and React Native development.",
  keywords: [
    "freelance developer",
    "web development",
    "mobile app development",
    "Shopify development",
    "Webflow development",
    "React development",
    "React Native",
    "full stack developer",
    "custom web solutions",
    "e-commerce development",
  ],
  authors: [{ name: "Joe Kracz" }],
  creator: "Joe Kracz",
  publisher: "Joe Kracz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joekracz.com",
    siteName: "Joe Kracz | Freelance Developer",
    title: "Joe Kracz | Freelance Developer",
    description:
      "Websites, Online Stores, and Mobile Apps Built for Results. Specializing in Shopify, Webflow, React, and React Native development.",
    images: [
      {
        url: "/og-image.avif",
        width: 1200,
        height: 630,
        alt: "Joe Kracz - Freelance Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Kracz | Freelance Developer",
    description:
      "Websites, Online Stores, and Mobile Apps Built for Results. Specializing in Shopify, Webflow, React, and React Native development.",
    images: ["/og-image.avif"],
    creator: "@joeykracz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://joekracz.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ID ?? ""} />
    </html>
  );
}

import "./globals.css";
