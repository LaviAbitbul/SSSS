import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Lightbulb, Target, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'שיחת היכרות',
    desc: 'פנייה ראשונית בטלפון או בוואטסאפ. שיחה קצרה להכיר ולהבין במה אפשר לעזור.',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'פגישת ייעוץ',
    desc: 'נשב יחד, אקשיב לסיפור שלכם ואסביר בצורה ברורה מה הזכויות והאפשרויות שעומדות בפניכם.',
  },
  {
    num: '03',
    icon: Target,
    title: 'התאמת מסלול',
    desc: 'נבנה יחד דרך פעולה שמתאימה בדיוק לסיפור שלכם — בלי לחץ, בלי בלבול, עם סדר ברור.',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'ליווי לאורך הדרך',
    desc: 'אני לצידכם בכל שלב — עם עדכונים שוטפים, הסברים ברורים ותחושת ליווי אמיתית.',
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" className="section-padding bg-paper" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-assistant text-gold text-sm tracking-[0.3em] uppercase block mb-4">איך עובדים יחד</span>
          <h2 className="font-playfair text-deep text-4xl lg:text-5xl">
            תהליך <span className="text-gold">העבודה</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          <p className="font-assistant text-deep/60 text-base mt-6 max-w-lg mx-auto">
            תהליך ברור ושקוף — כדי שתדעו בדיוק מה צפוי לכם בכל שלב.
          </p>
        </motion.div>

        {/* Steps - Desktop horizontal */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-12 right-[8%] left-[8%] h-px bg-gold/20">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              className="h-full bg-gold origin-right"
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className="text-center relative"
              >
                {/* Step number circle */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="w-full h-full bg-deep border-2 border-gold flex items-center justify-center" style={{ borderRadius: '2px' }}>
                    <step.icon size={28} className="text-gold" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-7 h-7 bg-gold flex items-center justify-center" style={{ borderRadius: '2px' }}>
                    <span className="font-assistant text-deep text-xs font-bold">{i + 1}</span>
                  </div>
                </div>

                <h3 className="font-playfair text-deep text-xl font-bold mb-3">{step.title}</h3>
                <p className="font-assistant text-deep/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile vertical */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-6 relative"
            >
              {/* Line */}
              {i < steps.length - 1 && (
                <div className="absolute top-16 right-6 w-px h-full bg-gold/20" />
              )}

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-deep border border-gold flex items-center justify-center z-10" style={{ borderRadius: '2px' }}>
                <step.icon size={20} className="text-gold" />
              </div>

              <div className="pb-10">
                <div className="font-assistant text-gold text-xs tracking-[0.2em] uppercase mb-1">{step.num}</div>
                <h3 className="font-playfair text-deep text-xl font-bold mb-2">{step.title}</h3>
                <p className="font-assistant text-deep/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}