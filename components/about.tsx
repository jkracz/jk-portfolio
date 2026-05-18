"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

export function About() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-background to-transparent"></div>

      <div ref={ref} data-inview={inView} className="container">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column: text + tech grid */}
          <div>
            <div className="reveal" style={{ "--reveal-delay": 0 } as CSSProperties}>
              <h2 className="h2 mb-6">About Me</h2>
              <div className="prose max-w-none">
                <p className="text-lead mb-4">
                  I&apos;m Joe Kracz, a full-stack engineer and former product manager specializing
                  in AI-native products.
                </p>
                <p className="text-body-large mb-4">
                  I&apos;ve spent the last several years building at the intersection of product and
                  engineering, most recently as Director of Engineering at Pull Systems, where I
                  architected an AI agent platform that contributed to 3 enterprise wins in 5 months
                  and helped avoid $3M in downstream costs for one of our customers.
                </p>
                <p className="text-body-large mb-4">
                  I bring both technical depth and product intuition. I&apos;ve shipped everything
                  from LLM agent systems and sandboxed code execution layers to telematics data
                  pipelines and websites for global entertainment brands. I write the code and
                  I care about what it&apos;s for.
                </p>
                <p className="text-body-large">
                  Outside of client work I build my own products, run a lot, and am working
                  toward my second triathlon.
                </p>
              </div>
            </div>

            <div className="reveal mt-8" style={{ "--reveal-delay": 200 } as CSSProperties}>
              <a
                href="/KraczResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-underline inline-flex items-center gap-1.5 text-sm font-medium"
              >
                <span className="relative z-10">Read my full resume</span>
                <ExternalLink size={14} className="relative z-10" />
              </a>
            </div>
          </div>

          {/* Right column: image, vertically centered */}
          <div
            className="reveal flex items-center"
            style={{ "--reveal-delay": 200 } as CSSProperties}
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/joe-kracz.avif"
                alt="Joe Kracz"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                unoptimized
                className="scale-[1.01] object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
