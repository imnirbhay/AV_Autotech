import { HeroSection } from '../components/HeroSection';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { ContactCTA } from '../components/ContactCTA';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
