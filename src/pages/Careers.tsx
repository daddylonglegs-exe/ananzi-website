import { Header } from '@/components/Header';
import { Careers as CareersSection } from '@/components/Careers';
import { BackToTop } from '@/components/BackToTop';

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <CareersSection />
      </main>
      <BackToTop />
    </div>
  );
};

export default Careers;