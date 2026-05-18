import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import PracticeAreasSection from '../components/sections/PracticeAreasSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProcessSection from '../components/sections/ProcessSection';
import ContactSection from '../components/sections/ContactSection';
import LocationSection from '../components/sections/LocationSection';
import FAQSection from '../components/sections/FAQSection';

export default function Home() {
  return (
    <div dir="rtl" className="bg-paper">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <PracticeAreasSection />
        <WhyUsSection />
        <TestimonialsSection />
        <ProcessSection />
        <ContactSection />
        <LocationSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}