import { motion } from 'framer-motion';
import { Phone, ArrowLeft } from 'lucide-react';

const stats = [
  { num: '20+', label: 'שנות ניסיון' },
  { num: '500+', label: 'משפחות שליוויתי' },
  { num: '100%', label: 'יחס אישי' },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// Word-by-word reveal
function RevealLine({ children, delay = 0, className = '' }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-paper">
      {/* Soft warm background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 15% 30%, rgba(197,160,89,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 70%, rgba(12,24,49,0.04) 0%, transparent 60%)',
          }}
        />
        {/* Vertical line accent */}
        <div className="absolute top-0 bottom-0 right-[8%] w-px bg-gradient-to-b from-transparent via-deep/10 to-transparent hidden lg:block" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* RIGHT (RTL = first) : Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-8"
            >
              <span className="eyebrow">עו״ד נעמי בל גונן</span>
            </motion.div>

            {/* Main headline with reveal mask */}
            <h1
              className="font-serif-display text-deep font-bold mb-7"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: '1.05' }}
            >
              <RevealLine delay={0.2}>לא רק עורכת דין —</RevealLine>
              <RevealLine delay={0.4} className="italic" >
                <span style={{ color: '#0C1831' }}>מישהי </span>
                <span style={{ color: '#C5A059' }}>שתהיה</span>
              </RevealLine>
              <RevealLine delay={0.55} className="italic" >
                <span style={{ color: '#C5A059' }}>לצידך.</span>
              </RevealLine>
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="font-assistant text-deep/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
            >
              ליווי רגיש ומקצועי בגירושין, אחריות הורית, מזונות וחלוקת רכוש — עם סדר, ביטחון ושקיפות לאורך כל הדרך.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-14"
            >
              <a
                href="tel:+972509762087"
                className="group inline-flex items-center gap-3 bg-deep text-paper font-assistant font-medium text-base px-7 py-3.5 rounded-full hover:bg-deep-soft transition-all duration-400 hover:gap-4"
              >
                <Phone size={16} strokeWidth={2} />
                <span>שיחת ייעוץ אישית</span>
                <span className="w-0 h-px bg-paper transition-all duration-400 group-hover:w-5" />
              </a>
              <button
                onClick={() => scrollTo('#about')}
                className="group inline-flex items-center gap-2 font-assistant text-deep text-base font-medium"
              >
                <span className="link-underline">קצת עליי</span>
                <ArrowLeft size={16} className="transition-transform duration-400 group-hover:-translate-x-1" />
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="grid grid-cols-3 gap-6 max-w-lg border-t border-deep/10 pt-8"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
                >
                  <div className="font-serif-display text-deep text-3xl lg:text-4xl font-bold leading-none mb-1.5">
                    {s.num}
                  </div>
                  <div className="font-assistant text-deep/55 text-xs tracking-[0.1em] uppercase">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* LEFT (RTL): Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Decorative frame line */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute -bottom-5 -left-5 lg:-bottom-7 lg:-left-7 w-full h-full border border-gold rounded-[2rem] pointer-events-none hidden md:block"
              />

              {/* Photo */}
              <div className="relative rounded-[2rem] overflow-hidden bg-deep shadow-[0_30px_80px_-20px_rgba(12,24,49,0.4)]" style={{ aspectRatio: '4/5' }}>
                <img
                  src="https://media.base44.com/images/public/6a007126836a528637f76d81/781d34657_image.png"
                  alt="עו״ד נעמי בל גונן"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent" />

                {/* Floating experience tag */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="absolute -right-4 lg:-right-6 top-10 bg-paper rounded-full pl-6 pr-3 py-2.5 flex items-center gap-3 shadow-[0_15px_40px_-10px_rgba(12,24,49,0.25)]"
                >
                  <div>
                    <div className="font-serif-display text-deep text-2xl font-bold leading-none">20+</div>
                    <div className="font-assistant text-deep/60 text-[10px] tracking-wider uppercase mt-0.5">שנות ניסיון</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-deep font-bold text-sm">★</div>
                </motion.div>

                {/* Name tag at bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute bottom-5 left-5 right-5"
                >
                  <div className="bg-paper/95 backdrop-blur-md rounded-2xl px-5 py-3.5 flex items-center justify-between">
                    <div>
                      <div className="font-serif-display text-deep text-lg font-bold leading-tight">נעמי בל גונן</div>
                      <div className="font-assistant text-deep/55 text-xs">עו״ד · דיני משפחה · אילת</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-assistant text-green-700 text-[10px] font-medium">זמינה</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="font-assistant text-deep/40 text-[10px] tracking-[0.3em] uppercase">גלילה</div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-deep/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}