import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Award, Target } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const coreValues = [
  {
    icon: Shield,
    title: 'מקצועיות',
    desc: 'ניסיון רב שנים וידע משפטי מעמיק בכל תחום שאנו מטפלים בו.',
  },
  {
    icon: Award,
    title: 'אמינות',
    desc: 'שקיפות מלאה לאורך כל ההליך המשפטי. אתם תמיד מעודכנים.',
  },
  {
    icon: Target,
    title: 'תוצאות',
    desc: 'מחויבות לתוצאה המיטבית עבורכם בכל תיק ותיק.',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'תיקים שטופלו' },
  { value: 15, suffix: '+', label: 'שנות ניסיון' },
  { value: 98, suffix: '%', label: 'שביעות רצון' },
  { value: 3, suffix: '', label: 'פרסים מקצועיים' },
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
          <span className="font-assistant text-gold text-sm tracking-[0.3em] uppercase block mb-4">אודות המשרד</span>
          <h2 className="font-playfair text-deep text-4xl lg:text-5xl gilded-line inline-block">
            ניסיון, מחויבות, תוצאות
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
                src="https://media.base44.com/images/public/6a007126836a528637f76d81/23bb3f543_image.png"
                alt="עו&quot;ד נעמי גונן"
                className="w-full h-[500px] object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-deep text-paper px-8 py-6 shadow-2xl" style={{ borderRadius: '2px' }}>
              <div className="font-playfair text-gold text-4xl font-bold leading-none">15+</div>
              <div className="font-assistant text-paper/70 text-sm mt-1">שנות ניסיון</div>
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
              עו"ד נעמי גונן
            </h3>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <p className="font-assistant text-deep/70 leading-relaxed mb-6 text-base">
              עורכת דין נעמי גונן היא אחת מעורכות הדין המובילות באילת, עם ניסיון של למעלה מ-15 שנה בייצוג לקוחות בתיקים משפטיים מורכבים. בוגרת הפקולטה למשפטים, התמחתה בדיני משפחה ודיני עבודה.
            </p>
            <p className="font-assistant text-deep/70 leading-relaxed mb-8 text-base">
              הגישה האישית, הקשובה והמקצועית שלה הפכה אותה לכתובת המרכזית עבור מאות לקוחות המחפשים ייצוג אמין ויעיל. עו"ד גונן מאמינה שכל לקוח ראוי לקבל את מירב תשומת הלב והמאמץ, תוך שמירה על כבודו ופרטיותו.
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

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/20 border border-gold/20"
          style={{ borderRadius: '2px' }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="bg-paper text-center py-10 px-6">
              <div className="font-playfair text-gold text-4xl lg:text-5xl font-bold mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-assistant text-deep/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}