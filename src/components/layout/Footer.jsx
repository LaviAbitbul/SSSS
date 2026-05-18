import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

// TikTok icon
const TikTokIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
  </svg>
);

const sections = [
  {
    title: 'ניווט מהיר',
    links: [
      { label: 'אודות', href: '#about' },
      { label: 'תחומי עיסוק', href: '#practice' },
      { label: 'למה אני', href: '#why' },
      { label: 'המלצות', href: '#testimonials' },
      { label: 'תהליך העבודה', href: '#process' },
      { label: 'מאמרים', href: '#blog' },
      { label: 'צור קשר', href: '#contact' },
    ],
  },
  {
    title: 'תחומי עיסוק',
    links: [
      { label: 'גירושין', href: '#practice' },
      { label: 'אחריות הורית', href: '#practice' },
      { label: 'מזונות', href: '#practice' },
      { label: 'חלוקת רכוש', href: '#practice' },
      { label: 'הסכמים משפחתיים', href: '#practice' },
    ],
  },
];

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-deep border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="font-playfair text-gold text-2xl font-bold">נעמי בל גונן</div>
              <div className="font-assistant text-paper/50 text-sm tracking-widest">עורכת דין לדיני משפחה</div>
            </div>
            <div className="w-12 h-0.5 bg-gold mb-5" />
            <p className="font-assistant text-paper/50 text-sm leading-relaxed max-w-xs mb-6">
              ליווי רגיש ומקצועי בתהליכי גירושין, אחריות הורית, מזונות, חלוקת רכוש והסכמים משפחתיים.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: Phone, text: '050-976-2087', href: 'tel:+972509762087' },
                { icon: Mail, text: 'neomibel.law@gmail.com', href: 'mailto:neomibel.law@gmail.com' },
                { icon: MapPin, text: 'אילת, ישראל', href: null },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon size={14} className="text-gold flex-shrink-0" />
                  {item.href ? (
                    <a href={item.href} className="font-assistant text-paper/50 text-sm hover:text-gold transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-assistant text-paper/50 text-sm">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-playfair text-paper font-bold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="font-assistant text-paper/50 text-sm hover:text-gold transition-colors text-right"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-assistant text-paper/30 text-xs text-center md:text-right">
            © {new Date().getFullYear()} נעמי בל גונן, עורכת דין | כל הזכויות שמורות |{' '}
            <span className="block md:inline">אין באמור ייעוץ משפטי | מוסדר על ידי לשכת עורכי הדין בישראל</span>
          </div>

          {/* Social Links */}
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
                className="w-8 h-8 border border-paper/20 flex items-center justify-center text-paper/40 hover:border-gold hover:text-gold transition-all duration-300"
                style={{ borderRadius: '2px' }}
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