import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Instagram, Facebook, Phone } from 'lucide-react';

const TikTokIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
  </svg>
);

// Animated particle canvas
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w, h;

    const particles = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.5 + 0.3,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          alpha: Math.random() * 0.6 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 160, 89, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(197, 160, 89, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-deep">
      {/* Dynamic particle background */}
      <ParticleCanvas />

      {/* Radial gradient glow from center */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(197,160,89,0.12) 0%, transparent 70%)' }}
      />

      {/* Subtle horizontal lines texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(197,160,89,0.8) 60px, rgba(197,160,89,0.8) 61px)' }}
      />

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-deep to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 flex flex-col items-center text-center">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-gold/30 px-5 py-2.5 rounded-full mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="font-assistant text-gold/90 text-xs tracking-[0.25em] uppercase">עו״ד נעמי בל גונן · דיני משפחה</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        </motion.div>

        {/* GIANT headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair text-paper font-bold leading-[1.0] mb-8 max-w-5xl"
          style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}
        >
          לא רק עורכת דין —{' '}
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #C5A059 0%, #D4B87A 40%, #A8833A 70%, #C5A059 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            מישהי שתהיה לצידך.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="font-assistant text-paper/60 text-lg lg:text-xl max-w-2xl leading-relaxed mb-12"
        >
          ליווי רגיש ומקצועי בגירושין, אחריות הורית, מזונות וחלוקת רכוש — עם סדר, ביטחון ושקיפות.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="tel:+972509762087"
            className="group flex items-center gap-3 bg-gold text-deep font-assistant font-bold text-base px-8 py-4 rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-[1.03] animate-gold-pulse"
          >
            <Phone size={17} />
            לשיחת ייעוץ אישית
          </a>
          <button
            onClick={() => scrollTo('#about')}
            className="font-assistant text-paper/70 text-sm hover:text-gold transition-colors flex items-center gap-2 group"
          >
            <span className="w-8 h-px bg-paper/30 group-hover:bg-gold transition-colors" />
            קצת עליי
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex items-center gap-3 mt-16"
        >
          {[
            { icon: Instagram, href: 'https://www.instagram.com/neomi.bel.law', label: 'Instagram' },
            { icon: TikTokIcon, href: 'https://www.tiktok.com/@neomi.bel.law', label: 'TikTok' },
            { icon: Facebook, href: 'https://www.facebook.com/share/15tgCN25iEh/?mibextid=wwXIfr', label: 'Facebook' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-paper/15 bg-white/5 flex items-center justify-center text-paper/50 hover:bg-gold hover:text-deep hover:border-gold transition-all duration-300"
            >
              <s.icon size={15} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.8, duration: 0.5 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/30 hover:text-gold transition-colors"
      >
        <ChevronDown size={30} />
      </motion.button>
    </section>
  );
}