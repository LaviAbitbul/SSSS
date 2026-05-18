import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'אודות', href: '#about' },
  { label: 'תחומי עיסוק', href: '#practice' },
  { label: 'למה אנחנו', href: '#why' },
  { label: 'המלצות', href: '#testimonials' },
  { label: 'תהליך', href: '#process' },
  { label: 'שו"ת', href: '#faq' },
  { label: 'צור קשר', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-paper/85 backdrop-blur-xl shadow-[0_4px_30px_-8px_rgba(12,24,49,0.08)] border-b border-deep/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center"
              aria-label="נעמי בל גונן - עורכת דין"
            >
              <img
                src="https://media.base44.com/images/public/6a007126836a528637f76d81/2f35dae0f_image.png"
                alt="נעמי בל גונן"
                className="h-16 lg:h-20 w-auto object-contain"
                style={{ filter: 'invert(1) brightness(0.15)' }}
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="font-assistant text-deep/75 hover:text-deep transition-colors duration-300 text-sm font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <a
                href="tel:+972509762087"
                className="flex items-center gap-2 bg-deep text-paper px-5 py-2.5 text-sm font-medium font-assistant transition-all duration-300 hover:bg-deep-soft rounded-full"
              >
                <Phone size={15} />
                050-976-2087
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-deep p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="פתח תפריט"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-deep flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 left-6 text-paper/60 hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
              aria-label="סגור תפריט"
            >
              <X size={30} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-playfair text-3xl text-paper hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 + 0.1, duration: 0.5 }}
                href="tel:+972509762087"
                className="mt-4 flex items-center gap-2 bg-gold text-deep px-8 py-3 font-bold font-assistant text-lg rounded-full"
              >
                <Phone size={18} />
                050-976-2087
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}