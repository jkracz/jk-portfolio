import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";

// Dynamic imports with loading states and priorities
const DynamicServices = dynamic(() => import("@/components/services").then(mod => mod.Services), {
  loading: () => (
    <div className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl animate-pulse space-y-4 text-center">
          <div className="h-12 w-48 rounded bg-muted"></div>
          <div className="h-20 rounded bg-muted"></div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-64 animate-pulse rounded-xl bg-muted"></div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: true, // Priority 1
});

const DynamicPortfolio = dynamic(
  () => import("@/components/portfolio").then(mod => mod.Portfolio),
  {
    loading: () => (
      <div className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl animate-pulse space-y-4 text-center">
            <div className="h-12 w-48 rounded bg-muted"></div>
            <div className="h-24 rounded bg-muted"></div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[1, 2].map(i => (
              <div key={i} className="h-64 animate-pulse rounded-xl bg-muted"></div>
            ))}
          </div>
        </div>
      </div>
    ),
    ssr: true, // Priority 2
  }
);

const DynamicPricingCalculator = dynamic(
  () => import("@/components/pricing-calculator").then(mod => mod.PricingCalculator),
  {
    loading: () => (
      <div className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl animate-pulse space-y-4 text-center">
            <div className="h-12 w-64 rounded bg-muted"></div>
            <div className="h-20 rounded bg-muted"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="h-[400px] animate-pulse rounded-xl bg-muted"></div>
            <div className="h-[400px] animate-pulse rounded-xl bg-muted"></div>
          </div>
        </div>
      </div>
    ),
    ssr: true, // Priority 3
  }
);

const DynamicAbout = dynamic(() => import("@/components/about").then(mod => mod.About), {
  loading: () => (
    <div className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="animate-pulse space-y-4">
            <div className="h-12 w-48 rounded bg-muted"></div>
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-muted"></div>
              <div className="h-4 w-5/6 rounded bg-muted"></div>
              <div className="h-4 w-4/6 rounded bg-muted"></div>
            </div>
          </div>
          <div className="h-[500px] animate-pulse rounded-xl bg-muted"></div>
        </div>
      </div>
    </div>
  ),
  ssr: true, // Priority 4
});

const DynamicContact = dynamic(() => import("@/components/contact").then(mod => mod.Contact), {
  loading: () => (
    <div className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl animate-pulse space-y-4 text-center">
          <div className="h-12 w-48 rounded bg-muted"></div>
          <div className="h-20 rounded bg-muted"></div>
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="h-[400px] animate-pulse rounded-xl bg-muted"></div>
        </div>
      </div>
    </div>
  ),
  ssr: true, // Priority 5
});

const DynamicFooter = dynamic(() => import("@/components/footer").then(mod => mod.Footer), {
  loading: () => (
    <footer className="border-t bg-muted/50">
      <div className="container py-8">
        <div className="h-24 animate-pulse rounded bg-muted"></div>
      </div>
    </footer>
  ),
  ssr: true, // Priority 6
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <DynamicServices />
        <DynamicPortfolio />
        <DynamicPricingCalculator />
        <DynamicAbout />
        <DynamicContact />
      </main>
      <DynamicFooter />
    </div>
  );
}
