import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'כמה עולה פגישת ייעוץ ראשונה?',
    a: 'שיחת היכרות ראשונית בטלפון או בוואטסאפ היא ללא עלות. פגישת ייעוץ מעמיקה במשרד היא בתשלום סמלי, ובמהלכה תקבלו סקירה מלאה של הזכויות והאפשרויות העומדות בפניכם.',
  },
  {
    q: 'כמה זמן לוקח הליך גירושין?',
    a: 'אין תשובה אחת — זה תלוי במורכבות התיק, ברמת ההסכמה בין הצדדים ובסוגיות הספציפיות (ילדים, רכוש, מזונות). הליך בהסכמה יכול להסתיים תוך מספר חודשים, בעוד הליך מורכב יכול להתארך זמן רב יותר. במהלך השיחה הראשונה אוכל לתת לכם הערכה ראלית.',
  },
  {
    q: 'האם חובה להגיע לבית משפט?',
    a: 'לא בהכרח. ברוב המקרים אני שואפת להגיע להסדר מחוץ לכותלי בית המשפט — באמצעות גישור, משא ומתן או הסכם גירושין. רק כשאין ברירה, פונים להליך משפטי מלא.',
  },
  {
    q: 'איך נקבעים מזונות ילדים?',
    a: 'מזונות נקבעים על פי הצרכים של הילדים, היכולת הכלכלית של ההורים, חלוקת זמני השהות והפסיקה העדכנית של בית המשפט העליון. כל מקרה נבחן לגופו, ואני אעזור לכם להבין בדיוק מה ההשלכות במקרה שלכם.',
  },
  {
    q: 'מה זה הסכם ממון ומתי כדאי לערוך אותו?',
    a: 'הסכם ממון מסדיר מראש את חלוקת הרכוש בין בני זוג — לפני או במהלך הנישואין. הוא מתאים לזוגות עם נכסים קודמים, ילדים מקשר קודם, או פשוט מי שמעדיף ודאות. ההסכם מגן על שני הצדדים ומונע מחלוקות בעתיד.',
  },
  {
    q: 'האם הפנייה והשיחה איתך נשמרות בסודיות?',
    a: 'כן. כל פנייה, שיחה ופגישה כפופות לחיסיון עו"ד–לקוח המעוגן בחוק. תוכלו להרגיש בנוח לשתף בכל מה שרלוונטי — ללא חשש שהמידע יזלוג החוצה.',
  },
];

function FAQItem({ faq, index, open, onToggle }) {
  return (
    <div className="border-b border-deep/10">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-7 lg:py-8 text-right group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5 flex-1">
          <span className="font-serif-display text-gold/60 text-sm tracking-[0.15em] font-medium pt-1.5 flex-shrink-0">
            0{index + 1}
          </span>
          <h3 className="font-serif-display text-deep text-xl lg:text-2xl font-bold leading-snug group-hover:text-gold transition-colors duration-300">
            {faq.q}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-deep/15 group-hover:border-gold group-hover:bg-gold flex items-center justify-center transition-colors duration-300 mt-0.5"
        >
          <Plus size={18} className="text-deep group-hover:text-paper transition-colors duration-300" strokeWidth={1.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pr-12 pb-8 pl-16 lg:pl-20">
              <p className="font-assistant text-deep/70 text-base lg:text-lg leading-[1.85]">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 lg:py-36 overflow-hidden bg-cream" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="eyebrow mb-6 inline-flex justify-center">שאלות ותשובות</span>
          <h2 className="font-serif-display text-deep text-4xl lg:text-6xl font-bold leading-[1.05] mt-6">
            שאלות <span style={{ color: '#C5A059' }}>נפוצות</span>
          </h2>
          <p className="font-assistant text-deep/65 text-base lg:text-lg mt-6 leading-relaxed">
            ריכזתי כאן תשובות לשאלות שאני שומעת הכי הרבה. לא מצאתם תשובה? אשמח שתפנו אליי.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-deep/10"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}