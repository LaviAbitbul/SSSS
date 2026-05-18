import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Award, Target } from 'lucide-react';

const coreValues = [
  {
    icon: Shield,
    title: 'מקום בטוח',
    desc: 'מרחב שבו אפשר לשאול, להתלבט ולפרוק — תוך יחס אנושי, קשוב ומכבד.',
  },
  {
    icon: Award,
    title: 'הבנה מההתחלה',
    desc: 'שקיפות מלאה על הזכויות והאפשרויות שלכם — כדי לקבל החלטות מתוך ביטחון.',
  },
  {
    icon: Target,
    title: 'גישה שקולה',
    desc: 'לא לוחמני כברירת מחדל. מדויק ורגיש — במיוחד כשיש ילדים בתמונה.',
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-paper" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-assistant text-gold text-sm tracking-[0.3em] uppercase block mb-4">קצת עליי</span>
          <h2 className="font-playfair text-deep text-4xl lg:text-5xl gilded-line inline-block">
            ליווי אנושי בתקופה רגישה
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden" style={{ borderRadius: '2px' }}>
              <img
                src="https://media.base44.com/images/public/6a007126836a528637f76d81/35c0cc8c5_image.png"
                alt="עו&quot;ד נעמי בל גונן"
                className="w-full h-[600px] object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
            </div>
            {/* Floating signature card */}
            <div className="absolute -bottom-8 -left-8 bg-deep text-paper px-8 py-6 shadow-2xl max-w-[220px]" style={{ borderRadius: '2px' }}>
              <div className="font-playfair text-gold text-lg font-bold leading-tight">עו"ד נעמי בל גונן</div>
              <div className="font-assistant text-paper/70 text-xs mt-1">דיני משפחה · אילת</div>
            </div>
            {/* Gold corner accent */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-gold" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <h3 className="font-playfair text-deep text-3xl mb-6">
              עו"ד נעמי בל גונן
            </h3>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <p className="font-assistant text-deep/80 leading-relaxed mb-5 text-base">
              היי, אני נעמי בל גונן, עורכת דין לענייני משפחה. אני מלווה אנשים ומשפחות בתקופות שהן לרוב מהמורכבות, הרגישות והמטלטלות ביותר בחיים — מתוך אמונה שגם בתוך חוסר הוודאות, אפשר לעבור את התהליך בצורה אחרת. רגועה יותר, ברורה יותר ומדויקת יותר.
            </p>
            <p className="font-assistant text-deep/70 leading-relaxed mb-5 text-base">
              אחד הדברים שהכי חשובים לי הוא שאנשים יבינו את הזכויות שלהם כבר מההתחלה. הרבה פעמים, דווקא חוסר הידע והפחד מהלא נודע הם מה שהופכים את התקופה לקשה יותר. כאשר מבינים את התמונה בצורה נכונה, אפשר לקבל החלטות מתוך ביטחון ולא מתוך לחץ, פחד או בלבול.
            </p>
            <p className="font-assistant text-deep/70 leading-relaxed mb-5 text-base">
              חשוב לי שכל אדם שמגיע אליי ירגיש שיש לו מקום בטוח. מקום שאפשר לשאול בו שאלות, להתלבט, לפרוק, להבין מה האפשרויות שעומדות בפניו — ולקבל ליווי מקצועי לצד יחס אנושי, קשוב ומכבד.
            </p>
            <p className="font-assistant text-deep/70 leading-relaxed mb-8 text-base">
              אני לא מאמינה שכל תהליך חייב להיות לוחמני. יש מקרים שבהם צריך לעמוד בצורה חד משמעית על הזכויות והאינטרסים של הלקוח — אבל יש גם דרך לעשות את זה בצורה שקולה, רגישה ומדויקת יותר, במיוחד כשיש ילדים ומשפחה בתמונה.
            </p>

            {/* Core Values */}
            <div className="space-y-4">
              {coreValues.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors" style={{ borderRadius: '2px' }}>
                    <val.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-deep text-lg font-semibold mb-1">{val.title}</h4>
                    <p className="font-assistant text-deep/60 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-deep p-10 lg:p-14 text-center relative overflow-hidden"
          style={{ borderRadius: '2px' }}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gold" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gold" />
          <span className="font-playfair text-gold text-6xl leading-none block mb-4">״</span>
          <p className="font-playfair text-paper text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto italic">
            המטרה שלי היא לא רק לייצג אתכם משפטית — אלא גם לעזור לכם לעבור את התקופה הזו עם יותר סדר, יותר הבנה ותחושת ליווי אמיתית לאורך כל הדרך.
          </p>
          <div className="font-assistant text-gold text-sm mt-6 tracking-widest">— נעמי בל גונן</div>
        </motion.div>
      </div>
    </section>
  );
}