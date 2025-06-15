import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import Waitlist from "@/components/landing/waitlist";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        {/* <Testimonials /> */}
        <Pricing />
        <Waitlist />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
