import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-28 lg:py-40 overflow-hidden bg-paper" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Eyebrow + header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <span className="eyebrow mb-6 inline-flex">קצת עליי</span>
          <h2 className="font-serif-display text-deep text-5xl lg:text-7xl font-bold leading-[1.05] mt-6">
            ליווי אנושי
            <br />
            <span style={{ color: '#C5A059' }}>בתקופה רגישה.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Portrait — sticky */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold/30 rounded-3xl pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden bg-deep shadow-[0_25px_60px_-20px_rgba(12,24,49,0.3)]" style={{ aspectRatio: '4/5' }}>
                <img
                  src="https://media.base44.com/images/public/6a007126836a528637f76d81/781d34657_image.png"
                  alt="עו״ד נעמי בל גונן"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent" />

                {/* Quote overlay */}
                <div className="absolute bottom-0 right-0 left-0 p-6 lg:p-8">
                  <div className="font-serif-display text-paper text-base lg:text-lg leading-relaxed">
                    <span className="font-serif-display text-gold text-3xl leading-none">״</span>
                    גם בתוך חוסר הוודאות, אפשר לעבור את התהליך בצורה אחרת.
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