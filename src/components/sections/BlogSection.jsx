import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';

const articles = [
  {
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    category: 'גירושין',
    title: 'מה כדאי לדעת לפני שמתחילים בהליך גירושין?',
    excerpt: 'הצעדים הראשונים, ההכנות החשובות ואיך אפשר לעבור את התהליך בצורה רגועה יותר וברורה יותר.',
    readTime: '5 דקות קריאה',
    date: 'מרץ 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1607582544420-bbcd5dcae5d2?w=600&q=80',
    category: 'אחריות הורית',
    title: 'איך לשמור על הקשר עם הילדים בתקופת פרידה',
    excerpt: 'כשיש ילדים בתמונה — נדרשת רגישות מיוחדת. איך לבנות הסדר שמרגיש נכון והוגן לכולם.',
    readTime: '7 דקות קריאה',
    date: 'פברואר 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
    category: 'הסכמים',
    title: 'הסכם ממון — למה זה לא רק לעשירים',
    excerpt: 'הסכם ממון נכון יכול להגן על שני הצדדים ולמנוע מחלוקות בעתיד. מתי כדאי לערוך אחד?',
    readTime: '6 דקות קריאה',
    date: 'ינואר 2025',
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="blog" className="relative section-padding overflow-hidden" style={{ background: '#FAF8F4' }} ref={ref}>
      <div className="bg-blur-orb" style={{ width: '400px', height: '400px', background: '#172A4C', top: '10%', right: '-150px', opacity: 0.05 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="inline-block font-assistant text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 bg-gold/10 rounded-full">ידע הוא כוח</span>
            <h2 className="font-playfair text-deep text-4xl lg:text-6xl leading-tight">
              מאמרים <span className="text-gold italic">משפטיים</span>
            </h2>
            <div className="mt-4 inline-flex items-center gap-2 border border-gold/30 bg-gold/5 px-3 py-1.5 rounded-full">
              <span className="text-gold text-xs">✦</span>
              <span className="font-assistant text-gold/80 text-xs">מאמרים לדוגמה — תוכן בהכנה</span>
            </div>
          </div>
          <a
            href="#contact"
            className="font-assistant text-deep border border-deep/20 px-6 py-3 text-sm rounded-full hover:bg-deep hover:text-paper transition-all duration-300 flex-shrink-0"
          >
            לכל המאמרים
            <ArrowLeft size={14} className="inline mr-2" />
          </a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer bg-white rounded-3xl shadow-soft hover:shadow-soft-lg overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-deep px-3 py-1.5 text-xs font-assistant font-bold rounded-full shadow-sm">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-deep/40 text-xs font-assistant mb-3">
                  <Clock size={12} />
                  <span>{article.readTime}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-playfair text-deep text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>

                <p className="font-assistant text-deep/80 text-sm leading-relaxed mb-5">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-gold text-sm font-assistant font-medium">
                  <span>קרא עוד</span>
                  <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}