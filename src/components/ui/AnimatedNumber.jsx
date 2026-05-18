import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

/**
 * AnimatedNumber - counts from 0 to target when it enters the viewport.
 * Parses a string like "20+", "500+", "100%" — animates the numeric part only.
 */
export default function AnimatedNumber({ value, duration = 2, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Extract numeric portion + prefix/suffix
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const prefix = match ? match[1] : '';
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : '';
  const isInteger = Number.isInteger(target);

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (latest) =>
    isInteger ? Math.round(latest).toLocaleString() : latest.toFixed(1)
  );

  const [rendered, setRendered] = useState(isInteger ? '0' : '0.0');

  useEffect(() => {
    const unsub = display.on('change', (v) => setRendered(v));
    return () => unsub();
  }, [display]);

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => motionValue.set(target), delay * 1000);
    return () => clearTimeout(t);
  }, [isInView, target, delay, motionValue]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}
      {rendered}
      {suffix}
    </motion.span>
  );
}