import { useEffect, useRef } from 'react';

export default function GlobalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const particles = [];
    let w, h;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      particles.length = 0;
      for (let i = 0; i < 120; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.8 + 0.3,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          alpha: Math.random() * 0.5 + 0.08,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Soft radial glow in center
      const grd = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.7);
      grd.addColorStop(0, 'rgba(197,160,89,0.06)');
      grd.addColorStop(1, 'rgba(12,24,49,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197,160,89,${p.alpha})`;
        ctx.fill();
      });

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(197,160,89,${0.07 * (1 - dist / 100)})`;
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
    window.addEventListener('resize', init);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" style={{ background: '#0C1831' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Static color accent orbs */}
      <div style={{
        position: 'absolute', borderRadius: '9999px', filter: 'blur(120px)',
        width: '600px', height: '600px', background: 'rgba(197,160,89,0.08)',
        top: '10%', right: '-100px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', borderRadius: '9999px', filter: 'blur(120px)',
        width: '500px', height: '500px', background: 'rgba(23,42,76,0.8)',
        bottom: '20%', left: '-80px', pointerEvents: 'none',
      }} />
    </div>
  );
}