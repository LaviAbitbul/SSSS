import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const practiceOptions = [
  'גירושין',
  'אחריות הורית',
  'מזונות',
  'חלוקת רכוש',
  'הסכמים משפחתיים',
  'אחר',
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', phone: '', email: '', area: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const inputClass = "w-full bg-cream/60 border border-cream text-deep font-assistant text-base px-5 py-3.5 rounded-2xl focus:outline-none focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/10 transition-all placeholder:text-deep/30";

  return (
    <section id="contact" className="relative py-28 lg:py-40 overflow-hidden bg-paper" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="eyebrow mb-6 inline-flex justify-center">צרו קשר</span>
          <h2 className="font-serif-display text-deep text-5xl lg:text-7xl font-bold leading-[1.05] mt-6">
            בואו <span style={{ color: '#C5A059' }}>נדבר</span>
          </h2>
          <p className="font-assistant text-deep/65 text-lg mt-6 leading-relaxed">
            ייעוץ ראשוני חינם. השלב הראשון הוא שיחה.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-cream/40 border border-deep/5 p-8 lg:p-12 rounded-3xl">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                    <CheckCircle size={40} className="text-gold" />
                  </div>
                  <h3 className="font-serif-display text-deep text-4xl font-bold mb-4">תודה רבה</h3>
                  <p className="font-assistant text-deep/65 text-base">
                    פנייתך התקבלה. אחזור אליך בהקדם האפשרי.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif-display text-deep text-3xl font-bold mb-8">שלחו לי הודעה</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-assistant text-deep/60 text-sm block mb-2">שם מלא *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="ישראל ישראלי"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="font-assistant text-deep/60 text-sm block mb-2">טלפון *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="050-000-0000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-assistant text-deep/60 text-sm block mb-2">אימייל</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="font-assistant text-deep/60 text-sm block mb-2">תחום הפנייה *</label>
                    <select
                      name="area"
                      required
                      value={form.area}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">בחרו תחום...</option>
                      {practiceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-assistant text-deep/60 text-sm block mb-2">תיאור קצר</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="ספרו לי בקצרה על הסיטואציה..."
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-deep text-paper font-assistant font-medium text-base py-4 rounded-full flex items-center justify-center gap-3 hover:bg-deep-soft transition-all duration-400 disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-paper border-t-transparent rounded-full animate-spin" />
                        שולח...
                      </span>
                    ) : (
                      <>
                        <Send size={16} />
                        שלחו פנייה עכשיו
                      </>
                    )}
                  </button>

                  <p className="font-assistant text-deep/40 text-xs text-center mt-3">
                    * פנייתך תטופל תוך 24 שעות ובסודיות מלאה
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-cream/40 border border-deep/5 p-8 rounded-3xl">
              <h3 className="font-serif-display text-deep text-2xl font-bold mb-8">פרטי יצירת קשר</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'טלפון', value: '050-976-2087', href: 'tel:+972509762087' },
                  { icon: Mail, label: 'אימייל', value: 'neomibel.law@gmail.com', href: 'mailto:neomibel.law@gmail.com' },
                  { icon: MapPin, label: 'כתובת', value: 'אילת, ישראל', href: null },
                  { icon: Clock, label: 'שעות פעילות', value: 'א׳-ה׳: 09:00–18:00\nשישי: 09:00–13:00', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-cream group-hover:bg-gold flex items-center justify-center transition-all duration-300">
                      <item.icon size={17} className="text-gold group-hover:text-deep transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="font-assistant text-deep/50 text-xs mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-assistant text-deep font-medium hover:text-gold transition-colors whitespace-pre-line">
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-assistant text-deep font-medium whitespace-pre-line">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              <a
                href="tel:+972509762087"
                className="flex items-center justify-center gap-3 w-full bg-deep text-paper font-assistant font-bold py-4 rounded-full hover:bg-deep-soft transition-all hover:scale-[1.01]"
              >
                <Phone size={16} className="text-gold" />
                התקשרו עכשיו
              </a>
              <a
                href="https://wa.me/972509762087"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-assistant font-bold py-4 rounded-full hover:bg-[#22c55e] transition-all hover:scale-[1.01]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}