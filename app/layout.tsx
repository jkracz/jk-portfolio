import type React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joekracz.com"),
  title: {
    default: "Joe Kracz | Software Engineer & Freelance Developer",
    template: "%s | Joe Kracz",
  },
  description:
    "Custom web applications, mobile apps, and digital products built for results. Specializing in React, Next.js, React Native, and full-stack development.",
  keywords: [
    "software engineer",
    "freelance developer",
    "web application development",
    "mobile app development",
    "React development",
    "Next.js developer",
    "React Native",
    "full stack developer",
    "custom web applications",
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
      "Custom web applications, mobile apps, and digital products built for results. Specializing in React, Next.js, React Native, and full-stack development.",
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
      "Custom web applications, mobile apps, and digital products built for results. Specializing in React, Next.js, React Native, and full-stack development.",
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
      <body className={`${instrumentSans.variable} ${geistMono.variable} font-body`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
