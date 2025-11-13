import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { UseCases } from './components/UseCases';
import { HowItWorks } from './components/HowItWorks';
import { CompetitiveAdvantage } from './components/CompetitiveAdvantage';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <UseCases />
      <HowItWorks />
      <CompetitiveAdvantage />
      <TechStack />
      <Testimonials />
      <CTASection />
      <Pricing />
      <Footer />
    </div>
  );
}
