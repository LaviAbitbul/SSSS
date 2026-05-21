import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Eye, Shield, Leaf, MessageCircle, ArrowLeft } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const advantages = [
  {
    icon: Heart,
    title: 'יחס אנושי',
    desc: 'מקום בטוח לשאול, להתלבט ולפרוק - לצד ליווי מקצועי, קשוב ומכבד.',
  },
  {
    icon: Eye,
    title: 'הבנה מההתחלה',
    desc: 'אני דואגת שתבינו את הזכויות והאפשרויות שלכם - כדי לקבל החלטות מתוך ביטחון.',
  },
  {
    icon: Leaf,
    title: 'גישה שקולה',
    desc: 'לא כל תהליך חייב להיות לוחמני. אפשר לעשות את זה בצורה רגועה ומדויקת.',
  },
  {
    icon: Shield,
    title: 'התמקדות בילדים',
    desc: 'כשיש ילדים ומשפחה בתמונה - נדרשת רגישות מיוחדת ומבט ארוך טווח.',
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const trackWhatsappClick = async () => {
    try {
      await base44.entities.WhatsappClick.create({
        source: 'why_us_cta',
        page_path: window.location.pathname,
        user_agent: navigator.userAgent,
      });
    } catch (e) {
      // Silent fail
    }
  };

  return (
    <section id="why" className="relative py-28 lg:py-40 overflow-hidden bg-cream" ref={ref}>
      {/* Top thin separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-deep/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="eyebrow mb-6 inline-flex justify-center">הגישה שלי</span>
          <h2
            className="font-serif-display text-deep font-bold leading-[1.05] mt-6"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 5rem)' }}
          >
            למה לבחור <span style={{ color: '#C5A059' }}>בליווי שלי</span>
          </h2>
          <div className="gold-accent gold-accent-center" />
          <p className="font-assistant text-deep/70 text-base lg:text-lg leading-[1.85] max-w-2xl mx-auto mt-6">
            המטרה שלי היא לא רק לייצג אתכם משפטית, אלא גם לעזור לכם לעבור את התקופה הזו עם יותר סדר, יותר הבנה ותחושת ליווי אמיתית לאורך כל הדרך.
          </p>
        </motion.div>

        {/* Advantages — minimalist editorial cards */}
        <div className="grid md:grid-cols-2 gap-px bg-deep/10 rounded-3xl overflow-hidden">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group bg-paper p-10 lg:p-12 transition-all duration-500 hover:bg-white relative overflow-hidden"
            >
              {/* Hover bg accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-deep/5 group-hover:bg-gold flex items-center justify-center transition-all duration-500">
                    <adv.icon size={22} className="text-deep group-hover:text-paper transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <span className="font-assistant text-deep/15 text-3xl font-bold leading-none group-hover:text-gold/40 transition-colors duration-500 tabular-nums">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-serif-display text-deep text-2xl lg:text-3xl font-bold mb-4">
                  {adv.title}
                </h3>
                <p className="font-assistant text-deep/65 text-base leading-[1.8]">
                  {adv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner — refined */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative bg-deep rounded-3xl overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(197,160,89,0.18) 0%, transparent 60%)' }} />
          <div className="noise-overlay" />

          <div className="relative z-10 grid md:grid-cols-[1fr_auto] items-center gap-8 p-10 lg:p-14">
            <div>
              <h3 className="font-serif-display text-paper text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                רוצים לדבר? <span style={{ color: '#C5A059' }}>אני כאן.</span>
              </h3>
              <p className="font-assistant text-paper/60 text-base lg:text-lg leading-relaxed max-w-lg">
                השלב הראשון הוא השיחה. בלי התחייבות, בלי לחץ - פשוט שיחה להבין את התמונה.
              </p>
            </div>
            <a
              href="https://wa.me/972509762087"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsappClick}
              className="group inline-flex items-center gap-3 bg-gold text-deep px-7 py-4 font-assistant font-medium text-base rounded-full hover:bg-gold-light transition-all duration-400 whitespace-nowrap"
            >
              <MessageCircle size={17} strokeWidth={2} />
              <span>שלחו הודעה בוואטסאפ</span>
              <ArrowLeft size={16} className="transition-transform duration-400 group-hover:-translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}