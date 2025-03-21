import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ProblemSection from "@/components/sections/problem-section";
import SolutionSection from "@/components/sections/solution-section";
import FeaturesSection from "@/components/sections/features-section";
import TakeActionSection from "@/components/sections/take-action-section";
import ContactSection from "@/components/sections/contact-section";
import { useEffect } from "react";

export default function Home() {
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-100 font-sans">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <TakeActionSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
