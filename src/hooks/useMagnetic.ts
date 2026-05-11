'use client';

import { useEffect, useRef } from 'react';

type Options = {
  strength?: number;
  scale?: number;
};

export function useMagnetic<T extends HTMLElement>({
  strength = 0.3,
  scale = 1.04,
}: Options = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(rafId);
      el.style.transform = 'translate3d(0,0,0) scale(1)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [strength, scale]);

  return ref;
}
