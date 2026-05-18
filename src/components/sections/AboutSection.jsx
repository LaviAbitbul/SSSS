import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const paragraphs = [
  {
    num: '01',
    title: 'מי אני?',
    text: 'אני נעמי בל גונן, עורכת דין לענייני משפחה. אני מלווה אנשים ומשפחות בתקופות שהן לרוב מהמורכבות, הרגישות והמטלטלות ביותר בחיים — מתוך אמונה שגם בתוך חוסר הוודאות, אפשר לעבור את התהליך בצורה אחרת.',
  },
  {
    num: '02',
    title: 'הערך שאני מביאה',
    text: 'אחד הדברים שהכי חשובים לי הוא שאנשים יבינו את הזכויות שלהם כבר מההתחלה. חוסר הידע הוא לרוב מה שהופך את התקופה לקשה יותר. כשמבינים את התמונה — מקבלים החלטות מתוך ביטחון, לא מתוך פחד.',
  },
  {
    num: '03',
    title: 'מקום בטוח',
    text: 'חשוב לי שכל אדם שמגיע אליי ירגיש שיש לו מקום לשאול, להתלבט, לפרוק ולהבין — ולקבל ליווי מקצועי לצד יחס אנושי, קשוב ומכבד.',
  },
  {
    num: '04',
    title: 'הגישה שלי',
    text: 'אני לא מאמינה שכל תהליך חייב להיות לוחמני. יש דרך לעשות את זה בצורה שקולה, רגישה ומדויקת — במיוחד כשיש ילדים ומשפחה בתמונה.',
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative section-padding overflow-hidden" style={{ background: '#FAF8F4' }} ref={sectionRef}>
      {/* Subtle soft orbs */}
      <div className="bg-blur-orb" style={{ width: '500px', height: '500px', background: '#C5A059', top: '10%', left: '-180px', opacity: 0.07 }} />
      <div className="bg-blur-orb" style={{ width: '400px', height: '400px', background: '#172A4C', bottom: '5%', right: '-150px', opacity: 0.06 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="inline-block font-assistant text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 bg-gold/10 rounded-full">קצת עליי</span>
          <h2 className="font-playfair text-deep text-4xl lg:text-6xl leading-tight">
            ליווי אנושי<br />
            <span className="text-gold italic">בתקופה רגישה.</span>
          </h2>
        </motion.div>

        {/* Paragraphs — creative staggered layout */}
        <div className="space-y-0">
          {paragraphs.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.25, 0.1, 0.25, 1] }}
                className={`relative flex ${isEven ? 'justify-start' : 'justify-end'} mb-6`}
              >
                <div
                  className={`group relative w-full lg:w-[65%] bg-white rounded-3xl p-8 lg:p-10 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-gold/20
                    ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}
                >
                  {/* Big number watermark */}
                  <div
                    className="absolute top-4 left-6 font-playfair font-bold text-[5rem] leading-none text-deep/[0.04] select-none pointer-events-none group-hover:text-gold/10 transition-colors duration-700"
                    aria-hidden="true"
                  >
                    {p.num}
                  </div>

                  <div className="relative z-10 flex gap-6 items-start">
                    {/* Gold number badge */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gold/10 group-hover:bg-gold flex items-center justify-center transition-all duration-500">
                      <span className="font-playfair text-gold group-hover:text-deep font-bold text-sm transition-colors duration-500">{p.num}</span>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-playfair text-deep text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="font-assistant text-deep/75 text-base lg:text-lg leading-[1.75]">
                        {p.text}
                      </p>
                    </div>
                  </div>

                  {/* Animated bottom accent */}
                  <div className="absolute bottom-0 right-8 left-8 h-0.5 bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/30 transition-all duration-700 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-16 relative rounded-[2.5rem] overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0C1831 0%, #172A4C 60%, #0C1831 100%)' }}
        >
          {/* Subtle particle glow inside quote */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(197,160,89,0.18) 0%, transparent 70%)' }}
          />
          <div className="relative z-10 p-12 lg:p-16 text-center">
            <span className="font-playfair text-gold text-7xl leading-none block mb-2 opacity-40">״</span>
            <p className="font-playfair text-paper text-xl lg:text-3xl leading-relaxed max-w-3xl mx-auto italic">
              המטרה שלי היא לא רק לייצג אתכם משפטית — אלא גם לעזור לכם לעבור את התקופה הזו עם יותר סדר, יותר הבנה ותחושת ליווי אמיתית לאורך כל הדרך.
            </p>
            <div className="font-assistant text-gold text-sm mt-8 tracking-[0.2em]">— נעמי בל גונן</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}