import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { ProcessPreview } from "@/components/home/process-preview";
import { TestPrepBanner } from "@/components/home/test-prep-banner";
import { Testimonials } from "@/components/home/testimonials";
import { Newsletter } from "@/components/home/newsletter";
import { TeamTeaser } from "@/components/home/team-teaser";
import { BlogPreview } from "@/components/home/blog-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <WhyChooseUs />
      <FeaturedDestinations />
      <ProcessPreview />
      <TestPrepBanner />
      <Testimonials />
      <Newsletter />
      <TeamTeaser />
      <BlogPreview />
    </>
  );
}
