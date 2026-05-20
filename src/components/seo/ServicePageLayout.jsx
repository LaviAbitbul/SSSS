import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle, BookOpen } from 'lucide-react';

export default function ServicePageLayout({ eyebrow, h1, intro, sections, faqs }) {
  return (
    <div className="min-h-screen bg-paper" dir="rtl">
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
      <section className="py-16 lg:py-24 border-b border-deep/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="eyebrow mb-6 inline-flex justify-center">{eyebrow}</span>
          <h1
            className="font-serif-display text-deep font-bold leading-[1.1] mt-6 mb-6"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)' }}
          >
            {h1}
          </h1>
          <p className="font-assistant text-deep/70 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            {intro}
          </p>
        </div>
      </section>

      {/* Body */}
      <article className="py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {sections.map((s, i) => (
              <div key={i} className="mb-10">
                <h2 className="font-serif-display text-deep text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="font-assistant text-deep/80 text-lg leading-[1.9] mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {faqs && faqs.length > 0 && (
              <div className="mt-14">
                <h2 className="font-serif-display text-deep text-2xl lg:text-3xl font-bold mb-6">
                  שאלות נפוצות
                </h2>
                <div className="space-y-5">
                  {faqs.map((f, i) => (
                    <div key={i} className="bg-cream rounded-2xl p-6 border border-deep/8">
                      <h3 className="font-serif-display text-deep text-lg font-bold mb-2">
                        {f.q}
                      </h3>
                      <p className="font-assistant text-deep/75 text-base leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-14 p-8 bg-deep rounded-2xl">
              <h2 className="font-serif-display text-paper text-2xl font-bold mb-3">
                לשיחת ייעוץ עם עו״ד נעמי בל גונן
              </h2>
              <p className="font-assistant text-paper/70 text-base leading-relaxed mb-6">
                ליווי אישי ומקצועי באילת ובכל הארץ. נדבר ונבין יחד מה הצעד הנכון עבורכם.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+972509762087"
                  className="inline-flex items-center gap-2 bg-gold text-deep px-6 py-3 rounded-full font-assistant text-sm font-medium hover:bg-gold-light transition-colors"
                >
                  <Phone size={16} />
                  <span>050-976-2087</span>
                </a>
                <a
                  href="https://wa.me/972509762087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-paper text-deep px-6 py-3 rounded-full font-assistant text-sm font-medium hover:bg-cream transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>שליחת הודעה בוואטסאפ</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-10 border-t border-deep/10 bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 flex items-center justify-between flex-wrap gap-4">
          <p className="font-assistant text-deep/60 text-sm">
            © {new Date().getFullYear()} עו״ד נעמי בל גונן · כל הזכויות שמורות
          </p>
          <Link to="/articles" className="inline-flex items-center gap-2 font-assistant text-deep text-sm hover:text-gold transition-colors">
            <BookOpen size={14} />
            <span>למאמרים נוספים</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}