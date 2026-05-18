import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Lightbulb, Target, CheckCircle } from 'lucide-react';

const steps = [
  { icon: MessageCircle, title: 'שיחת היכרות', desc: 'פנייה ראשונית בטלפון או בוואטסאפ. שיחה קצרה להכיר ולהבין במה אפשר לעזור.' },
  { icon: Lightbulb, title: 'פגישת ייעוץ', desc: 'נשב יחד, אקשיב לסיפור שלכם ואסביר בצורה ברורה מה הזכויות והאפשרויות שעומדות בפניכם.' },
  { icon: Target, title: 'התאמת מסלול', desc: 'נבנה יחד דרך פעולה שמתאימה בדיוק לסיפור שלכם — בלי לחץ, בלי בלבול, עם סדר ברור.' },
  { icon: CheckCircle, title: 'ליווי לאורך הדרך', desc: 'אני לצידכם בכל שלב — עם עדכונים שוטפים, הסברים ברורים ותחושת ליווי אמיתית.' },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="relative py-28 lg:py-40 overflow-hidden bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <span className="eyebrow mb-6 inline-flex">תהליך העבודה</span>
          <h2 className="font-serif-display text-deep text-5xl lg:text-7xl font-bold leading-[1.05] mt-6">
            איך זה <span style={{ color: '#C5A059' }}>עובד</span>
          </h2>
          <p className="font-assistant text-deep/65 text-lg mt-6 leading-relaxed">
            תהליך ברור ושקוף — כדי שתדעו בדיוק מה צפוי לכם בכל שלב.
          </p>
        </motion.div>

        {/* Desktop — horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Animated connecting line */}
          <div className="absolute top-10 right-[12.5%] left-[12.5%] h-px bg-deep/10">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-gold origin-right"
            />
          </div>

          <div className="grid grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.15 }}
                className="text-center"
              >
                {/* Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.15, type: 'spring', stiffness: 120 }}
                  className="relative w-20 h-20 mx-auto mb-8 group cursor-pointer"
                >
                  <div className="w-full h-full rounded-full bg-paper border-2 border-gold flex items-center justify-center transition-all duration-400 group-hover:bg-gold group-hover:scale-105">
                    <step.icon size={26} className="text-gold group-hover:text-deep transition-colors duration-400" strokeWidth={1.5} />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-deep flex items-center justify-center">
                    <span className="font-assistant text-paper text-xs font-bold">{i + 1}</span>
                  </div>
                </motion.div>

                <h3 className="font-serif-display text-deep text-xl lg:text-2xl font-bold mb-3">{step.title}</h3>
                <p className="font-assistant text-deep/65 text-sm leading-[1.8]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical */}
        <div className="lg:hidden space-y-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex gap-5 relative bg-paper rounded-2xl p-6"
            >
              {i < steps.length - 1 && (
                <div className="absolute top-20 right-9 w-px h-8 bg-gold/30" />
              )}
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 rounded-full bg-paper border-2 border-gold flex items-center justify-center">
                  <step.icon size={22} className="text-gold" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-deep flex items-center justify-center">
                  <span className="font-assistant text-paper text-[10px] font-bold">{i + 1}</span>
                </div>
              </div>
              <div className="pt-1">
                <h3 className="font-serif-display text-deep text-lg font-bold mb-1">{step.title}</h3>
                <p className="font-assistant text-deep/65 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}