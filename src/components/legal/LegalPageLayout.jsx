import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LegalPageLayout({ title, subtitle, lastUpdated, children }) {
  return (
    <div dir="rtl" className="bg-paper min-h-screen">
      {/* Top bar */}
      <div className="bg-deep">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-paper/70 hover:text-gold transition-colors font-assistant text-sm">
            <ArrowRight size={16} />
            <span>חזרה לעמוד הבית</span>
          </Link>
          <img
            src="https://media.base44.com/images/public/6a007126836a528637f76d81/2f35dae0f_image.png"
            alt="נעמי בל גונן"
            className="h-14 w-auto object-contain"
          />
        </div>
      </div>

      {/* Hero */}
      <div className="relative bg-cream border-b border-deep/5 py-20 sm:py-24 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 50% at 80% 20%, rgba(197,160,89,0.2) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
          <span className="eyebrow mb-6 inline-flex">מידע משפטי</span>
          <h1
            className="font-serif-display text-deep font-bold leading-[1.1] mt-6"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)' }}
          >
            {title}
          </h1>
          <div className="gold-accent" />
          {subtitle && (
            <p className="font-assistant text-deep/65 text-base sm:text-lg mt-6 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {lastUpdated && (
            <p className="font-assistant text-deep/40 text-xs sm:text-sm mt-6 tabular-nums">
              עדכון אחרון: {lastUpdated}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
        <article className="prose-legal">{children}</article>
      </main>

      {/* Footer */}
      <div className="border-t border-deep/10 bg-cream/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-assistant text-deep/50 text-xs sm:text-sm text-center sm:text-right">
            © {new Date().getFullYear()} נעמי בל גונן, עורכת דין · כל הזכויות שמורות
          </p>
          <Link to="/" className="font-assistant text-deep hover:text-gold transition-colors text-sm font-medium">
            חזרה לעמוד הבית ←
          </Link>
        </div>
      </div>
    </div>
  );
}