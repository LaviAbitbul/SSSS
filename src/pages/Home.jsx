import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import PracticeAreasSection from '../components/sections/PracticeAreasSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProcessSection from '../components/sections/ProcessSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';
import GlobalBackground from '../components/layout/GlobalBackground';

export default function Home() {
  return (
    <div dir="rtl" style={{ background: '#0C1831' }}>
      {/* Fixed dynamic background — all sections float above it */}
      <GlobalBackground />

      <Navbar />
      <main className="relative z-10">
        <HeroSection />

        {/* Floating sections — glass-like cards on dark bg */}
        <div className="relative">
          <SectionWrapper>
            <AboutSection />
          </SectionWrapper>
          <SectionWrapper>
            <PracticeAreasSection />
          </SectionWrapper>
          <SectionWrapper>
            <WhyUsSection />
          </SectionWrapper>
          <SectionWrapper>
            <TestimonialsSection />
          </SectionWrapper>
          <SectionWrapper>
            <ProcessSection />
          </SectionWrapper>
          <SectionWrapper>
            <BlogSection />
          </SectionWrapper>
          <SectionWrapper>
            <ContactSection />
          </SectionWrapper>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

// Each section gets a floating "layer" feel
function SectionWrapper({ children }) {
  return (
    <div className="relative mx-2 lg:mx-6 my-3 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_8px_60px_-10px_rgba(0,0,0,0.6)]">
      {children}
    </div>
  );
}