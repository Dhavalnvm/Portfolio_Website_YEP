'use client';

import { useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  images: StaticImageData[];
  title?: string;
  subtitle?: string;
  open: boolean;
  onClose: () => void;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Lightbox({ images, title, subtitle, open, onClose }: Props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!open) return;
    setIdx(0);
    const body = document.body;
    const prevOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (images.length > 1) {
        if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % images.length);
        if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + images.length) % images.length);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      body.style.overflow = prevOverflow;
    };
  }, [open, images.length, onClose]);

  const multi = images.length > 1;
  const safeIdx = Math.min(idx, Math.max(0, images.length - 1));
  const currentImage = images[safeIdx];

  return (
    <AnimatePresence>
      {open && currentImage && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          onClick={onClose}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/85 backdrop-blur-md"
          aria-modal="true"
          role="dialog"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            data-cursor="hover"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-xl text-white/85 ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
          >
            ×
          </button>

          {multi && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIdx((i) => (i - 1 + images.length) % images.length);
                }}
                aria-label="Previous image"
                data-cursor="hover"
                className="absolute left-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-xl text-white/85 ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white sm:left-10"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIdx((i) => (i + 1) % images.length);
                }}
                aria-label="Next image"
                data-cursor="hover"
                className="absolute right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-xl text-white/85 ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white sm:right-10"
              >
                ›
              </button>
            </>
          )}

          <div className="relative flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={safeIdx}
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -6 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="relative overflow-hidden rounded-xl ring-1 ring-white/15"
                style={{ boxShadow: '0 30px 100px -20px rgba(64,224,208,0.35)' }}
              >
                <Image
                  src={currentImage}
                  alt={title ?? 'Achievement'}
                  placeholder="blur"
                  sizes="92vw"
                  className="h-auto w-auto max-h-[82vh] max-w-[92vw]"
                  style={{ objectFit: 'contain' }}
                />
              </motion.div>
            </AnimatePresence>

            {(title || subtitle || multi) && (
              <div className="flex w-full max-w-[92vw] flex-wrap items-center justify-between gap-3 px-1 font-mono text-[11px] uppercase tracking-[0.3em] text-white/65">
                <div className="flex flex-col gap-0.5 normal-case tracking-normal">
                  {title && (
                    <span className="font-display text-base font-semibold tracking-tight text-white">
                      {title}
                    </span>
                  )}
                  {subtitle && <span className="text-[11.5px] text-white/55">{subtitle}</span>}
                </div>
                {multi && (
                  <div className="flex items-center gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setIdx(i)}
                        aria-label={`Show image ${i + 1}`}
                        className="h-1 rounded-full transition-all duration-300"
                        style={{
                          width: i === idx ? 22 : 8,
                          background:
                            i === idx ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.35)',
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
