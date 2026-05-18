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
    <section id="practice" className="section-padding bg-deep" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-assistant text-gold text-sm tracking-[0.3em] uppercase block mb-4">התחום שלי</span>
          <h2 className="font-playfair text-paper text-4xl lg:text-5xl">
            דיני{' '}
            <span className="text-gold">משפחה</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          <p className="font-assistant text-paper/60 text-base mt-6 max-w-xl mx-auto leading-relaxed">
            ליווי משפטי בתחומים הרגישים והמורכבים ביותר — תוך התאמה אישית לכל סיפור
          </p>
        </motion.div>

        {/* Practice Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-action border border-paper/5 p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:bg-action/80 hover:border-gold/40"
              style={{ borderRadius: '2px' }}
            >
              {/* Gold hover line */}
              <div className="absolute bottom-0 right-0 left-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
              
              {/* Icon */}
              <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300" style={{ borderRadius: '2px' }}>
                <area.icon size={22} className="text-gold" />
              </div>

              <h3 className="font-playfair text-paper text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                {area.title}
              </h3>
              
              <p className="font-assistant text-paper/60 text-sm leading-relaxed mb-4">
                {area.desc}
              </p>

              {/* Key Insight - fades in on hover */}
              <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500">
                <div className="pt-4 border-t border-gold/20">
                  <p className="font-assistant text-gold text-sm italic">
                    "{area.insight}"
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-2 text-gold/0 group-hover:text-gold transition-all duration-300">
                <span className="font-assistant text-sm">לפרטים נוספים</span>
                <span className="text-lg">←</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}