import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import { ImageSlider } from "@/components/landing/mintlify";
import ScrollZoom from "@/components/landing/scrollZoom";
import Testimonials from "@/components/landing/testimonials";
import { TimelineDemo } from "@/components/landing/timeline";
import Waitlist from "@/components/landing/waitlist";
import Workflows from "@/components/landing/workflows";

export default function Home() {
  return (
    <div className="flex flex-col bg-black items-center justify-center min-h-screen w-full md:space-y-4">
      <Header />

      <Hero />
      <ScrollZoom />
      <TimelineDemo />
      <Testimonials />
      <Workflows />
      <ImageSlider />
      <Waitlist />
      <Footer />
    </div>
  );
}
