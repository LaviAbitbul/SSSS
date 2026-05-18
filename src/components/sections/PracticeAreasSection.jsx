import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Baby, Scale, Home, FileText, HeartHandshake, ArrowLeft } from 'lucide-react';

const areas = [
  { icon: Users, title: 'גירושין', desc: 'ליווי מקצועי ורגיש בהליכי גירושין — מהשיחה הראשונה ועד סיום ההליך.' },
  { icon: Baby, title: 'אחריות הורית', desc: 'קביעת הסדרי שהות, אחריות הורית והגנה על הקשר עם הילדים.' },
  { icon: Scale, title: 'מזונות', desc: 'קביעת מזונות ילדים ומזונות אישה — באופן הוגן, מאוזן ובר-קיימא.' },
  { icon: Home, title: 'חלוקת רכוש', desc: 'איזון משאבים, חלוקת נכסים, דירת המגורים וזכויות פנסיוניות.' },
  { icon: HeartHandshake, title: 'הסכמים משפחתיים', desc: 'הסכמי ממון, הסכמי חיים משותפים, הסכמי גירושין והסכמי הורות.' },
  { icon: FileText, title: 'נושאים נוספים', desc: 'ייצוג בהליכים נוספים בדיני משפחה — בהתאמה אישית לכל סיפור.' },
];

export default function PracticeAreasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="practice" className="relative py-28 lg:py-40 overflow-hidden bg-paper" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20"
        >
          <div className="max-w-xl">
            <span className="eyebrow mb-6 inline-flex">תחומי התמחות</span>
            <h2 className="font-serif-display text-deep text-5xl lg:text-7xl font-bold leading-[1.05] mt-6">
              דיני
              <br />
              <span style={{ color: '#C5A059' }}>משפחה</span>
            </h2>
          </div>
          <p className="font-assistant text-deep/70 text-base lg:text-lg leading-[1.85] max-w-md">
            ליווי משפטי בתחומים הרגישים והמורכבים ביותר — תוך התאמה אישית לכל סיפור ומציאת הפתרון הנכון לכם.
          </p>
        </motion.div>

        {/* Areas — bordered grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-r border-deep/10">
          {areas.map((area, i) => (
            <motion.a
              key={area.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative p-10 lg:p-12 border-b border-l border-deep/10 cursor-pointer overflow-hidden transition-all duration-500 hover:bg-cream"
            >
              {/* Hover sweep */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gold origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                style={{ transformOrigin: 'right' }}
              />

              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 flex items-center justify-center text-deep group-hover:text-gold transition-colors duration-500">
                  <area.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="font-assistant text-deep/20 text-xs tracking-[0.25em] font-semibold pt-2 tabular-nums">
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-serif-display text-deep text-2xl lg:text-3xl font-bold mb-3 group-hover:text-gold transition-colors duration-400">
                {area.title}
              </h3>

              <p className="font-assistant text-deep/65 text-base leading-[1.8] mb-8">
                {area.desc}
              </p>

              <div className="flex items-center gap-2 font-assistant text-deep/50 text-sm group-hover:text-gold transition-colors duration-400">
                <span>קרא עוד</span>
                <ArrowLeft size={14} className="transition-transform duration-400 group-hover:-translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}