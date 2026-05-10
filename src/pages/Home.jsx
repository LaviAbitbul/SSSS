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

export default function Home() {
  return (
    <div className="bg-paper" dir="rtl">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PracticeAreasSection />
        <WhyUsSection />
        <TestimonialsSection />
        <ProcessSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}