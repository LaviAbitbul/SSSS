import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

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
            <span className="font-assistant text-gold text-xs tracking-[0.2em] uppercase">משרד עורכי דין | אילת</span>
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
            <span className="text-gold">נעמי גונן</span>
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
            משרד עורכי דין
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="font-assistant text-paper/60 text-base lg:text-lg mb-10 leading-relaxed"
          >
            דיני משפחה · גירושין · מזונות · משמורת<br />
            דיני עבודה · פיטורין · הוצאה לפועל · פשיטת רגל
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
              קרא עוד עלינו
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center gap-6 mt-12"
          >
            {[
              { num: '15+', label: 'שנות ניסיון' },
              { num: '500+', label: 'תיקים מוצלחים' },
              { num: '98%', label: 'שביעות רצון' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-playfair text-gold text-2xl font-bold">{stat.num}</div>
                <div className="font-assistant text-paper/50 text-xs">{stat.label}</div>
              </div>
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