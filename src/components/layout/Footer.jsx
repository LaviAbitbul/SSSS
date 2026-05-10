import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const sections = [
  {
    title: 'ניווט מהיר',
    links: [
      { label: 'אודות', href: '#about' },
      { label: 'תחומי עיסוק', href: '#practice' },
      { label: 'למה אנחנו', href: '#why' },
      { label: 'המלצות', href: '#testimonials' },
      { label: 'תהליך העבודה', href: '#process' },
      { label: 'מאמרים', href: '#blog' },
      { label: 'צור קשר', href: '#contact' },
    ],
  },
  {
    title: 'תחומי עיסוק',
    links: [
      { label: 'דיני משפחה וגירושין', href: '#practice' },
      { label: 'מזונות ומשמורת', href: '#practice' },
      { label: 'דיני עבודה', href: '#practice' },
      { label: 'הוצאה לפועל', href: '#practice' },
      { label: 'פשיטת רגל', href: '#practice' },
      { label: 'נדל"ן וחוזים', href: '#practice' },
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
              <div className="font-playfair text-gold text-2xl font-bold">נעמי גונן</div>
              <div className="font-assistant text-paper/50 text-sm tracking-widest">משרד עורכי דין</div>
            </div>
            <div className="w-12 h-0.5 bg-gold mb-5" />
            <p className="font-assistant text-paper/50 text-sm leading-relaxed max-w-xs mb-6">
              משרד עורכי דין מוביל באילת, מתמחה בדיני משפחה ודיני עבודה. ניסיון של למעלה מ-15 שנה בייצוג לקוחות.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: Phone, text: '050-976-2087', href: 'tel:+972509762087' },
                { icon: Mail, text: 'naomi@gonen-law.co.il', href: 'mailto:naomi@gonen-law.co.il' },
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
            © {new Date().getFullYear()} עו"ד נעמי גונן | כל הזכויות שמורות |{' '}
            <span className="block md:inline">אין באמור ייעוץ משפטי | מוסדר על ידי לשכת עורכי הדין בישראל</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, href: '#', label: 'Facebook' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Instagram, href: '#', label: 'Instagram' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
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