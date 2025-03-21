import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { PricingCalculator } from "@/components/pricing-calculator";
import { About } from "@/components/about";
// import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <PricingCalculator />
        <About />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
