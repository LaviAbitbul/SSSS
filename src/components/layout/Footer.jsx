import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp } from 'lucide-react';

const TikTokIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
  </svg>
);

const navLinks = [
  { label: 'אודות', href: '#about' },
  { label: 'תחומי עיסוק', href: '#practice' },
  { label: 'למה אני', href: '#why' },
  { label: 'המלצות', href: '#testimonials' },
  { label: 'תהליך העבודה', href: '#process' },
  { label: 'שאלות נפוצות', href: '#faq' },
  { label: 'צור קשר', href: '#contact' },
];

const practiceLinks = [
  { label: 'גירושין', href: '#practice' },
  { label: 'אחריות הורית', href: '#practice' },
  { label: 'מזונות', href: '#practice' },
  { label: 'חלוקת רכוש', href: '#practice' },
  { label: 'הסכמים משפחתיים', href: '#practice' },
];

const legalLinks = [
  { label: 'הצהרת נגישות', href: '#accessibility' },
  { label: 'תנאי שימוש', href: '#terms' },
  { label: 'מדיניות פרטיות', href: '#privacy' },
];

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-deep overflow-hidden">
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">

        {/* Top: Brand + back to top */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-paper/10">
          <div>
            <div className="font-serif-display text-paper text-3xl lg:text-4xl font-bold leading-none">נעמי בל גונן</div>
            <div className="font-assistant text-paper/50 text-xs tracking-[0.2em] uppercase mt-2">עורכת דין · דיני משפחה · אילת</div>
          </div>

          <button
            onClick={scrollTop}
            aria-label="חזרה לראש העמוד"
            className="group inline-flex items-center gap-3 border border-paper/20 hover:border-gold hover:bg-gold px-5 py-3 rounded-full transition-colors duration-400"
          >
            <span className="font-assistant text-paper group-hover:text-deep text-sm font-medium transition-colors duration-400">חזרה למעלה</span>
            <ArrowUp size={14} className="text-gold group-hover:text-deep transition-colors duration-400" />
          </button>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-14">

          {/* Description + contact */}
          <div className="col-span-2 lg:col-span-5">
            <p className="font-assistant text-paper/55 text-sm leading-[1.85] max-w-sm mb-7">
              ליווי רגיש ומקצועי בתהליכי גירושין, אחריות הורית, מזונות, חלוקת רכוש והסכמים משפחתיים — עם סדר, ביטחון ושקיפות לאורך כל הדרך.
            </p>

            <div className="space-y-3.5">
              <a href="tel:+972509762087" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full bg-paper/5 group-hover:bg-gold flex items-center justify-center transition-colors duration-300">
                  <Phone size={13} className="text-gold group-hover:text-deep transition-colors duration-300" />
                </div>
                <span className="font-assistant text-paper/70 group-hover:text-gold transition-colors duration-300 text-sm">050-976-2087</span>
              </a>
              <a href="mailto:neomibel.law@gmail.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full bg-paper/5 group-hover:bg-gold flex items-center justify-center transition-colors duration-300">
                  <Mail size={13} className="text-gold group-hover:text-deep transition-colors duration-300" />
                </div>
                <span className="font-assistant text-paper/70 group-hover:text-gold transition-colors duration-300 text-sm break-all">neomibel.law@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-paper/5 flex items-center justify-center">
                  <MapPin size={13} className="text-gold" />
                </div>
                <span className="font-assistant text-paper/70 text-sm">אילת, ישראל</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-display text-paper text-base font-bold mb-5">ניווט מהיר</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.href)} className="font-assistant text-paper/55 hover:text-gold transition-colors text-sm text-right">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-display text-paper text-base font-bold mb-5">תחומי עיסוק</h4>
            <ul className="space-y-2.5">
              {practiceLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.href)} className="font-assistant text-paper/55 hover:text-gold transition-colors text-sm text-right">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-display text-paper text-base font-bold mb-5">מידע משפטי</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-assistant text-paper/55 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accessibility statement */}
        <div className="border-t border-paper/10 pt-10">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 mb-8">
            <div>
              <h5 className="font-serif-display text-paper text-sm font-bold mb-2">הצהרת נגישות</h5>
              <p className="font-assistant text-paper/45 text-xs leading-[1.8]">
                האתר עומד בתקן הנגישות הישראלי (ת"י 5568) ברמה AA. נעשה מאמץ מתמיד לשפר את חוויית הגלישה לכלל המשתמשים.
              </p>
            </div>
            <div>
              <h5 className="font-serif-display text-paper text-sm font-bold mb-2">פנייה למרכז התמיכה</h5>
              <p className="font-assistant text-paper/45 text-xs leading-[1.8]">
                נתקלתם בבעיית נגישות? נשמח לשמוע ולתקן. צרו קשר במייל{' '}
                <a href="mailto:neomibel.law@gmail.com" className="text-gold hover:underline">neomibel.law@gmail.com</a>.
              </p>
            </div>
            <div>
              <h5 className="font-serif-display text-paper text-sm font-bold mb-2">הסתייגות משפטית</h5>
              <p className="font-assistant text-paper/45 text-xs leading-[1.8]">
                המידע באתר הוא מידע כללי בלבד ואינו מהווה ייעוץ משפטי. בכל מקרה ספציפי יש להתייעץ עם עורך/ת דין.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-paper/10 pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <div className="font-assistant text-paper/35 text-xs text-center md:text-right">
            © {new Date().getFullYear()} נעמי בל גונן, עורכת דין · כל הזכויות שמורות · מוסדר על ידי לשכת עורכי הדין בישראל
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, href: 'https://www.facebook.com/share/15tgCN25iEh/?mibextid=wwXIfr', label: 'Facebook' },
              { icon: Instagram, href: 'https://www.instagram.com/neomi.bel.law', label: 'Instagram' },
              { icon: TikTokIcon, href: 'https://www.tiktok.com/@neomi.bel.law', label: 'TikTok' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-paper/15 flex items-center justify-center text-paper/50 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}