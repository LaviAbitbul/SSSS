import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Baby, Scale, Home, FileText, HeartHandshake } from 'lucide-react';

const areas = [
  {
    icon: Users,
    title: 'גירושין',
    desc: 'ליווי מקצועי ורגיש בהליכי גירושין — מהשיחה הראשונה ועד סיום ההליך.',
    insight: 'אפשר לעבור את התהליך הזה רגוע יותר, ברור יותר ומדויק יותר.',
    color: '#C5A059',
  },
  {
    icon: Baby,
    title: 'אחריות הורית',
    desc: 'קביעת הסדרי שהות, אחריות הורית והגנה על הקשר עם הילדים.',
    insight: 'כשיש ילדים בתמונה — נדרשת רגישות מיוחדת ומבט ארוך טווח.',
    color: '#C5A059',
  },
  {
    icon: Scale,
    title: 'מזונות',
    desc: 'קביעת מזונות ילדים ומזונות אישה — באופן הוגן, מאוזן ובר-קיימא.',
    insight: 'הסדר נכון הוא כזה שמרגיש נכון והוגן לכל הצדדים.',
    color: '#C5A059',
  },
  {
    icon: Home,
    title: 'חלוקת רכוש',
    desc: 'איזון משאבים, חלוקת נכסים, דירת המגורים וזכויות פנסיוניות.',
    insight: 'דורש סדר, שקיפות והבנה של התמונה המלאה.',
    color: '#C5A059',
  },
  {
    icon: HeartHandshake,
    title: 'הסכמים משפחתיים',
    desc: 'הסכמי ממון, הסכמי חיים משותפים, הסכמי גירושין והסכמי הורות.',
    insight: 'הסכם טוב נבנה מתוך הקשבה — לא מתוך מאבק.',
    color: '#C5A059',
  },
  {
    icon: FileText,
    title: 'נושאים נוספים בדיני משפחה',
    desc: 'ייצוג בהליכים נוספים בדיני משפחה — בהתאמה אישית לכל סיפור.',
    insight: 'כל משפחה היא עולם בפני עצמו, וכל מקרה מקבל מענה מותאם.',
    color: '#C5A059',
  },
];

export default function PracticeAreasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="practice" className="section-padding overflow-hidden" style={{ background: '#F4F0E8' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-assistant text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 bg-gold/10 rounded-full">התחום שלי</span>
          <h2 className="font-playfair text-deep text-4xl lg:text-6xl leading-tight">
            דיני{' '}
            <span className="text-gold italic">משפחה</span>
          </h2>
          <p className="font-assistant text-deep/60 text-base mt-6 max-w-xl mx-auto leading-relaxed">
            ליווי משפטי בתחומים הרגישים והמורכבים ביותר — תוך התאמה אישית לכל סיפור
          </p>
        </motion.div>

        {/* Practice Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1 border border-transparent hover:border-gold/30 rounded-3xl"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center mb-6 group-hover:bg-gold transition-all duration-300">
                <area.icon size={22} className="text-gold group-hover:text-deep transition-colors duration-300" />
              </div>

              <h3 className="font-playfair text-deep text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                {area.title}
              </h3>
              
              <p className="font-assistant text-deep/65 text-sm leading-relaxed mb-4">
                {area.desc}
              </p>

              {/* Animated accent */}
              <div className="w-8 h-0.5 bg-gold/40 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}