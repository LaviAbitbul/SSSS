import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Briefcase, Scale, Home, FileText, Gavel } from 'lucide-react';

const areas = [
  {
    icon: Users,
    title: 'דיני משפחה וגירושין',
    desc: 'ליווי מקצועי ואנושי בהליכי גירושין, גישור, הסכמי ממון ופרידה.',
    insight: 'כל משפחה היא עולם בפני עצמה. אנחנו מקשיבים, מבינים ופועלים.',
    color: '#C5A059',
  },
  {
    icon: Scale,
    title: 'מזונות ומשמורת',
    desc: 'הגנה על זכויות הילד וקביעת הסדרי שהות ומזונות הוגנים.',
    insight: 'טובת הילד היא הנר המנחה בכל תיק שאנו מטפלים בו.',
    color: '#C5A059',
  },
  {
    icon: Briefcase,
    title: 'דיני עבודה',
    desc: 'ייצוג עובדים ומעסיקים בסכסוכי עבודה, פיטורין שלא כדין וזכויות עובדים.',
    insight: 'כל עובד ראוי לקבל את מה שמגיע לו. אנחנו כאן להבטיח זאת.',
    color: '#C5A059',
  },
  {
    icon: Gavel,
    title: 'הוצאה לפועל',
    desc: 'ניהול הליכי גבייה, עיקולים, מימוש נכסים וייצוג בלשכות הוצאה לפועל.',
    insight: 'ניסיון רב בהליכי גבייה אפקטיביים ומהירים.',
    color: '#C5A059',
  },
  {
    icon: FileText,
    title: 'פשיטת רגל',
    desc: 'הליכי חדלות פירעון, שיקום כלכלי, מחיקת חובות ותוכניות הבראה.',
    insight: 'גם בנקודת הנמוך ביותר, יש דרך קדימה. אנחנו נמצא אותה יחד.',
    color: '#C5A059',
  },
  {
    icon: Home,
    title: 'נדל"ן וחוזים',
    desc: 'ליווי עסקאות נדל"ן, בדיקת חוזים, רישום זכויות ופתרון מחלוקות.',
    insight: 'כל עסקה מחייבת בדיקה מדוקדקת לפני החתימה.',
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
          <span className="font-assistant text-gold text-sm tracking-[0.3em] uppercase block mb-4">המומחיות שלנו</span>
          <h2 className="font-playfair text-paper text-4xl lg:text-5xl">
            תחומי{' '}
            <span className="text-gold">עיסוק</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          <p className="font-assistant text-paper/60 text-base mt-6 max-w-xl mx-auto leading-relaxed">
            ייצוג מקצועי ומסור בכל תחומי הדין הרלוונטיים לחייכם
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