import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { CaseStudies } from '@/components/CaseStudies';
import { Clients } from '@/components/Clients';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Clients />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
