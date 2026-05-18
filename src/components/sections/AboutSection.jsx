import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

const paragraphs = [
  {
    num: '01',
    title: 'מי אני',
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

const values = [
  'אמינות',
  'רגישות',
  'מקצועיות',
  'שקיפות',
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-40 overflow-hidden bg-paper" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Eyebrow + header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20 max-w-3xl"
        >
          <span className="eyebrow mb-6 inline-flex">קצת עליי</span>
          <h2
            className="font-serif-display text-deep font-bold leading-[1.05] mt-6"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 5rem)' }}
          >
            ליווי אנושי
            <br />
            <span style={{ color: '#C5A059' }}>בתקופה רגישה.</span>
          </h2>
          <div className="gold-accent" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Quote Card — sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative">
              {/* Decorative gold corner frame */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-gold/40 rounded-tr-3xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l border-gold/40 rounded-bl-3xl pointer-events-none" />

              {/* Main quote card */}
              <div className="relative rounded-3xl overflow-hidden bg-deep p-8 sm:p-10 lg:p-12 shadow-[0_25px_60px_-20px_rgba(12,24,49,0.3)]">
                {/* Soft gold glow background */}
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background:
                      'radial-gradient(circle at 20% 20%, rgba(197,160,89,0.18) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(197,160,89,0.10) 0%, transparent 50%)',
                  }}
                />

                <div className="relative z-10">
                  {/* Quote mark */}
                  <Quote size={48} className="text-gold mb-6" strokeWidth={1.2} style={{ transform: 'scaleX(-1)' }} />

                  {/* Headline quote */}
                  <p className="font-serif-display text-paper text-2xl sm:text-3xl lg:text-[2rem] leading-[1.3] font-medium mb-8">
                    גם בתוך חוסר הוודאות, אפשר לעבור את התהליך{' '}
                    <span style={{ color: '#C5A059' }} className="italic">בצורה אחרת.</span>
                  </p>

                  {/* Divider */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-gold" />
                    <Sparkles size={14} className="text-gold" />
                    <div className="h-px flex-1 bg-gold/20" />
                  </div>

                  {/* Signature */}
                  <div className="mb-8">
                    <div className="font-serif-display text-paper text-lg font-bold">נעמי בל גונן</div>
                    <div className="font-assistant text-paper/60 text-xs tracking-[0.2em] uppercase mt-1">עורכת דין לדיני משפחה</div>
                  </div>

                  {/* Values chips */}
                  <div className="flex flex-wrap gap-2">
                    {values.map((v) => (
                      <span
                        key={v}
                        className="font-assistant text-paper/80 text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-paper/15 bg-paper/[0.04] backdrop-blur-sm"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Paragraphs */}
          <div className="lg:col-span-7 space-y-12 lg:space-y-16">
            {paragraphs.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                className="relative pr-10 lg:pr-14"
              >
                {/* Number */}
                <div className="absolute right-0 top-0 font-assistant text-gold/70 text-xs tracking-[0.25em] font-semibold tabular-nums">
                  {p.num}
                </div>
                {/* Vertical line */}
                <div className="absolute right-3 top-6 bottom-0 w-px bg-gradient-to-b from-gold/40 to-transparent" />

                <h3 className="font-serif-display text-deep text-2xl lg:text-3xl font-bold mb-4">
                  {p.title}
                </h3>
                <p className="font-assistant text-deep/75 text-base lg:text-lg leading-[1.85]">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}