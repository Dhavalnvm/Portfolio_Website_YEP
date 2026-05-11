'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '@/data/portfolio';

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let p = 0;
    const tick = () => {
      p = Math.min(100, p + Math.random() * 4 + 1.5);
      setProgress(Math.floor(p));
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          if (typeof document !== 'undefined') {
            document.body.removeAttribute('data-loading');
          }
        }, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#05060A]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(64,224,208,0.18),transparent_60%)]" />
          <div className="relative flex w-full max-w-md flex-col items-center gap-8 px-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/40">
                Initializing
              </span>
              <span className="font-display text-3xl font-semibold tracking-tight">
                <span className="text-gradient">{profile.name}</span>
              </span>
            </motion.div>

            <div className="relative h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00FFCC] via-[#40E0D0] to-[#7B2FBE]"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.08 }}
              />
            </div>

            <div className="flex w-full items-center justify-between font-mono text-xs text-white/50">
              <span>boot.system</span>
              <span>{progress.toString().padStart(3, '0')}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
