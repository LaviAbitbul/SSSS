import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'היי נעמי, רציתי להגיד לך תודה על הכל 🙏 הגעתי אלייך ממש אבוד ולא ידעתי איך להתמודד עם כל הסיטואציה הזאת ובאמת שעזרת לי לעשות סדר ולהירגע. זה לא מובן מאליו בכלל',
  },
  {
    text: 'נעמי בוקר טוב, רק רציתי להגיד תודה. לא חשבתי שאפשר לעבור את זה בלי מלחמות ובסוף בזכותך הצלחנו להגיע להסכמות בצורה רגועה. מעריך מאוד 🙏',
  },
  {
    text: 'נעמי תקשיבי ממש ממש תודה 🙏 היה לי הכי חשוב לא לפגוע בקשר עם הילדים והצלחת לעזור לי להגיע להסדר שמרגיש נכון והוגן. זה שווה הכל מבחינתי 🙏',
  },
];

function TestimonialCard({ item, isCenter }) {
  return (
    <motion.div
      animate={{
        scale: isCenter ? 1 : 0.94,
        opacity: isCenter ? 1 : 0.6,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full w-full"
    >
      {/* Card */}
      <div
        className={`relative h-full bg-paper border rounded-3xl p-7 lg:p-9 transition-all duration-700 flex flex-col ${
          isCenter
            ? 'border-gold/40 shadow-[0_30px_60px_-25px_rgba(197,160,89,0.35)]'
            : 'border-deep/8 shadow-[0_15px_40px_-20px_rgba(12,24,49,0.12)]'
        }`}
      >
        {/* Decorative gold quote */}
        <Quote
          className={`absolute top-6 right-6 transition-colors duration-700 ${
            isCenter ? 'text-gold/30' : 'text-deep/10'
          }`}
          size={36}
          strokeWidth={1.2}
          style={{ transform: 'scaleX(-1)' }}
        />

        {/* Text */}
        <p className="font-assistant text-deep/85 text-[15px] lg:text-base leading-[1.85] mt-12 mb-6 flex-1 whitespace-pre-line">
          {item.text}
        </p>

      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  // Detect viewport for slot count (3 desktop, 1 mobile)
  const [slots, setSlots] = useState(3);
  useEffect(() => {
    const compute = () => setSlots(window.innerWidth >= 1024 ? 3 : 1);
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const goTo = (i) => setIndex(i);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(timer);
  }, [total]);

  // Build the windowed list of visible testimonials
  const visible = Array.from({ length: slots }, (_, k) => {
    const i = (index + k) % total;
    return { ...testimonials[i], _key: i };
  });
  const centerOffset = slots === 3 ? 1 : 0;

  return (
    <section id="testimonials" className="relative py-24 lg:py-36 overflow-hidden bg-cream" ref={ref}>
      {/* Decorative gold orb */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-[-200px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.15) 0%, transparent 60%)' }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 left-[-200px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(12,24,49,0.06) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-20"
        >
          <span className="eyebrow mb-6 inline-flex justify-center">מילים אמיתיות</span>
          <h2
            className="font-serif-display text-deep font-bold leading-[1.05] mt-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            לקוחות <span style={{ color: '#C5A059' }}>מספרים</span>
          </h2>
          <div className="gold-accent gold-accent-center" />
          <p className="font-assistant text-deep/65 text-base lg:text-lg mt-6 leading-relaxed">
            לא ביקורות, לא פרסומות — הודעות שהגיעו אליי בסיום התהליך.
          </p>
        </motion.div>

        {/* Cards row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div
            className={`grid gap-5 lg:gap-7 items-stretch ${
              slots === 3 ? 'grid-cols-3' : 'grid-cols-1'
            }`}
            style={{ minHeight: '380px' }}
          >
            <AnimatePresence mode="popLayout">
              {visible.map((item, slotIdx) => (
                <motion.div
                  key={item._key}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  <TestimonialCard item={item} isCenter={slotIdx === centerOffset} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10 lg:mt-14 gap-6">
            {/* Arrows */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={next}
                aria-label="ההמלצה הבאה"
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-deep/15 bg-paper hover:border-gold hover:bg-gold flex items-center justify-center text-deep hover:text-paper transition-all duration-300 hover:scale-105"
              >
                <ChevronRight size={18} />
              </button>
              <button
                onClick={prev}
                aria-label="ההמלצה הקודמת"
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-deep/15 bg-paper hover:border-gold hover:bg-gold flex items-center justify-center text-deep hover:text-paper transition-all duration-300 hover:scale-105"
              >
                <ChevronLeft size={18} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`עבור להמלצה ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? 'bg-gold w-10' : 'bg-deep/15 w-1.5 hover:bg-deep/30'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="font-assistant text-deep/50 text-sm tabular-nums tracking-tight hidden sm:block">
              <span className="text-deep font-bold">{String(index + 1).padStart(2, '0')}</span>
              <span className="mx-1.5 text-deep/30">/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}