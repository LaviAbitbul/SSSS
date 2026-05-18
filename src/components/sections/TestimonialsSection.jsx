import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    text: 'הגעתי אלייך ממש אבוד ולא ידעתי איך להתמודד עם כל הסיטואציה הזאת ובאמת שעזרת לי לעשות סדר ולהירגע. זה לא מובן מאליו בכלל.',
    time: '22:31',
  },
  {
    text: 'תקשיבי, ממש ממש תודה. היה לי הכי חשוב לא לפגוע בקשר עם הילדים והצלחת לעזור לי להגיע להסדר שמרגיש נכון והוגן. זה שווה הכל מבחינתי.',
    time: '22:30',
  },
  {
    text: 'רק רציתי להגיד תודה. לא חשבתי שאפשר לעבור את זה בלי מלחמות ובסוף בזכותך הצלחנו להגיע להסכמות בצורה רגועה. מעריך מאוד.',
    time: '22:31',
  },
];

function WhatsAppBubble({ text, time }) {
  return (
    <div className="relative bg-paper shadow-[0_8px_30px_-10px_rgba(12,24,49,0.12)] px-5 py-4 max-w-full" style={{ borderRadius: '14px 14px 14px 4px' }}>
      <p className="font-assistant text-deep text-[15px] leading-[1.7] text-right">{text}</p>
      <div className="flex items-center gap-1 justify-end mt-2">
        <span className="font-assistant text-deep/35 text-[10px]">{time}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-green-600">
          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l5 5L24 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
        </svg>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="relative py-28 lg:py-40 overflow-hidden bg-paper" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="eyebrow mb-6 inline-flex justify-center">מילים אמיתיות</span>
          <h2 className="font-serif-display text-deep text-5xl lg:text-7xl font-bold leading-[1.05] mt-6">
            הודעות <span style={{ color: '#C5A059' }}>שקיבלתי</span>
          </h2>
          <p className="font-assistant text-deep/65 text-lg mt-6 leading-relaxed">
            לא ביקורות, לא פרסומות — הודעות שהגיעו אליי בסיום התהליך.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative rounded-3xl p-7"
              style={{
                background: i % 2 === 0
                  ? 'linear-gradient(135deg, #DCEEDF 0%, #E8F4EA 100%)'
                  : 'linear-gradient(135deg, #F2EADC 0%, #F8F1E3 100%)',
              }}
            >
              <WhatsAppBubble text={t.text} time={t.time} />
              <div className="mt-4 flex items-center gap-2 px-2">
                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center font-serif-display text-gold text-sm font-bold">
                  {['ר', 'מ', 'ע'][i]}
                </div>
                <div className="font-assistant text-deep/50 text-xs">לקוח/ה — סוף תהליך</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-assistant text-deep/40 text-xs text-center mt-12 max-w-md mx-auto"
        >
          * שמות הלקוחות הוסתרו לשמירה על פרטיותם. ההודעות פורסמו באישורם.
        </motion.p>
      </div>
    </section>
  );
}