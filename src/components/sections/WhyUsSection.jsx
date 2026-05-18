import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Eye, Shield, Leaf, Phone } from 'lucide-react';

const advantages = [
  {
    icon: Heart,
    title: 'יחס אנושי',
    desc: 'מקום בטוח לשאול, להתלבט ולפרוק — לצד ליווי מקצועי, קשוב ומכבד.',
  },
  {
    icon: Eye,
    title: 'הבנה מההתחלה',
    desc: 'אני דואגת שתבינו את הזכויות והאפשרויות שלכם — כדי לקבל החלטות מתוך ביטחון.',
  },
  {
    icon: Leaf,
    title: 'גישה שקולה',
    desc: 'לא כל תהליך חייב להיות לוחמני. אפשר לעשות את זה בצורה רגועה ומדויקת.',
  },
  {
    icon: Shield,
    title: 'התמקדות בילדים',
    desc: 'כשיש ילדים ומשפחה בתמונה — נדרשת רגישות מיוחדת ומבט ארוך טווח.',
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why" className="relative section-padding overflow-hidden" style={{ background: '#FAF8F4' }} ref={ref}>
      {/* Soft orbs */}
      <div className="bg-blur-orb" style={{ width: '500px', height: '500px', background: '#C5A059', bottom: '10%', right: '-150px', opacity: 0.08 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-12 items-end mb-20"
        >
          <div>
            <span className="inline-block font-assistant text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 bg-gold/10 rounded-full">הגישה שלי</span>
            <h2 className="font-playfair text-deep text-4xl lg:text-6xl leading-tight">
              למה לבחור<br />
              <span className="text-gold italic">בליווי שלי</span>
            </h2>
          </div>
          <p className="font-assistant text-deep/70 text-base lg:text-lg leading-relaxed">
            המטרה שלי היא לא רק לייצג אתכם משפטית, אלא גם לעזור לכם לעבור את התקופה הזו עם יותר סדר, יותר הבנה ותחושת ליווי אמיתית לאורך כל הדרך.
          </p>
        </motion.div>

        {/* Advantages Grid — Light cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-white p-8 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-gold/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-cream group-hover:bg-gold flex items-center justify-center mb-5 transition-all duration-500 group-hover:rotate-6">
                <adv.icon size={24} className="text-gold group-hover:text-deep transition-colors duration-500" />
              </div>

              <h3 className="font-playfair text-deep text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                {adv.title}
              </h3>
              <p className="font-assistant text-deep/65 text-sm leading-relaxed">
                {adv.desc}
              </p>

              {/* Animated accent */}
              <div className="w-8 h-0.5 bg-gold/40 mt-5 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 relative bg-gradient-to-br from-deep via-deep-soft to-deep p-12 lg:p-16 text-center rounded-[2.5rem] overflow-hidden shadow-soft-lg"
        >
          {/* Decorative orbs */}
          <div className="bg-blur-orb" style={{ width: '300px', height: '300px', background: '#C5A059', top: '-50px', right: '-50px', opacity: 0.3 }} />
          <div className="bg-blur-orb" style={{ width: '250px', height: '250px', background: '#C5A059', bottom: '-80px', left: '-50px', opacity: 0.2 }} />

          <div className="relative z-10">
            <h3 className="font-playfair text-paper text-3xl lg:text-5xl mb-4 leading-tight">
              רוצים לדבר? <span className="text-gold italic">אני כאן</span>
            </h3>
            <p className="font-assistant text-paper/70 text-base lg:text-lg mb-10 max-w-lg mx-auto">
              השלב הראשון הוא השיחה. בלי התחייבות, בלי לחץ — פשוט שיחה להבין את התמונה.
            </p>
            <a
              href="tel:+972509762087"
              className="inline-flex items-center gap-3 bg-gold text-deep px-10 py-4 font-assistant font-bold text-base rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-[1.03] shadow-gold-glow"
            >
              <Phone size={18} />
              050-976-2087 — התקשרו עכשיו
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}