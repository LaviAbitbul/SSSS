import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Car, Bus, Clock, Phone, Accessibility } from 'lucide-react';

// Office coordinates: Sderot Hativat HaNegev 27, Eilat
const OFFICE = {
  lat: 29.5577,
  lng: 34.9519,
  address: 'שדרות חטיבת הנגב 27, אילת',
};

// Custom gold pin
const goldIcon = L.divIcon({
  className: 'custom-office-pin',
  html: `
    <div style="position:relative;width:44px;height:56px;">
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
        <svg width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 0C9.85 0 0 9.85 0 22c0 16 22 34 22 34s22-18 22-34C44 9.85 34.15 0 22 0z" fill="#C5A059"/>
          <circle cx="22" cy="22" r="9" fill="#0C1831"/>
          <circle cx="22" cy="22" r="3.5" fill="#C5A059"/>
        </svg>
      </div>
      <div style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);width:24px;height:6px;background:radial-gradient(ellipse,rgba(12,24,49,0.35) 0%,transparent 70%);border-radius:50%;"></div>
    </div>
  `,
  iconSize: [44, 56],
  iconAnchor: [22, 56],
  popupAnchor: [0, -52],
});

const infoItems = [
  {
    icon: MapPin,
    title: 'כתובת',
    lines: ['שדרות חטיבת הנגב 27', 'אילת'],
  },
  {
    icon: Clock,
    title: 'שעות פעילות',
    lines: ['א׳–ה׳ · 09:00–18:00', 'בתיאום מראש'],
  },
  {
    icon: Phone,
    title: 'יצירת קשר',
    lines: ['050-976-2087', 'זמינה גם בוואטסאפ'],
  },
  {
    icon: Car,
    title: 'הגעה ברכב',
    lines: ['חניה חופשית באזור', 'גישה נוחה לצירים מרכזיים'],
  },
  {
    icon: Bus,
    title: 'תחבורה ציבורית',
    lines: ['קווי אוטובוס עירוניים', 'בקרבת תחנה מרכזית'],
  },
  {
    icon: Accessibility,
    title: 'נגישות',
    lines: ['המשרד נגיש לבעלי מוגבלויות', 'גישה לכיסא גלגלים'],
  },
];

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const wazeUrl = `https://waze.com/ul?ll=${OFFICE.lat},${OFFICE.lng}&navigate=yes`;
  const gmapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE.lat},${OFFICE.lng}`;

  return (
    <section id="location" className="relative py-24 lg:py-36 overflow-hidden bg-paper" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-20"
        >
          <span className="eyebrow mb-6 inline-flex justify-center">איפה למצוא אותי</span>
          <h2
            className="font-serif-display text-deep font-bold leading-[1.05] mt-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            מיקום <span style={{ color: '#C5A059' }}>המשרד</span>
          </h2>
          <div className="gold-accent gold-accent-center" />
          <p className="font-assistant text-deep/65 text-base lg:text-lg mt-6 leading-relaxed">
            המשרד ממוקם במרכז אילת — נגיש, נוח להגעה, ועם חניה בקרבת מקום.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-cream border border-deep/8 shadow-[0_30px_80px_-25px_rgba(12,24,49,0.2)]">
              {/* Decorative gold corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-[401]">
                <div className="absolute top-4 right-4 w-full h-px bg-gradient-to-l from-gold to-transparent" />
                <div className="absolute top-4 right-4 w-px h-full bg-gradient-to-b from-gold to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none z-[401]">
                <div className="absolute bottom-4 left-4 w-full h-px bg-gradient-to-r from-gold to-transparent" />
                <div className="absolute bottom-4 left-4 w-px h-full bg-gradient-to-t from-gold to-transparent" />
              </div>

              <div style={{ height: 'clamp(380px, 55vh, 600px)' }} className="w-full">
                <MapContainer
                  center={[OFFICE.lat, OFFICE.lng]}
                  zoom={15}
                  scrollWheelZoom={false}
                  className="w-full h-full"
                  style={{ background: '#F4F0E8' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[OFFICE.lat, OFFICE.lng]} icon={goldIcon}>
                    <Popup>
                      <div style={{ fontFamily: 'Assistant, sans-serif', textAlign: 'right', direction: 'rtl' }}>
                        <div style={{ fontWeight: 700, color: '#0C1831', fontSize: '14px', marginBottom: '4px' }}>
                          עו״ד נעמי בל גונן
                        </div>
                        <div style={{ color: '#475569', fontSize: '12px' }}>{OFFICE.address}</div>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              {/* Floating navigate buttons */}
              <div className="absolute bottom-5 right-5 flex flex-col gap-2 z-[400]">
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-deep text-paper px-4 py-2.5 rounded-full text-sm font-assistant font-medium shadow-[0_10px_30px_-8px_rgba(12,24,49,0.4)] hover:bg-deep-soft transition-all duration-300"
                >
                  <Navigation size={14} strokeWidth={2} />
                  <span>נווט ב-Google</span>
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-gold text-deep px-4 py-2.5 rounded-full text-sm font-assistant font-bold shadow-[0_10px_30px_-8px_rgba(197,160,89,0.5)] hover:brightness-105 transition-all duration-300"
                >
                  <Navigation size={14} strokeWidth={2.5} />
                  <span>נווט ב-Waze</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Info grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {infoItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 + i * 0.08 }}
                className="group relative bg-cream border border-deep/8 rounded-2xl p-5 hover:border-gold/40 hover:bg-paper transition-all duration-400"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mb-3 group-hover:bg-gold transition-colors duration-400">
                  <item.icon size={18} className="text-gold group-hover:text-deep transition-colors duration-400" strokeWidth={2} />
                </div>
                <div className="font-serif-display text-deep text-base font-bold mb-1.5">
                  {item.title}
                </div>
                {item.lines.map((line, k) => (
                  <div key={k} className="font-assistant text-deep/65 text-sm leading-relaxed">
                    {line}
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}