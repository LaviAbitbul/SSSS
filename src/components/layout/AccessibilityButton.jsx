import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Accessibility,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Contrast,
  Underline,
  Link2,
  Type,
  FileText,
} from 'lucide-react';

const STORAGE_KEY = 'a11y-settings';

const defaultSettings = {
  fontSize: 100, // percentage
  highContrast: false,
  underlineLinks: false,
  highlightLinks: false,
  readableFont: false,
};

export default function AccessibilityButton() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(defaultSettings);

  // Load saved settings
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSettings({ ...defaultSettings, ...JSON.parse(saved) });
    } catch {}
  }, []);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${settings.fontSize}%`;
    root.classList.toggle('a11y-high-contrast', settings.highContrast);
    root.classList.toggle('a11y-underline-links', settings.underlineLinks);
    root.classList.toggle('a11y-highlight-links', settings.highlightLinks);
    root.classList.toggle('a11y-readable-font', settings.readableFont);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {}
  }, [settings]);

  const update = (key, value) => setSettings((s) => ({ ...s, [key]: value }));
  const reset = () => setSettings(defaultSettings);

  const fontSizeUp = () => update('fontSize', Math.min(settings.fontSize + 10, 150));
  const fontSizeDown = () => update('fontSize', Math.max(settings.fontSize - 10, 80));

  const toggles = [
    { key: 'highContrast', icon: Contrast, label: 'ניגודיות גבוהה' },
    { key: 'underlineLinks', icon: Underline, label: 'הדגשת קישורים' },
    { key: 'highlightLinks', icon: Link2, label: 'סימון קישורים' },
    { key: 'readableFont', icon: Type, label: 'פונט קריא' },
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
        onClick={() => setOpen(true)}
        aria-label="פתח תפריט נגישות"
        className="fixed bottom-8 right-8 z-[999] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-deep text-paper flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(12,24,49,0.5)] hover:bg-gold hover:text-deep transition-all duration-300 hover:scale-110 border-2 border-paper"
      >
        <Accessibility size={22} strokeWidth={2} />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-deep/40 backdrop-blur-sm z-[1000]"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-label="תפריט נגישות"
              className="fixed bottom-24 right-4 sm:right-8 z-[1001] w-[calc(100vw-2rem)] sm:w-80 bg-paper rounded-3xl shadow-[0_30px_60px_-15px_rgba(12,24,49,0.4)] border border-deep/10 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-deep text-paper px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Accessibility size={18} className="text-gold" strokeWidth={2.5} />
                  <h3 className="font-serif-display text-lg font-bold">תפריט נגישות</h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="סגור"
                  className="w-8 h-8 rounded-full hover:bg-paper/10 flex items-center justify-center transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-5 space-y-5 max-h-[70vh] overflow-y-auto">
                {/* Font Size */}
                <div>
                  <div className="font-assistant text-deep/60 text-xs font-semibold mb-2 tracking-wider">גודל טקסט</div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={fontSizeDown}
                      aria-label="הקטן טקסט"
                      className="flex-1 h-10 rounded-xl bg-cream hover:bg-gold hover:text-deep border border-deep/8 flex items-center justify-center transition-colors"
                    >
                      <ZoomOut size={16} />
                    </button>
                    <div className="font-assistant text-deep font-bold text-sm tabular-nums min-w-[3rem] text-center">
                      {settings.fontSize}%
                    </div>
                    <button
                      onClick={fontSizeUp}
                      aria-label="הגדל טקסט"
                      className="flex-1 h-10 rounded-xl bg-cream hover:bg-gold hover:text-deep border border-deep/8 flex items-center justify-center transition-colors"
                    >
                      <ZoomIn size={16} />
                    </button>
                  </div>
                </div>

                {/* Toggles */}
                <div className="space-y-2">
                  <div className="font-assistant text-deep/60 text-xs font-semibold mb-2 tracking-wider">התאמות תצוגה</div>
                  {toggles.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => update(t.key, !settings[t.key])}
                      aria-pressed={settings[t.key]}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition-all ${
                        settings[t.key]
                          ? 'bg-gold/15 border-gold text-deep'
                          : 'bg-cream border-deep/8 text-deep/70 hover:border-gold/40'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <t.icon size={16} className={settings[t.key] ? 'text-gold' : 'text-deep/50'} />
                        <span className="font-assistant text-sm font-medium">{t.label}</span>
                      </div>
                      <span
                        className={`w-9 h-5 rounded-full relative transition-colors ${
                          settings[t.key] ? 'bg-gold' : 'bg-deep/15'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 w-4 h-4 rounded-full bg-paper transition-all ${
                            settings[t.key] ? 'right-0.5' : 'right-4'
                          }`}
                        />
                      </span>
                    </button>
                  ))}
                </div>

                {/* Reset */}
                <button
                  onClick={reset}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-deep/15 text-deep/70 hover:bg-deep hover:text-paper transition-all text-sm font-assistant font-medium"
                >
                  <RotateCcw size={14} />
                  אפס הגדרות
                </button>

                {/* Link to statement */}
                <Link
                  to="/accessibility"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 text-deep/60 hover:text-gold text-xs font-assistant transition-colors pt-2 border-t border-deep/8"
                >
                  <FileText size={12} />
                  הצהרת נגישות
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}