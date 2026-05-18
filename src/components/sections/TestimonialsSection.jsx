import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    text: 'היי נעמי,\nרציתי להגיד לך תודה על הכל 🙏\nהגעתי אלייך ממש אבוד ולא ידעתי איך להתמודד עם כל הסיטואציה הזאת ובאמת שעזרת לי לעשות סדר ולהירגע\nזה לא מובן מאליו בכלל',
    time: '22:31',
  },
  {
    text: 'נעמי תקשיבי ממש ממש תודה 🙏\nהיה לי הכי חשוב לא לפגוע בקשר עם הילדים והצלחת לעזור לי להגיע להסדר שמרגיש נכון והוגן\nזה שווה הכל מבחינתי 🙏',
    time: '22:30',
  },
  {
    text: 'נעמי בוקר טוב,\nרק רציתי להגיד תודה\nלא חשבתי שאפשר לעבור את זה בלי מלחמות ובסוף בזכותך הצלחנו להגיע להסכמות בצורה רגועה\nמעריך מאוד 🙏',
    time: '22:31',
  },
];

function WhatsAppBubble({ text, time }) {
  return (
    <div className="relative bg-white shadow-md px-4 py-3 max-w-full" style={{ borderRadius: '12px 12px 12px 4px' }}>
      <p className="font-assistant text-deep text-sm md:text-base leading-relaxed whitespace-pre-line text-right">
        {text}
      </p>
      <div className="font-assistant text-deep/40 text-[10px] mt-2 text-left">{time}</div>
      {/* WhatsApp tail */}
      <div
        className="absolute -bottom-0 -left-2 w-0 h-0"
        style={{
          borderTop: '8px solid white',
          borderLeft: '8px solid transparent',
        }}
      />
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="section-padding bg-paper relative overflow-hidden" ref={ref}>
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #0F172A 0, #0F172A 1px, transparent 0, transparent 50%)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-assistant text-gold text-sm tracking-[0.3em] uppercase block mb-4">תודות אמיתיות מלקוחות</span>
          <h2 className="font-playfair text-deep text-4xl lg:text-5xl">
            הודעות <span className="text-gold">שקיבלתי</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          <p className="font-assistant text-deep/60 text-base mt-6 max-w-lg mx-auto leading-relaxed">
            לא ביקורות, לא פרסומות — הודעות שהגיעו אליי בסיום התהליך.
          </p>
        </motion.div>

        {/* Bubbles Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
              style={{
                background: i % 2 === 0 ? 'linear-gradient(135deg, #E5F1E8 0%, #F0F7F1 100%)' : 'linear-gradient(135deg, #F5EFE6 0%, #FAF5EC 100%)',
                borderRadius: '4px',
                padding: '2.5rem 1.5rem',
              }}
            >
              <WhatsAppBubble text={t.text} time={t.time} />
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-assistant text-deep/40 text-xs text-center mt-12 max-w-md mx-auto"
        >
          * שמות הלקוחות הוסתרו לשמירה על פרטיותם. ההודעות פורסמו באישורם.
        </motion.p>
      </div>
    </section>
  );
}