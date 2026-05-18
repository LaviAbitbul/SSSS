import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';

const articles = [
  {
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    category: 'גירושין',
    title: 'מה כדאי לדעת לפני שמתחילים בהליך גירושין?',
    excerpt: 'הצעדים הראשונים, ההכנות החשובות ואיך אפשר לעבור את התהליך בצורה רגועה יותר וברורה יותר.',
    readTime: '5 דק׳',
    date: 'מרץ 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1607582544420-bbcd5dcae5d2?w=800&q=80',
    category: 'אחריות הורית',
    title: 'איך לשמור על הקשר עם הילדים בתקופת פרידה',
    excerpt: 'כשיש ילדים בתמונה — נדרשת רגישות מיוחדת. איך לבנות הסדר שמרגיש נכון והוגן לכולם.',
    readTime: '7 דק׳',
    date: 'פברואר 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    category: 'הסכמים',
    title: 'הסכם ממון — למה זה לא רק לעשירים',
    excerpt: 'הסכם ממון נכון יכול להגן על שני הצדדים ולמנוע מחלוקות בעתיד. מתי כדאי לערוך אחד?',
    readTime: '6 דק׳',
    date: 'ינואר 2025',
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="relative py-28 lg:py-40 overflow-hidden bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20"
        >
          <div>
            <span className="eyebrow mb-6 inline-flex">ידע משפטי</span>
            <h2 className="font-serif-display text-deep text-5xl lg:text-7xl font-bold leading-[1.05] mt-6">
              מאמרים <span style={{ color: '#C5A059' }}>נבחרים</span>
            </h2>
            <div className="mt-5 inline-flex items-center gap-2 border border-gold/30 bg-gold/5 px-3.5 py-1.5 rounded-full">
              <span className="text-gold text-xs">✦</span>
              <span className="font-assistant text-deep/60 text-xs">תוכן בהכנה — מאמרים לדוגמה</span>
            </div>
          </div>
          <a href="#contact" className="group inline-flex items-center gap-2 font-assistant text-deep text-base font-medium">
            <span className="link-underline">לכל המאמרים</span>
            <ArrowLeft size={16} className="transition-transform duration-400 group-hover:-translate-x-1" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3]">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-paper/95 backdrop-blur-sm text-deep px-3 py-1.5 text-xs font-assistant font-medium rounded-full">
                  {article.category}
                </div>
              </div>

              <div className="flex items-center gap-3 text-deep/40 text-xs font-assistant mb-3">
                <Clock size={12} />
                <span>{article.readTime}</span>
                <span>·</span>
                <span>{article.date}</span>
              </div>

              <h3 className="font-serif-display text-deep text-2xl font-bold mb-3 leading-snug group-hover:text-gold transition-colors duration-400">
                {article.title}
              </h3>

              <p className="font-assistant text-deep/65 text-base leading-[1.8] mb-5">
                {article.excerpt}
              </p>

              <div className="inline-flex items-center gap-2 font-assistant text-deep text-sm font-medium">
                <span className="link-underline">קרא עוד</span>
                <ArrowLeft size={14} className="transition-transform duration-400 group-hover:-translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}