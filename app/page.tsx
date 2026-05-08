import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { portfolioProjects } from "@/content/projects";
import { engagementModes } from "@/content/engagements";

const DynamicPortfolio = dynamic(
  () => import("@/components/portfolio").then(mod => mod.Portfolio),
  {
    loading: () => (
      <div className="relative bg-muted/40 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl animate-pulse space-y-4 md:mb-16">
            <div className="h-12 w-56 rounded bg-muted"></div>
            <div className="h-6 w-96 max-w-full rounded bg-muted"></div>
          </div>
          <div className="mx-auto max-w-5xl space-y-12">
            {[1, 2].map(i => (
              <div key={i} className="grid animate-pulse gap-8 md:grid-cols-[3fr_2fr] md:gap-14">
                <div className="space-y-4">
                  <div className="h-6 w-40 rounded bg-muted"></div>
                  <div className="h-16 w-48 rounded bg-muted"></div>
                  <div className="h-16 rounded bg-muted"></div>
                </div>
                <div className="aspect-[4/3] rounded-lg bg-muted"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    ssr: true,
  }
);

const DynamicEngagements = dynamic(
  () => import("@/components/engagements").then(mod => mod.Engagements),
  {
    loading: () => (
      <div className="relative py-16 md:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl animate-pulse space-y-4 md:mb-20">
            <div className="h-12 w-56 rounded bg-muted"></div>
            <div className="h-6 w-96 max-w-full rounded bg-muted"></div>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-14 lg:grid-cols-3 lg:gap-x-0">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse space-y-4 px-0 lg:px-10">
                <div className="h-3 w-8 rounded bg-muted"></div>
                <div className="h-7 w-3/4 rounded bg-muted"></div>
                <div className="h-16 rounded bg-muted"></div>
                <div className="h-24 rounded bg-muted"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    ssr: true,
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
  ssr: true,
});

const DynamicContact = dynamic(() => import("@/components/contact").then(mod => mod.Contact), {
  loading: () => (
    <div className="relative overflow-hidden py-16 md:py-24">
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
  ssr: true,
});

const DynamicFooter = dynamic(() => import("@/components/footer").then(mod => mod.Footer), {
  loading: () => (
    <footer className="border-t bg-muted/40">
      <div className="container py-8">
        <div className="h-24 animate-pulse rounded bg-muted"></div>
      </div>
    </footer>
  ),
  ssr: true,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DynamicPortfolio projects={portfolioProjects} />
        <DynamicEngagements modes={engagementModes} />
        <DynamicAbout />
        <DynamicContact />
      </main>
      <DynamicFooter />
    </div>
  );
}
