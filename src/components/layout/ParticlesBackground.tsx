'use client';

import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  z: number;
  r: number;
  color: string;
  vx: number;
  vy: number;
  twinkle: number;
};

const PALETTE = ['#00FFCC', '#40E0D0', '#7B2FBE', '#FFFFFF'];

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let rafId = 0;
    let last = performance.now();

    const seed = () => {
      const density = Math.min(220, Math.floor((width * height) / 9000));
      stars = Array.from({ length: density }, () => {
        const z = Math.random() * 0.9 + 0.1;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          r: (Math.random() * 1.6 + 0.3) * z,
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
          vx: (Math.random() - 0.5) * 0.05 * z,
          vy: (Math.random() - 0.5) * 0.05 * z,
          twinkle: Math.random() * Math.PI * 2,
        };
      });
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;

      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        if (!reduceMotion) {
          s.x += s.vx * dt;
          s.y += s.vy * dt;
          s.twinkle += 0.002 * dt;

          if (s.x < -2) s.x = width + 2;
          if (s.x > width + 2) s.x = -2;
          if (s.y < -2) s.y = height + 2;
          if (s.y > height + 2) s.y = -2;
        }

        const alpha = 0.55 + Math.sin(s.twinkle) * 0.35;
        ctx.globalAlpha = Math.max(0, alpha) * s.z;
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8 * s.z;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      rafId = requestAnimationFrame(draw);
    };

    resize();
    rafId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0 bg-grid-dim opacity-[0.18]"
        style={{ backgroundSize: '48px 48px' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(64,224,208,0.10),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(123,47,190,0.10),transparent_55%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#05060A_95%)]" />
    </div>
  );
}
