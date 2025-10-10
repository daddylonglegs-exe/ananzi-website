import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { CaseStudies } from '@/components/CaseStudies';
import { Clients } from '@/components/Clients';
import { Footer } from '@/components/Footer';
import { NetworkOverlay } from '@/components/NetworkOverlay';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NetworkOverlay />
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
