import { Hero } from "../components/Hero";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Stats } from "../components/Stats";
import { Features } from "../components/Features";
import { CompanyLogos } from "../components/CompanyLogos";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";

interface HomePageProps {
  onNavigate: (page: "home" | "how-it-works" | "pricing" | "about" | "contact" | "logo") => void;
  onGetStarted: () => void;
}

export function HomePage({ onNavigate, onGetStarted }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} onGetStarted={onGetStarted} />
      <WhyChooseUs />
      <Stats />
      <Features />
      <CompanyLogos />
      <Testimonials />
      <CTA onNavigate={onNavigate} onGetStarted={onGetStarted} />
    </>
  );
}