import { Header } from '@/components/Header';
import { Careers as CareersSection } from '@/components/Careers';
import { BackToTop } from '@/components/BackToTop';
import { Footer } from '@/components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-20">
        <CareersSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Careers;