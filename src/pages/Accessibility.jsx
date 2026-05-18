import LegalPageLayout from '../components/legal/LegalPageLayout';
import { LegalSection, LegalList } from '../components/legal/LegalSection';

export default function Accessibility() {
  return (
    <LegalPageLayout
      title="הצהרת נגישות"
      subtitle="אנו מאמינים שכל אדם זכאי לקבל שירות משפטי מקצועי ונגיש, ופועלים להנגיש את האתר והשירות לכלל האוכלוסייה."
      lastUpdated="ינואר 2026"
    >
      <LegalSection number={1} title="הצהרת מחויבות לנגישות">
        <p>
          משרד עו״ד נעמי בל גונן רואה חשיבות עליונה בהנגשת שירותיו לכלל הציבור, לרבות אנשים עם מוגבלות. אנו פועלים בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח-1998 ולתקנות הנגישות לשירות, תשע״ג-2013.
        </p>
      </LegalSection>

      <LegalSection number={2} title="תקן הנגישות באתר">
        <p>
          האתר נבנה בהתאם להנחיות תקן הנגישות הישראלי <strong>ת״י 5568</strong> ברמת AA, התואם להנחיות WCAG 2.1 הבינלאומיות. האתר נבדק על ידי גורם מקצועי והותאם לצרכי הגלישה של אנשים עם מוגבלויות.
        </p>
      </LegalSection>

      <LegalSection number={3} title="התאמות נגישות באתר">
        <p>באתר בוצעו ההתאמות הבאות:</p>
        <LegalList
          items={[
            'התאמת ניווט מלא באמצעות מקלדת בלבד.',
            'תיאור אלטרנטיבי לתמונות (alt) לקוראי מסך.',
            'מבנה כותרות היררכי ברור.',
            'יחסי ניגודיות צבעים בהתאם לתקן.',
            'גודל גופן ניתן להגדלה דרך הדפדפן.',
            'כפתורים, שדות טופס ולחצנים בעלי תוויות ברורות.',
            'תאימות לקוראי מסך נפוצים (NVDA, JAWS, VoiceOver).',
            'מבנה רספונסיבי מותאם למובייל וטאבלט.',
          ]}
        />
      </LegalSection>

      <LegalSection number={4} title="הנגשת השירות המשפטי">
        <p>בנוסף להנגשת האתר, המשרד מציע אמצעי תקשורת חלופיים לאנשים עם מוגבלות:</p>
        <LegalList
          items={[
            'תקשורת בכתב באמצעות וואטסאפ עבור אנשים עם לקות שמיעה.',
            'התאמה אישית של פגישות ותהליך הייעוץ לצרכים מיוחדים.',
            'הסברים בשפה פשוטה וברורה ללא ז׳רגון משפטי מורכב.',
          ]}
        />
      </LegalSection>

      <LegalSection number={5} title="חלקים שטרם הונגשו">
        <p>
          נכון למועד עדכון מסמך זה, ייתכן וקיימים חלקים מסוימים באתר שעדיין אינם מונגשים במלואם. אנו פועלים באופן שוטף לתיקון וטיוב הנגישות.
        </p>
      </LegalSection>

      <LegalSection number={6} title="פנייה ורכז הנגישות">
        <p>
          נתקלתם בקושי בגלישה באתר? יש לכם הצעה לשיפור? נשמח לשמוע. אנו מתחייבים לטפל בכל פנייה בנושא נגישות תוך זמן סביר.
        </p>
        <div className="bg-cream/60 border border-deep/5 rounded-2xl p-5 sm:p-6 mt-4">
          <div className="font-serif-display text-deep text-lg font-bold mb-3">פרטי רכזת הנגישות</div>
          <div className="space-y-1.5 text-sm sm:text-base">
            <div>שם: <span className="font-medium">עו״ד נעמי בל גונן</span></div>
            <div>טלפון: <a href="tel:+972509762087" className="font-medium text-gold hover:underline tabular-nums">050-976-2087</a></div>
            <div>וואטסאפ: <a href="https://wa.me/972509762087" target="_blank" rel="noopener noreferrer" className="font-medium text-gold hover:underline">לחצו כאן</a></div>
          </div>
        </div>
      </LegalSection>

      <LegalSection number={7} title="עדכון ההצהרה">
        <p>
          הצהרת הנגישות נבחנת ומתעדכנת באופן שוטף בהתאם להמשך פעולות הנגשת האתר והשירות.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}