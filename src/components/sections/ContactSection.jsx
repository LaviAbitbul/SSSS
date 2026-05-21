import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, Navigation } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const OFFICE = { lat: 29.5577, lng: 34.9519, address: 'שדרות חטיבת הנגב 27, אילת' };
const wazeUrl = `https://waze.com/ul?ll=${OFFICE.lat},${OFFICE.lng}&navigate=yes`;
const gmapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE.lat},${OFFICE.lng}`;
const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${OFFICE.lat},${OFFICE.lng}&zoom=15&size=600x300&scale=2&maptype=roadmap&markers=color:0xC5A059%7C${OFFICE.lat},${OFFICE.lng}`;

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
    try {
      await base44.functions.invoke('sendLeadEmail', form);
    } catch (err) {
      // Still save the lead even if email fails
      await base44.entities.Lead.create({ ...form, source: 'website_form' });
    }
    setSubmitted(true);
    setLoading(false);
  };

  const trackWhatsappClick = async () => {
    try {
      await base44.entities.WhatsappClick.create({
        source: 'contact_section',
        page_path: window.location.pathname,
        user_agent: navigator.userAgent,
      });
    } catch (e) {
      // Silent fail — don't block the click
    }
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
              onClick={trackWhatsappClick}
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-assistant font-bold text-base py-5 rounded-full hover:bg-[#22c55e] transition-all hover:scale-[1.01] shadow-[0_15px_40px_-10px_rgba(37,211,102,0.5)]"
            >
              <MessageCircle size={20} fill="white" strokeWidth={0} />
              שלחו הודעה בוואטסאפ
            </a>

            <div className="bg-cream/40 border border-deep/5 p-7 sm:p-8 rounded-3xl">
              <h3 className="font-serif-display text-deep text-xl sm:text-2xl font-bold mb-6">פרטי יצירת קשר</h3>

              {/* Compact map preview with navigate buttons */}
              <a
                href={gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="פתח במפות Google"
                className="relative block rounded-2xl overflow-hidden border border-deep/8 mb-6 group h-32"
              >
                <img
                  src={mapImageUrl}
                  alt="מפת מיקום המשרד"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                {/* Fallback gradient background (shows if map image fails) */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream to-deep/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg">
                    <MapPin size={18} className="text-deep" fill="#0C1831" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 left-2 flex items-center justify-between gap-2">
                  <span className="font-assistant text-paper text-[11px] font-medium bg-deep/70 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    פתח במפות
                  </span>
                </div>
              </a>

              {/* Navigate buttons */}
              <div className="flex gap-2 mb-6">
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gold text-deep px-3 py-2 rounded-full text-xs font-assistant font-bold hover:brightness-105 transition-all"
                >
                  <Navigation size={12} strokeWidth={2.5} />
                  Waze
                </a>
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-deep text-paper px-3 py-2 rounded-full text-xs font-assistant font-medium hover:bg-deep-soft transition-all"
                >
                  <Navigation size={12} strokeWidth={2} />
                  Google Maps
                </a>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'טלפון', value: '050-976-2087' },
                  { icon: MapPin, label: 'כתובת', value: 'שדרות חטיבת הנגב 27, אילת' },
                  { icon: Clock, label: 'שעות פעילות', value: 'א׳-ה׳: 09:00-18:00\nבתיאום מראש' },
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