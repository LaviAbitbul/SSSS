import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserCheck, Clock, Eye, TrendingUp } from 'lucide-react';

const advantages = [
  {
    icon: UserCheck,
    title: 'ליווי אישי',
    desc: 'כל לקוח מקבל תשומת לב מלאה. עו"ד גונן עצמה תלווה את התיק שלכם מהתחלה ועד הסוף.',
  },
  {
    icon: Clock,
    title: 'זמינות 24/7',
    desc: 'שעת חירום משפטית? אנחנו כאן. זמינות מלאה גם מחוץ לשעות העבודה המסורתיות.',
  },
  {
    icon: Eye,
    title: 'שקיפות מלאה',
    desc: 'עדכונים שוטפים, הסברים ברורים ועלויות ידועות מראש. אין הפתעות.',
  },
  {
    icon: TrendingUp,
    title: 'תשלום לפי תוצאה',
    desc: 'במקרים מסוימים, מאמינים בכם – ומוכנים לשאת בסיכון יחד איתכם.',
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why" className="section-padding bg-paper relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <span className="font-assistant text-gold text-sm tracking-[0.3em] uppercase block mb-4">היתרון שלנו</span>
            <h2 className="font-playfair text-deep text-4xl lg:text-5xl leading-tight">
              למה לבחור<br />
              <span className="text-gold">במשרד שלנו</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mt-6" />
          </div>
          <div>
            <p className="font-assistant text-deep/70 text-base leading-relaxed">
              לא רק שירות משפטי – ליווי אישי בתקופה מאתגרת בחייכם. הגישה האישית, המקצועית והאמינה הפכה את עו"ד גונן לכתובת הראשונה עבור מאות לקוחות מאילת והסביבה.
            </p>
          </div>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group text-center"
            >
              {/* Icon Container */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-deep rotate-45 group-hover:rotate-[55deg] transition-transform duration-500" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <adv.icon size={28} className="text-gold" />
                </div>
              </div>

              <h3 className="font-playfair text-deep text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                {adv.title}
              </h3>
              <p className="font-assistant text-deep/60 text-sm leading-relaxed">
                {adv.desc}
              </p>

              {/* Bottom accent line */}
              <div className="w-8 h-0.5 bg-gold/40 mx-auto mt-4 group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 bg-deep p-12 text-center relative overflow-hidden"
          style={{ borderRadius: '2px' }}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gold" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gold" />
          <h3 className="font-playfair text-paper text-3xl mb-4">
            מוכן לייעוץ ראשוני <span className="text-gold">חינם</span>?
          </h3>
          <p className="font-assistant text-paper/60 text-base mb-8 max-w-lg mx-auto">
            השלב הראשון הוא השיחה. צלצלו עכשיו ונבנה יחד את האסטרטגיה הנכונה לכם.
          </p>
          <a
            href="tel:+972509762087"
            className="inline-flex items-center gap-3 bg-gold text-deep px-10 py-4 font-assistant font-bold text-base hover:bg-gold-light transition-all duration-300 hover:scale-[1.02]"
            style={{ borderRadius: '2px' }}
          >
            ✦ 050-976-2087 — התקשרו עכשיו
          </a>
        </motion.div>
      </div>
    </section>
  );
}