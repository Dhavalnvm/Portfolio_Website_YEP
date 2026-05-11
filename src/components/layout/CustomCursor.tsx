'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const detectHover = () => {
      const el = document.elementFromPoint(mx, my) as HTMLElement | null;
      if (!el) return setHovering(false);
      const interactive = el.closest('a, button, [data-cursor="hover"], input, textarea, select, [role="button"]');
      setHovering(!!interactive);
    };
    const interval = setInterval(detectHover, 80);

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      clearInterval(interval);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          borderColor: hovering ? 'rgba(64,224,208,0.9)' : 'rgba(255,255,255,0.4)',
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: 999,
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[101] hidden md:block"
        style={{
          width: 6,
          height: 6,
          borderRadius: 999,
          background: '#00FFCC',
          boxShadow: '0 0 12px rgba(0,255,204,0.7)',
        }}
      />
    </>
  );
}
