import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Scale, HeartHandshake, ShieldCheck } from 'lucide-react';

const TikTokIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
  </svg>
);

const strengths = [
  {
    icon: Scale,
    title: 'ניסיון משפטי עמוק',
    desc: 'מעל 20 שנות התמחות בלעדית בדיני משפחה',
  },
  {
    icon: HeartHandshake,
    title: 'גישה אנושית ורגישה',
    desc: 'ליווי אישי לכל לקוח לאורך כל ההליך',
  },
  {
    icon: ShieldCheck,
    title: 'הגנה מלאה על זכויותיך',
    desc: 'מזונות, רכוש, ילדים — עם שקיפות וביטחון',
  },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// Animated text words
function AnimatedHeadline() {
  const words = ['לא רק', 'עורכת דין —'];
  const goldLine = 'מישהי שתהיה לצידך.';

  return (
    <h1 className="font-playfair font-bold leading-[1.1] mb-6" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)' }}>
      {words.map((word, wi) => (
        <span key={wi} className="block overflow-hidden">
          <motion.span
            className="block text-paper"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 + wi * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
      <span className="block overflow-hidden mt-1">
        <motion.span
          className="block"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'linear-gradient(135deg, #C5A059 0%, #D4B87A 40%, #A8833A 70%, #C5A059 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {goldLine}
        </motion.span>
      </span>
    </h1>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0C1831' }}>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(197,160,89,0.09) 0%, transparent 70%)' }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C1831] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* RIGHT: Text content (RTL = appears on right) */}
          <div className="order-2 lg:order-1 flex flex-col">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 self-start mb-6 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-assistant text-gold text-xs tracking-[0.2em]">עו״ד נעמי בל גונן · דיני משפחה</span>
            </motion.div>

            {/* Animated headline */}
            <AnimatedHeadline />

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="font-assistant text-paper/80 text-base lg:text-lg leading-relaxed mb-10 max-w-md"
            >
              ליווי רגיש ומקצועי בגירושין, אחריות הורית, מזונות וחלוקת רכוש — עם סדר, ביטחון ושקיפות לאורך כל הדרך.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="flex flex-col sm:flex-row gap-3 mb-14"
            >
              <a
                href="tel:+972509762087"
                className="flex items-center justify-center gap-2 bg-gold text-deep font-assistant font-bold text-base px-7 py-3.5 rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-[1.03] shadow-gold-glow"
              >
                <Phone size={16} />
                לשיחת ייעוץ חינם
              </a>
              <button
                onClick={() => scrollTo('#about')}
                className="flex items-center justify-center gap-2 font-assistant text-paper/80 border border-paper/20 hover:border-gold hover:text-gold text-base px-7 py-3.5 rounded-full transition-all duration-300"
              >
                קצת עליי ←
              </button>
            </motion.div>

            {/* Strengths row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.25 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {strengths.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 + i * 0.1 }}
                  className="flex flex-col gap-2 bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-gold/30 hover:bg-white/8 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-gold/15 flex items-center justify-center">
                    <s.icon size={17} className="text-gold" />
                  </div>
                  <div className="font-playfair text-paper text-sm font-bold leading-tight">{s.title}</div>
                  <div className="font-assistant text-paper/55 text-xs leading-relaxed">{s.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* LEFT: Photo (RTL = appears on left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-[2.5rem]"
              style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(197,160,89,0.18) 0%, transparent 70%)' }}
            />

            {/* Photo frame */}
            <div className="relative w-full max-w-sm lg:max-w-full">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-10px_rgba(0,0,0,0.7)]"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src="https://media.base44.com/images/public/6a007126836a528637f76d81/781d34657_image.png"
                  alt="עו״ד נעמי בל גונן"
                  className="w-full h-full object-cover object-top"
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep/50 via-transparent to-transparent" />

                {/* Experience badge — overlaid on image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="absolute bottom-6 right-6 bg-gold text-deep rounded-2xl px-5 py-4 shadow-xl"
                >
                  <div className="font-playfair font-bold text-3xl leading-none">20+</div>
                  <div className="font-assistant font-bold text-xs mt-1 leading-tight">שנות<br />ניסיון</div>
                </motion.div>

                {/* Name tag on image */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="absolute top-5 left-5 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5"
                >
                  <div className="font-playfair text-paper text-sm font-bold">נעמי בל גונן</div>
                  <div className="font-assistant text-paper/70 text-xs">עורכת דין · משפחה</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}