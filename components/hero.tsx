"use client";

import { Button } from "@/components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden pb-16 pt-24 md:min-h-[82vh] md:pb-20 md:pt-32 lg:pt-36">
      <div className="container mx-auto grid w-full items-center gap-12 md:grid-cols-[3fr_2fr] md:gap-16 lg:gap-20">
        {/* Type column (60%) */}
        <div className="flex flex-col gap-7 md:gap-8">
          <h1
            className="enter font-heading text-5xl font-bold leading-[1.05] tracking-[-0.025em] md:text-6xl lg:text-7xl"
            style={{ ["--reveal-delay" as string]: 200 }}
          >
            AI systems.
            <br />
            Production code.
            <br />
            Shipped product.
          </h1>

          <p
            className="enter max-w-[58ch] text-lg leading-relaxed text-muted-foreground md:text-xl"
            style={{ ["--reveal-delay" as string]: 320 }}
          >
            I help teams move from prototype to production, across the stack and into the hands of
            users.
          </p>

          <div
            className="enter flex flex-wrap items-center gap-x-7 gap-y-3"
            style={{ ["--reveal-delay" as string]: 440 }}
          >
            <Button size="lg" onClick={() => scrollToSection("contact")} className="px-7">
              Get in touch
            </Button>
            <button
              type="button"
              onClick={() => scrollToSection("portfolio")}
              className="animated-underline text-base font-medium"
            >
              <span className="relative z-10">See my work</span>
            </button>
          </div>
        </div>

        {/* Lottie column (40%) — single soft Cobalt circle behind, no other atmosphere. */}
        <div
          className="enter relative flex h-[320px] w-full items-center justify-center md:h-[420px] lg:h-[480px]"
          style={{ ["--reveal-delay" as string]: 450 }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-6 size-[22rem] rounded-full bg-primary/15 blur-3xl md:size-[26rem]"
          />

          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <DotLottieReact
              src="/freelancer.lottie"
              loop
              autoplay
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "none",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
