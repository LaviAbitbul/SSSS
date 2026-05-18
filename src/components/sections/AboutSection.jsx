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
      <div className="bg-blur-orb" style={{ width: '500px', height: '500px', background: '#C5A059', top: '10%', left: '-180px', opacity: 0.07 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-block font-assistant text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 bg-gold/10 rounded-full">קצת עליי</span>
          <h2 className="font-playfair text-deep text-4xl lg:text-6xl leading-tight">
            ליווי אנושי<br />
            <span className="text-gold italic">בתקופה רגישה.</span>
          </h2>
        </motion.div>

        {/* Main content: image left + paragraphs right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Photo — sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-soft-lg">
              <img
                src="https://media.base44.com/images/public/6a007126836a528637f76d81/781d34657_image.png"
                alt="עו״ד נעמי בל גונן"
                className="w-full object-cover object-top"
                style={{ aspectRatio: '4/5' }}
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep/30 via-transparent to-transparent" />
            </div>

            {/* Name card below image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-4 bg-white rounded-2xl px-6 py-4 shadow-soft flex items-center justify-between"
            >
              <div>
                <div className="font-playfair text-deep text-lg font-bold">עו״ד נעמי בל גונן</div>
                <div className="font-assistant text-deep/50 text-xs mt-0.5">דיני משפחה · אילת</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Paragraphs */}
          <div className="lg:col-span-7 space-y-5">
            {paragraphs.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
                className="group bg-white rounded-3xl p-7 lg:p-9 shadow-soft hover:shadow-soft-lg transition-all duration-400 hover:-translate-y-0.5 border border-transparent hover:border-gold/20"
              >
                <div className="flex gap-5 items-start">
                  {/* Number badge */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-gold/10 group-hover:bg-gold flex items-center justify-center transition-all duration-400">
                    <span className="font-playfair text-gold group-hover:text-deep font-bold text-sm transition-colors duration-400">{p.num}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-playfair text-deep text-xl font-bold mb-2 group-hover:text-gold transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="font-assistant text-deep text-base lg:text-[17px] leading-[1.8] opacity-75">
                      {p.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative rounded-[2rem] overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0C1831 0%, #172A4C 60%, #0C1831 100%)' }}
            >
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(197,160,89,0.15) 0%, transparent 70%)' }}
              />
              <div className="relative z-10 p-8 lg:p-10 text-center">
                <span className="font-playfair text-gold text-6xl leading-none block mb-2 opacity-40">״</span>
                <p className="font-playfair text-paper text-lg lg:text-2xl leading-relaxed max-w-2xl mx-auto italic">
                  המטרה שלי היא לא רק לייצג אתכם משפטית — אלא גם לעזור לכם לעבור את התקופה הזו עם יותר סדר, יותר הבנה ותחושת ליווי אמיתית לאורך כל הדרך.
                </p>
                <div className="font-assistant text-gold text-sm mt-6 tracking-[0.2em]">— נעמי בל גונן</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}