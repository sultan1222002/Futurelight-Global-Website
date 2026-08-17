import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { ProcessPreview } from "@/components/home/process-preview";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { ServicesGrid } from "@/components/home/services-grid";
import { Testimonials } from "@/components/home/testimonials";
import { TestPrepBanner } from "@/components/home/test-prep-banner";
import { Newsletter } from "@/components/home/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProcessPreview />
      <FeaturedDestinations />
      <ServicesGrid />
      <TestPrepBanner />
      <Testimonials />
      <Newsletter />
    </>
  );
}
