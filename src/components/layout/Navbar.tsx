'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { navLinks, profile } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-[#00FFCC] via-[#40E0D0] to-[#7B2FBE]"
        style={{ scaleX: progress }}
      />
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'pt-3' : 'pt-5',
        )}
      >
        <div className="container-page">
          <nav
            className={cn(
              'flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all',
              scrolled ? 'glass-strong' : 'glass',
            )}
          >
            <a href="#top" className="group flex items-center gap-2" data-cursor="hover">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00FFCC]/20 to-[#7B2FBE]/20 ring-1 ring-white/10">
                <span className="font-display text-sm font-bold text-gradient">
                  {profile.name.split(' ').map((s) => s[0]).join('')}
                </span>
                <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00FFCC]/30 to-[#7B2FBE]/30 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
              </span>
              <span className="hidden font-display text-sm font-medium tracking-wide text-white/90 sm:inline">
                {profile.name}
              </span>
            </a>

            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative rounded-full px-3.5 py-1.5 text-[13px] text-white/70 transition-colors hover:text-white"
                    data-cursor="hover"
                  >
                    {link.label}
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[13px] font-medium text-white/90 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-[#40E0D0]/40 md:inline-flex"
              data-cursor="hover"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00FFCC] shadow-[0_0_8px_#00FFCC]" />
              Available
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/10 md:hidden"
              data-cursor="hover"
            >
              <div className="flex flex-col gap-1.5">
                <span className={cn('h-px w-4 bg-white transition-transform', open && 'translate-y-[3px] rotate-45')} />
                <span className={cn('h-px w-4 bg-white transition-transform', open && '-translate-y-[3px] -rotate-45')} />
              </div>
            </button>
          </nav>

          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </motion.header>
    </>
  );
}
