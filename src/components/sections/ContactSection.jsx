import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

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
  const [form, setForm] = useState({ name: '', phone: '', area: '', message: '' });
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

  const inputClass =
    "w-full bg-cream/60 border border-cream text-deep font-assistant text-base px-5 py-3.5 rounded-2xl focus:outline-none focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/10 transition-all placeholder:text-deep/30";

  return (
    <section id="contact" className="relative py-24 sm:py-28 lg:py-40 overflow-hidden bg-paper" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <span className="eyebrow mb-6 inline-flex justify-center">צרו קשר</span>
          <h2
            className="font-serif-display text-deep font-bold leading-[1.05] mt-6"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)' }}
          >
            בואו <span style={{ color: '#C5A059' }}>נדבר</span>
          </h2>
          <div className="gold-accent gold-accent-center" />
          <p className="font-assistant text-deep/65 text-base sm:text-lg mt-6 leading-relaxed">
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
            <div className="bg-cream/40 border border-deep/5 p-7 sm:p-8 lg:p-12 rounded-3xl">
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
                  <h3 className="font-serif-display text-deep text-2xl sm:text-3xl font-bold mb-8">שלחו לי הודעה</h3>

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
            {/* WhatsApp first — primary action */}
            <a
              href="https://wa.me/972509762087"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-assistant font-bold text-base py-5 rounded-full hover:bg-[#22c55e] transition-all hover:scale-[1.01] shadow-[0_15px_40px_-10px_rgba(37,211,102,0.5)]"
            >
              <MessageCircle size={20} fill="white" strokeWidth={0} />
              שלחו הודעה בוואטסאפ
            </a>

            <div className="bg-cream/40 border border-deep/5 p-7 sm:p-8 rounded-3xl">
              <h3 className="font-serif-display text-deep text-xl sm:text-2xl font-bold mb-7">פרטי יצירת קשר</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'טלפון', value: '050-976-2087' },
                  { icon: MapPin, label: 'כתובת', value: 'אילת, ישראל' },
                  { icon: Clock, label: 'שעות פעילות', value: 'א׳-ה׳: 09:00–18:00\nשישי: 09:00–13:00' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-cream group-hover:bg-gold flex items-center justify-center transition-all duration-300">
                      <item.icon size={17} className="text-gold group-hover:text-deep transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="font-assistant text-deep/50 text-xs mb-0.5">{item.label}</div>
                      <div className="font-assistant text-deep font-medium whitespace-pre-line tabular-nums">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}