import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, Instagram, Facebook } from 'lucide-react';

const TikTokIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
  </svg>
);

export default function HeroSection() {
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmer(true);
      setTimeout(() => setShimmer(false), 1500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-deep"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Deep overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-deep/40 via-deep/75 to-deep/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent" />

      {/* Gold accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gold origin-right"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-gold/40 px-4 py-2 mb-8"
            style={{ borderRadius: '2px' }}
          >
            <Star size={12} fill="#C5A059" className="text-gold" />
            <span className="font-assistant text-gold text-xs tracking-[0.2em] uppercase">עורכת דין לדיני משפחה</span>
            <Star size={12} fill="#C5A059" className="text-gold" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-playfair text-paper leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            עו"ד{' '}
            <span className="text-gold">נעמי בל גונן</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-0.5 bg-gold w-24 mb-6 origin-right"
          />

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-playfair text-paper/70 text-xl lg:text-2xl mb-4 font-medium"
          >
            עורכת דין לענייני משפחה
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="font-assistant text-paper/60 text-base lg:text-lg mb-10 leading-relaxed"
          >
            ליווי רגיש ומקצועי בתהליכי גירושין, אחריות הורית,<br />
            מזונות, חלוקת רכוש והסכמים משפחתיים.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+972509762087"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-assistant font-bold text-deep text-base transition-all duration-300 hover:scale-[1.02] ${
                shimmer ? 'gold-shimmer' : 'bg-gold'
              }`}
              style={{ borderRadius: '2px' }}
            >
              ✦ לייעוץ ראשוני חינם
            </a>

            <button
              onClick={() => scrollTo('#about')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-assistant font-semibold text-paper text-base border border-paper/30 hover:border-gold hover:text-gold transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              קצת עליי
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center gap-4 mt-12"
          >
            <span className="font-assistant text-paper/40 text-xs tracking-widest">עקבו אחריי</span>
            <div className="w-8 h-px bg-paper/20" />
            {[
              { icon: Instagram, href: 'https://www.instagram.com/neomi.bel.law', label: 'Instagram' },
              { icon: TikTokIcon, href: 'https://www.tiktok.com/@neomi.bel.law', label: 'TikTok' },
              { icon: Facebook, href: 'https://www.facebook.com/share/15tgCN25iEh/?mibextid=wwXIfr', label: 'Facebook' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 border border-paper/20 flex items-center justify-center text-paper/60 hover:border-gold hover:text-gold transition-all duration-300"
                style={{ borderRadius: '2px' }}
              >
                <s.icon size={15} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 0.5 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/40 hover:text-gold transition-colors"
        aria-label="גלול למטה"
      >
        <ChevronDown size={30} />
      </motion.button>
    </section>
  );
}