import type React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joekracz.com"),
  title: {
    default: "Joe Kracz | Software Engineer & Engineering Leader",
    template: "%s | Joe Kracz",
  },
  description:
    "Senior software engineer and engineering leader. I lead teams, architect systems, and ship production code. Open to full-time, fractional, and project work.",
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
    siteName: "Joe Kracz",
    title: "Joe Kracz | Software Engineer & Engineering Leader",
    description:
      "Senior software engineer and engineering leader. I lead teams, architect systems, and ship production code. Open to full-time, fractional, and project work.",
    images: [
      {
        url: "/og-image.avif",
        width: 1200,
        height: 630,
        alt: "Joe Kracz - software engineer and engineering leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Kracz | Software Engineer & Engineering Leader",
    description:
      "Senior software engineer and engineering leader. I lead teams, architect systems, and ship production code. Open to full-time, fractional, and project work.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap"
        />
      </head>
      <body className={`${geistMono.variable} font-body`}>
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
