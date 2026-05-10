import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'ד.כ.',
    area: 'גירושין ומשמורת',
    stars: 5,
    text: 'עו"ד גונן ליוותה אותי בתקופה הקשה ביותר בחיי. המקצועיות, הסבלנות וההבנה האנושית שהפגינה לא ייאמנו. הגענו לתוצאה הטובה ביותר עבורי ועבור ילדיי.',
  },
  {
    name: 'מ.א.',
    area: 'דיני עבודה – פיטורין',
    stars: 5,
    text: 'פוטרתי שלא כדין לאחר 8 שנות עבודה. עו"ד גונן לקחה את התיק ברצינות מלאה, הגנה על הזכויות שלי ואת הפיצויים שמגיעים לי. תודה אין-סופית.',
  },
  {
    name: 'ר.ל.',
    area: 'מזונות וזכויות ילד',
    stars: 5,
    text: 'ידעה בדיוק מה לעשות ומתי. כל שלב הוסבר לי בשפה ברורה. לא הרגשתי לרגע שאני לבד. הילדים שלי מקבלים את מה שמגיע להם.',
  },
  {
    name: 'א.ב.',
    area: 'הוצאה לפועל',
    stars: 5,
    text: 'לאחר שנים של חובות, עו"ד גונן עזרה לי לצאת מהמשבר. הגישה האישית והמקצועית שלה הפכה את ההליך הקשה לאפשרי ואפילו לנסבל.',
  },
  {
    name: 'ט.מ.',
    area: 'הסכם ממון',
    stars: 5,
    text: 'עו"ד גונן הכינה לנו הסכם ממון שלוקח בחשבון את כל המורכבויות. מקצועית, מהירה ומדויקת. ממליצה בחום רב.',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-lg">★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-padding bg-action relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C5A059 0, #C5A059 1px, transparent 0, transparent 50%)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-assistant text-gold text-sm tracking-[0.3em] uppercase block mb-4">לקוחות מרוצים</span>
          <h2 className="font-playfair text-paper text-4xl lg:text-5xl">
            מה <span className="text-gold">הלקוחות</span> אומרים
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Main testimonial */}
          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="bg-deep border border-gold/20 p-10 lg:p-14 text-center"
                style={{ borderRadius: '2px' }}
              >
                {/* Quote icon */}
                <Quote size={40} className="text-gold/20 mx-auto mb-6" />
                
                <StarRating count={testimonials[current].stars} />
                
                <p className="font-assistant text-paper/80 text-lg leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                <div className="border-t border-gold/20 pt-6">
                  <div className="font-playfair text-gold text-lg font-bold">{testimonials[current].name}</div>
                  <div className="font-assistant text-paper/50 text-sm mt-1">{testimonials[current].area}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={next}
                className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-deep transition-all duration-300"
                style={{ borderRadius: '2px' }}
                aria-label="הקודם"
              >
                <ChevronRight size={18} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 transition-all duration-300 ${
                      i === current ? 'bg-gold w-6' : 'bg-paper/30'
                    }`}
                    style={{ borderRadius: '1px' }}
                  />
                ))}
              </div>

              <button
                onClick={prev}
                className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-deep transition-all duration-300"
                style={{ borderRadius: '2px' }}
                aria-label="הבא"
              >
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>

          {/* Side testimonials (desktop) */}
          <div className="hidden lg:grid grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto opacity-50">
            {[
              testimonials[(current + 1) % testimonials.length],
              testimonials[(current + 2) % testimonials.length],
            ].map((t, i) => (
              <div key={i} className="bg-deep/50 border border-paper/10 p-6" style={{ borderRadius: '2px' }}>
                <StarRating count={t.stars} />
                <p className="font-assistant text-paper/60 text-sm leading-relaxed line-clamp-3 italic">"{t.text}"</p>
                <div className="font-assistant text-gold/70 text-xs mt-3">{t.name} · {t.area}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}