import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const testimonials = [
  {
    initial: 'ר',
    text: 'היי נעמי, רציתי להגיד לך תודה על הכל 🙏 הגעתי אלייך ממש אבוד ולא ידעתי איך להתמודד עם כל הסיטואציה הזאת ובאמת שעזרת לי לעשות סדר ולהירגע. זה לא מובן מאליו בכלל',
    time: '22:31',
  },
  {
    initial: 'מ',
    text: 'נעמי בוקר טוב, רק רציתי להגיד תודה. לא חשבתי שאפשר לעבור את זה בלי מלחמות ובסוף בזכותך הצלחנו להגיע להסכמות בצורה רגועה. מעריך מאוד 🙏',
    time: '22:31',
  },
  {
    initial: 'ע',
    text: 'נעמי תקשיבי ממש ממש תודה 🙏 היה לי הכי חשוב לא לפגוע בקשר עם הילדים והצלחת לעזור לי להגיע להסדר שמרגיש נכון והוגן. זה שווה הכל מבחינתי 🙏',
    time: '22:30',
  },
  {
    initial: 'ש',
    text: 'תודה על הליווי לאורך כל הדרך. הייתי בטוחה שאני לבד בזה ולמעשה הרגשתי שיש לי מישהי שבאמת איתי. ממליצה בחום לכל אחת שעוברת תקופה כזו.',
    time: '14:22',
  },
  {
    initial: 'א',
    text: 'מקצועיות, רגישות וסבלנות אינסופית. נעמי הסבירה לי כל שלב מההתחלה ועד הסוף ובסוף יצאתי עם תחושה שאני שולטת במה שקורה לי. תודה ענקית.',
    time: '09:15',
  },
];

function WhatsAppBubble({ text, time }) {
  return (
    <div
      className="relative bg-white shadow-[0_10px_40px_-15px_rgba(12,24,49,0.15)] px-6 py-5 max-w-full"
      style={{ borderRadius: '18px 18px 18px 4px' }}
    >
      <p className="font-assistant text-deep text-[15px] lg:text-base leading-[1.75] text-right whitespace-pre-line">
        {text}
      </p>
      <div className="flex items-center gap-1 justify-end mt-3">
        <span className="font-assistant text-deep/35 text-[11px]">{time}</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-blue-500">
          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12l5 5L24 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = testimonials.length;
  const next = () => { setDirection(1); setIndex((i) => (i + 1) % total); };
  const prev = () => { setDirection(-1); setIndex((i) => (i - 1 + total) % total); };
  const goTo = (i) => { setDirection(i > index ? 1 : -1); setIndex(i); };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  };

  const current = testimonials[index];
  const bgColors = ['#E8F4EA', '#F4EBDC', '#EDE6F2', '#F0E8DD', '#E5EEF2'];
  const bg = bgColors[index % bgColors.length];

  return (
    <section id="testimonials" className="relative py-24 lg:py-36 overflow-hidden bg-paper" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-16"
        >
          <span className="eyebrow mb-6 inline-flex justify-center">מילים אמיתיות</span>
          <h2 className="font-serif-display text-deep text-4xl lg:text-6xl font-bold leading-[1.05] mt-6">
            הודעות <span style={{ color: '#C5A059' }}>שקיבלתי</span>
          </h2>
          <p className="font-assistant text-deep/65 text-base lg:text-lg mt-6 leading-relaxed">
            לא ביקורות, לא פרסומות — הודעות שהגיעו אליי בסיום התהליך.
          </p>
        </motion.div>

        {/* Carousel frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative border frame */}
          <div className="relative rounded-[2rem] lg:rounded-[2.5rem] border border-deep/10 bg-paper p-4 lg:p-6 shadow-[0_30px_70px_-30px_rgba(12,24,49,0.15)]">
            <div
              className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden transition-colors duration-700"
              style={{ background: bg, minHeight: '380px' }}
            >
              {/* Big quote */}
              <Quote className="absolute top-6 right-6 text-deep/8 lg:w-20 lg:h-20" size={56} strokeWidth={1} />

              <div className="relative px-6 py-12 lg:px-16 lg:py-16 flex items-center justify-center min-h-[380px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-xl mx-auto"
                  >
                    <WhatsAppBubble text={current.text} time={current.time} />

                    <div className="mt-5 flex items-center gap-3 justify-center">
                      <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center font-assistant text-gold text-sm font-bold">
                        {current.initial}
                      </div>
                      <div className="font-assistant text-deep/55 text-xs">לקוח/ה — סוף תהליך</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6 px-2">
              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={next}
                  aria-label="ההמלצה הבאה"
                  className="w-11 h-11 rounded-full border border-deep/15 hover:border-gold hover:bg-gold flex items-center justify-center text-deep hover:text-paper transition-colors duration-300"
                >
                  <ChevronRight size={18} />
                </button>
                <button
                  onClick={prev}
                  aria-label="ההמלצה הקודמת"
                  className="w-11 h-11 rounded-full border border-deep/15 hover:border-gold hover:bg-gold flex items-center justify-center text-deep hover:text-paper transition-colors duration-300"
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
                    className={`h-1.5 rounded-full transition-all duration-400 ${
                      i === index ? 'bg-gold w-8' : 'bg-deep/15 w-1.5 hover:bg-deep/30'
                    }`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="font-assistant text-deep/50 text-sm tabular-nums tracking-tight">
                <span className="text-deep font-bold">{String(index + 1).padStart(2, '0')}</span>
                <span className="mx-1.5 text-deep/30">/</span>
                <span>{String(total).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-assistant text-deep/40 text-xs text-center mt-10 max-w-md mx-auto"
        >
          * שמות הלקוחות הוסתרו לשמירה על פרטיותם. ההודעות פורסמו באישורם.
        </motion.p>
      </div>
    </section>
  );
}