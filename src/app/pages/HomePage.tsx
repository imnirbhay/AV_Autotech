import { HeroSection } from '../components/HeroSection';
import { VideoPlayer } from '../components/VideoPlayer';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { PreferredPartners } from '../components/PreferredPartners';
import { Portfolio } from '../components/Portfolio';
import { ContactCTA } from '../components/ContactCTA';

export function HomePage() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#E5F0FF' }}>
      <HeroSection />
      <VideoPlayer />
      <Services />
      <WhyChooseUs />
      <PreferredPartners />
      <Portfolio />
      <ContactCTA />
    </div>
  );
}
