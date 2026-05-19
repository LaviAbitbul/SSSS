import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowLeft, Heart, Eye, Leaf, Sparkles, Award, Star, Play, X, Loader2 } from 'lucide-react';
import AnimatedNumber from '@/components/ui/AnimatedNumber';

const VIDEO_URL = 'https://media.base44.com/videos/public/6a007126836a528637f76d81/7c3abacca_SIRTON.mp4';

const stats = [
  { icon: Eye, num: '20+', label: 'שנות ניסיון' },
  { icon: Heart, num: '500+', label: 'משפחות שליוויתי' },
  { icon: Leaf, num: '100%', label: 'יחס אישי' },
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
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const preloadRef = useRef(null);

  // Background prefetch — start loading video silently after hero loads
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!preloadRef.current) {
        const video = document.createElement('video');
        video.src = VIDEO_URL;
        video.preload = 'auto';
        video.muted = true;
        video.style.display = 'none';
        document.body.appendChild(video);
        preloadRef.current = video;
      }
    }, 2500); // wait for hero animations to finish

    return () => {
      clearTimeout(timer);
      if (preloadRef.current) {
        preloadRef.current.remove();
        preloadRef.current = null;
      }
    };
  }, []);

  const handlePlay = () => {
    setPlaying(true);
    setLoading(true);
  };

  const handleCanPlay = () => {
    setLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setPlaying(false);
    setLoading(false);
  };

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
        <div className="absolute top-0 bottom-0 right-[8%] w-px bg-gradient-to-b from-transparent via-deep/10 to-transparent hidden lg:block" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 sm:pt-32 pb-16 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Text — order 1 on mobile (first), 1 on desktop */}
          <div className="lg:col-span-7 order-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 sm:mb-8"
            >
              <span className="eyebrow">עו״ד נעמי בל גונן</span>
            </motion.div>

            <h1
              className="font-serif-display text-deep font-bold mb-6 sm:mb-7"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: '1.05' }}
            >
              <RevealLine delay={0.2}>לא רק עורכת דין —</RevealLine>
              <RevealLine delay={0.4} className="italic">
                <span style={{ color: '#0C1831' }}>מישהי </span>
                {/* Underline highlight word */}
                <span className="relative inline-block" style={{ color: '#0C1831' }}>
                  <span className="relative z-10">שתהיה</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 bottom-1 left-0 origin-right pointer-events-none"
                    style={{
                      height: '14px',
                      background: 'linear-gradient(90deg, transparent 0%, #C5A059 15%, #D4B87A 50%, #C5A059 85%, transparent 100%)',
                      opacity: 0.55,
                      zIndex: 1,
                      borderRadius: '2px',
                    }}
                  />
                </span>
              </RevealLine>
              <RevealLine delay={0.55} className="italic">
                <span style={{ color: '#C5A059' }}>לצידך.</span>
              </RevealLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="font-assistant text-deep/70 text-base lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl"
            >
              ליווי רגיש ומקצועי בגירושין, אחריות הורית, מזונות וחלוקת רכוש — עם סדר, ביטחון ושקיפות לאורך כל הדרך.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10 sm:mb-14"
            >
              <a
                href="tel:+972509762087"
                className="group inline-flex items-center gap-3 bg-deep text-paper font-assistant font-medium text-base px-7 py-3.5 rounded-full hover:bg-deep-soft transition-all duration-400 hover:gap-4"
              >
                <Phone size={16} strokeWidth={2} />
                <span>שיחת ייעוץ אישית</span>
              </a>
              <button
                onClick={() => scrollTo('#about')}
                className="group inline-flex items-center gap-2 font-assistant text-deep text-base font-medium"
              >
                <span className="link-underline">קצת עליי</span>
                <ArrowLeft size={16} className="transition-transform duration-400 group-hover:-translate-x-1" />
              </button>
            </motion.div>

            {/* Stats — with background cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
                  className="relative bg-white border border-deep/8 rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_-15px_rgba(12,24,49,0.12)] hover:border-gold/40 transition-colors duration-400"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-gold/15 flex items-center justify-center">
                      <s.icon size={14} className="text-gold" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="font-assistant text-deep text-2xl sm:text-3xl lg:text-4xl font-bold leading-none mb-1.5 tabular-nums tracking-tight">
                    <AnimatedNumber value={s.num} duration={2} delay={1.5 + i * 0.15} />
                  </div>
                  <div className="font-assistant text-deep/55 text-[10px] sm:text-xs tracking-[0.05em]">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Portrait — order 2 on mobile (after text), 2 on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-2 relative"
          >
            {/* Wrapper with padding so badges don't get clipped */}
            <div className="relative px-3 sm:px-6 lg:px-8 py-4 lg:py-6">
              {/* Gold frame outline */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute inset-x-3 sm:inset-x-6 lg:inset-x-8 inset-y-4 lg:inset-y-6 translate-x-[-12px] translate-y-[12px] lg:translate-x-[-20px] lg:translate-y-[20px] border border-gold rounded-[2rem] pointer-events-none hidden md:block"
              />

              {/* Decorative dotted pattern - top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute -top-2 -right-2 w-24 h-24 lg:w-28 lg:h-28 hidden md:block pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #C5A059 1.5px, transparent 1.5px)',
                  backgroundSize: '14px 14px',
                }}
              />

              {/* Photo / Video */}
              <div
                className="relative rounded-[2rem] overflow-hidden bg-deep shadow-[0_30px_80px_-20px_rgba(12,24,49,0.4)] group"
                style={{ aspectRatio: '4/5' }}
              >
                <AnimatePresence mode="wait">
                  {!playing ? (
                    <motion.button
                      key="poster"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      onClick={handlePlay}
                      aria-label="צפו בסרטון מי אני"
                      className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none"
                    >
                      <img
                        src="https://media.base44.com/images/public/6a007126836a528637f76d81/781d34657_image.png"
                        alt="עו״ד נעמי בל גונן"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Soft gradient only at bottom — keeps face visible */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep/70 via-deep/20 to-transparent" />

                      {/* Elegant play pill — bottom right, doesn't cover face */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.6 }}
                        className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 flex items-center gap-3"
                      >
                        <div className="relative flex items-center gap-2.5 bg-paper/95 backdrop-blur-md pl-2 pr-4 py-2 rounded-full shadow-[0_15px_40px_-8px_rgba(12,24,49,0.45)] border border-paper/40 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                          {/* Pulsing dot */}
                          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold border border-paper" />
                          </span>

                          <div className="w-8 h-8 rounded-full bg-deep flex items-center justify-center group-hover:bg-deep transition-colors duration-500">
                            <Play size={13} className="text-gold mr-[-2px] group-hover:text-gold transition-colors" strokeWidth={2.5} fill="currentColor" />
                          </div>
                          <span className="font-assistant text-deep text-xs sm:text-sm font-bold whitespace-nowrap group-hover:text-deep transition-colors">
                            צפו בסרטון
                          </span>
                        </div>
                      </motion.div>
                    </motion.button>
                  ) : (
                    <motion.div
                      key="video"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-deep"
                    >
                      <video
                        ref={videoRef}
                        src={VIDEO_URL}
                        controls
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                        onEnded={handleClose}
                        onCanPlay={handleCanPlay}
                        onWaiting={() => setLoading(true)}
                        onPlaying={() => setLoading(false)}
                      />

                      {/* Loading spinner */}
                      <AnimatePresence>
                        {loading && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-deep/40 backdrop-blur-sm pointer-events-none"
                          >
                            <div className="flex flex-col items-center gap-3">
                              <Loader2 size={36} className="text-gold animate-spin" strokeWidth={2} />
                              <span className="font-assistant text-paper/90 text-xs tracking-[0.2em] uppercase">טוען סרטון</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Close button */}
                      <button
                        onClick={handleClose}
                        aria-label="סגור סרטון"
                        className="absolute top-3 left-3 w-9 h-9 rounded-full bg-deep/80 backdrop-blur-md border border-paper/15 flex items-center justify-center text-paper hover:bg-gold hover:text-deep transition-all duration-300 z-10"
                      >
                        <X size={16} strokeWidth={2.5} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating badge - top left: Star rating (positioned relative to wrapper, not photo) */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="absolute top-0 left-0 sm:top-2 sm:left-2 bg-white rounded-full pl-3 pr-2.5 py-1.5 sm:pl-4 sm:pr-3 sm:py-2 flex items-center gap-1.5 sm:gap-2 shadow-[0_12px_30px_-8px_rgba(12,24,49,0.25)] border border-deep/5 z-20"
              >
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="#C5A059" stroke="#C5A059" className="sm:w-[11px] sm:h-[11px]" />
                  ))}
                </div>
                <span className="font-assistant text-deep text-[11px] sm:text-xs font-bold tabular-nums">5.0</span>
              </motion.div>

              {/* Floating tag - bottom right: Specialty */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.35 }}
                className="absolute bottom-0 right-0 sm:bottom-2 sm:right-2 bg-gold rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2 shadow-[0_12px_30px_-8px_rgba(197,160,89,0.5)] z-20"
              >
                <Sparkles size={11} className="text-deep sm:w-[13px] sm:h-[13px]" strokeWidth={2.5} />
                <span className="font-assistant text-deep text-[11px] sm:text-xs font-bold whitespace-nowrap">דיני משפחה · אילת</span>
              </motion.div>

              {/* Floating mini-card - bottom left: Award */}
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute bottom-8 left-0 sm:bottom-16 sm:-left-2 lg:-left-4 bg-white rounded-2xl p-2.5 sm:p-3 shadow-[0_15px_40px_-10px_rgba(12,24,49,0.3)] border border-deep/5 hidden sm:block z-20"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-deep flex items-center justify-center flex-shrink-0">
                    <Award size={16} className="text-gold sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} />
                  </div>
                  <div className="pr-1">
                    <div className="font-assistant text-deep text-xs font-bold leading-tight">לשכת עוה״ד</div>
                    <div className="font-assistant text-deep/55 text-[10px] leading-tight">חברה רשומה</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex"
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