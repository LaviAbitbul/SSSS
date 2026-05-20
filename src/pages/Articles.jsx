import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Scale, Heart, Home as HomeIcon } from 'lucide-react';
import PageHead from '@/components/seo/PageHead';
import SeoSchema, { BUSINESS_INFO } from '@/components/seo/SeoSchema';

export default function Articles() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'דיני משפחה בישראל — מה חשוב לדעת לפני שמתחילים את התהליך',
    description: 'מדריך מקיף לדיני משפחה בישראל: גירושין, מזונות, אחריות הורית וחלוקת רכוש. נכתב על ידי עו״ד נעמי בל גונן.',
    author: {
      '@type': 'Person',
      name: 'נעמי בל גונן',
      url: `${BUSINESS_INFO.url}/about-naomi`,
    },
    publisher: {
      '@type': 'LegalService',
      name: BUSINESS_INFO.name,
      logo: { '@type': 'ImageObject', url: BUSINESS_INFO.image },
    },
    image: BUSINESS_INFO.image,
    inLanguage: 'he',
    mainEntityOfPage: `${BUSINESS_INFO.url}/articles`,
  };

  return (
    <div className="min-h-screen bg-paper" dir="rtl">
      <PageHead
        title='מאמרים — דיני משפחה בישראל | עו"ד נעמי בל גונן'
        description='מאמרים ומדריכים מקצועיים בדיני משפחה: גירושין, מזונות, אחריות הורית וחלוקת רכוש. מאת עו"ד נעמי בל גונן, עורכת דין באילת.'
        canonicalPath="/articles"
      />
      <SeoSchema id="article" data={articleSchema} />
      {/* Header */}
      <header className="border-b border-deep/10 bg-paper sticky top-0 z-50 backdrop-blur-md bg-paper/90">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link to="/" className="font-serif-display text-deep text-xl font-bold">
            נעמי בל גונן · עו״ד
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-assistant text-deep text-sm hover:text-gold transition-colors"
          >
            <span>חזרה לעמוד הבית</span>
            <ArrowLeft size={16} />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-deep/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="eyebrow mb-6 inline-flex justify-center">מאמרים ומידע משפטי</span>
          <h1
            className="font-serif-display text-deep font-bold leading-[1.1] mt-6 mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            מדריך לדיני <span style={{ color: '#C5A059' }}>משפחה בישראל</span>
          </h1>
          <p className="font-assistant text-deep/70 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            מידע משפטי מקיף ועדכני בנושאי גירושין, מזונות, אחריות הורית וחלוקת רכוש — נכתב על ידי עו״ד נעמי בל גונן.
          </p>
        </div>
      </section>

      {/* Main content article */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="prose-content"
          >
            <div className="flex items-center gap-3 mb-8 text-sm font-assistant text-deep/60">
              <span>עו״ד נעמי בל גונן</span>
              <span className="w-1 h-1 rounded-full bg-deep/30" />
              <span>מאי 2026</span>
              <span className="w-1 h-1 rounded-full bg-deep/30" />
              <span>זמן קריאה: 7 דקות</span>
            </div>

            <h2 className="font-serif-display text-deep text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              דיני משפחה בישראל — מה חשוב לדעת לפני שמתחילים את התהליך
            </h2>

            <p className="font-assistant text-deep/80 text-lg leading-[1.9] mb-6">
              דיני משפחה הם אחד התחומים המורכבים והרגישים ביותר במשפט הישראלי. הם נוגעים לכל ההיבטים האינטימיים והאישיים של החיים — נישואין, גירושין, הורות, מזונות, רכוש ומשמורת ילדים. לכן, חשוב להגיע אל התהליך מתוך הבנה, ידיעה ותחושת ביטחון. במאמר זה אסקור את העקרונות המרכזיים שכל אדם בישראל צריך להכיר לפני שהוא יוצא לדרך משפטית בתחום דיני המשפחה.
            </p>

            <h3 className="font-serif-display text-deep text-2xl font-bold mb-4 mt-10">
              גירושין בישראל — בית הדין הרבני או בית המשפט לענייני משפחה?
            </h3>
            <p className="font-assistant text-deep/80 text-lg leading-[1.9] mb-6">
              בישראל קיימת מערכת כפולה לטיפול בענייני גירושין. עניין הגירושין עצמו (פירוק הקשר הזוגי) מתנהל בבית הדין הרבני עבור זוגות יהודים, בעוד שעניינים נלווים כמו חלוקת רכוש, מזונות ילדים והסדרי שהות יכולים להתנהל בבית המשפט לענייני משפחה. ההחלטה לאיזה בית משפט להגיש את התביעות הראשונות נקראת "מרוץ הסמכויות" ויש לה השלכות משמעותיות על המשך התהליך. בחירה נכונה של מסלול הטיפול יכולה לחסוך זמן, כסף וכאב לב.
            </p>

            <h3 className="font-serif-display text-deep text-2xl font-bold mb-4 mt-10">
              מזונות ילדים — איך נקבע הסכום?
            </h3>
            <p className="font-assistant text-deep/80 text-lg leading-[1.9] mb-6">
              סכום המזונות לילדים נקבע על פי שלושה פרמטרים מרכזיים: צרכי הילד, יכולתו הכלכלית של ההורה המשלם והכנסת ההורה המקבל. בשנת 2017 שינה בית המשפט העליון את ההלכה ביחס למזונות ילדים מעל גיל 6, וכיום ההורים נושאים בנטל המזונות באופן יחסי להכנסותיהם ולחלוקת זמני השהות. חשוב להבין שמזונות אינם "עונש" אלא ביטוי לחובה משותפת של שני ההורים לדאוג לרווחת הילד.
            </p>

            <h3 className="font-serif-display text-deep text-2xl font-bold mb-4 mt-10">
              אחריות הורית והסדרי שהות
            </h3>
            <p className="font-assistant text-deep/80 text-lg leading-[1.9] mb-6">
              המונח "משמורת" הוחלף בחקיקה החדשה במושג "אחריות הורית", המבטא שותפות אמיתית בין שני ההורים. הסדרי השהות נקבעים על פי טובת הילד, ולא על פי "זכויות" של ההורים. בית המשפט בוחן מגוון שיקולים — גיל הילד, רצונו, יחסיו עם כל אחד מההורים, המסוגלות ההורית, יציבות סביבת המגורים ועוד. גישתי המקצועית מתמקדת תמיד בשמירה על הקשר הבריא בין הילדים לשני ההורים, מתוך הבנה שמשבר הגירושין אינו חייב להיות משבר ביחסי ההורות.
            </p>

            <h3 className="font-serif-display text-deep text-2xl font-bold mb-4 mt-10">
              חלוקת רכוש בין בני זוג
            </h3>
            <p className="font-assistant text-deep/80 text-lg leading-[1.9] mb-6">
              חוק יחסי ממון בין בני זוג קובע את עקרון "איזון המשאבים" — לפיו כל מה שנצבר במהלך הנישואין יחולק בין בני הזוג בחלקים שווים. הכלל כולל גם נכסים שנרשמו על שם אחד מבני הזוג בלבד. עם זאת, ישנם חריגים: נכסים שהיו בבעלות מי מבני הזוג טרם הנישואין, ירושות ומתנות אינם מאוזנים, אלא אם הוסכם אחרת. ניהול נכון של תהליך חלוקת הרכוש דורש מומחיות, סבלנות והבנה כלכלית.
            </p>

            <h3 className="font-serif-display text-deep text-2xl font-bold mb-4 mt-10">
              למה ליווי אישי הוא הכרחי?
            </h3>
            <p className="font-assistant text-deep/80 text-lg leading-[1.9] mb-6">
              תהליכים משפטיים בתחום המשפחה דורשים יותר מידע משפטי מקצועי — הם דורשים אוזן קשבת, רגישות אנושית והבנה מעמיקה של המצב הרגשי של הצדדים. בעבודתי, אני שמה דגש על ליווי אישי, על שקיפות מלאה בכל שלב של התהליך ועל מציאת פתרונות שמתאימים לכל משפחה באופן ספציפי. אני מאמינה שאפשר לעבור את התקופה הזו בצורה רגועה יותר, מכובדת יותר ומשמעותית יותר — גם כשמדובר במצבים מורכבים מאוד.
            </p>

            <div className="mt-12 p-8 bg-cream rounded-2xl border border-gold/30">
              <h3 className="font-serif-display text-deep text-2xl font-bold mb-3">
                זקוקים לייעוץ אישי?
              </h3>
              <p className="font-assistant text-deep/75 text-base leading-relaxed mb-5">
                כל מצב משפחתי הוא ייחודי. בשיחת ייעוץ ראשונית נוכל להבין יחד את התמונה המלאה ולהתוות את הדרך הנכונה ביותר עבורכם.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-deep text-paper px-6 py-3 rounded-full font-assistant text-sm font-medium hover:bg-deep-soft transition-colors"
              >
                <span>חזרה ליצירת קשר</span>
                <ArrowLeft size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Topic cards */}
      <section className="py-16 lg:py-20 bg-cream border-t border-deep/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif-display text-deep text-3xl lg:text-4xl font-bold mb-10 text-center">
            עוד מהמשרד
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { to: '/lawyer-eilat', icon: Scale, title: 'עורך דין באילת', desc: 'ליווי משפטי אישי בעיר אילת ובסביבה — דיני משפחה, גירושין ועוד.' },
              { to: '/divorce-lawyer', icon: Heart, title: 'עורך דין גירושין', desc: 'ייצוג מקצועי ורגיש בהליכי גירושין — בהסכמה ובמחלוקת.' },
              { to: '/family-lawyer', icon: HomeIcon, title: 'עורך דין לענייני משפחה', desc: 'התמחות בכל סוגיות דיני המשפחה — מזונות, אחריות הורית, רכוש.' },
              { to: '/about-naomi', icon: BookOpen, title: 'אודות נעמי בל גונן', desc: 'מעל 20 שנות ניסיון בייצוג משפחות. גישה אישית ומקצועית.' },
            ].map((item, i) => (
              <Link key={i} to={item.to} className="bg-paper p-7 rounded-2xl border border-deep/8 hover:border-gold/40 hover:shadow-soft transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5">
                  <item.icon size={20} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif-display text-deep text-xl font-bold mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="font-assistant text-deep/70 text-base leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-deep/10 bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 flex items-center justify-between flex-wrap gap-4">
          <p className="font-assistant text-deep/60 text-sm">
            © {new Date().getFullYear()} עו״ד נעמי בל גונן · כל הזכויות שמורות
          </p>
          <Link to="/" className="inline-flex items-center gap-2 font-assistant text-deep text-sm hover:text-gold transition-colors">
            <BookOpen size={14} />
            <span>חזרה לעמוד הבית</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}