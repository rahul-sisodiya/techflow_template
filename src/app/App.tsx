import { Navigation } from './components/Navigation';
import { Hero3D } from './components/Hero3D';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { PortfolioSection } from './components/PortfolioSection';
import { BestCreationsSection } from './components/BestCreationsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navigation />
      <main>
        <div id="hero">
          <Hero3D />
        </div>
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PortfolioSection />
        <BestCreationsSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
