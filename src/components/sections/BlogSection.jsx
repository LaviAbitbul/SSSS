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
    <section id="blog" className="section-padding bg-deep" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="font-assistant text-gold text-sm tracking-[0.3em] uppercase block mb-4">ידע הוא כוח</span>
            <h2 className="font-playfair text-paper text-4xl lg:text-5xl">
              מאמרים <span className="text-gold">משפטיים</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mt-6" />
            <div className="mt-4 inline-flex items-center gap-2 border border-gold/40 bg-gold/5 px-3 py-1.5" style={{ borderRadius: '2px' }}>
              <span className="text-gold text-xs">✦</span>
              <span className="font-assistant text-gold/80 text-xs">מאמרים לדוגמה — תוכן בהכנה</span>
            </div>
          </div>
          <a
            href="#contact"
            className="font-assistant text-gold border border-gold/40 px-6 py-3 text-sm hover:bg-gold hover:text-deep transition-all duration-300 flex-shrink-0"
            style={{ borderRadius: '2px' }}
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
              className="group cursor-pointer bg-action border border-paper/5 overflow-hidden hover:border-gold/30 transition-all duration-500"
              style={{ borderRadius: '2px' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-action via-transparent to-transparent" />
                {/* Category badge */}
                <div className="absolute top-4 right-4 bg-gold text-deep px-3 py-1 text-xs font-assistant font-bold" style={{ borderRadius: '2px' }}>
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-paper/40 text-xs font-assistant mb-4">
                  <Clock size={12} />
                  <span>{article.readTime}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-playfair text-paper text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>

                <p className="font-assistant text-paper/60 text-sm leading-relaxed mb-6">
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