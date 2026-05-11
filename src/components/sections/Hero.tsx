'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { MagneticButton } from '@/components/ui/MagneticButton';

function useTypewriter(words: readonly string[], { typeSpeed = 70, pauseMs = 1400 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const finishedTyping = !deleting && text === current;
    const finishedDeleting = deleting && text === '';

    if (finishedTyping) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (finishedDeleting) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const next = deleting
      ? current.slice(0, text.length - 1)
      : current.slice(0, text.length + 1);
    const t = setTimeout(() => setText(next), deleting ? typeSpeed / 1.6 : typeSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, pauseMs]);

  return text;
}

function PortraitFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
      className="relative mx-auto w-full max-w-[420px]"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(64,224,208,0.35),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#7B2FBE]/35 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#00FFCC]/25 blur-[80px]" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] ring-1 ring-white/10"
        style={{
          boxShadow:
            '0 30px 80px -20px rgba(64,224,208,0.35), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[1.6rem] p-[1px]"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,255,204,0.6), rgba(123,47,190,0.45) 50%, rgba(255,255,255,0.05) 100%)',
            WebkitMask:
              'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
        <Image
          src="/profile.jpg"
          alt={profile.name}
          fill
          priority
          sizes="(min-width: 1024px) 420px, 80vw"
          className="object-cover"
        />
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(5,6,10,0.55)_100%)]" />

        <div className="pointer-events-none absolute left-4 right-4 top-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
          <span className="rounded-full bg-black/40 px-2 py-1 backdrop-blur-md ring-1 ring-white/10">
            DS · 001
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-1 backdrop-blur-md ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FFCC] shadow-[0_0_8px_#00FFCC]" />
            live
          </span>
        </div>

        <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="font-display text-base font-semibold text-white drop-shadow">
              {profile.name}
            </div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/70">
              {profile.title}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute -right-4 -top-4 hidden h-20 w-20 sm:block"
      >
        <svg viewBox="0 0 100 100" className="h-full w-full text-white/30">
          <defs>
            <path
              id="hero-ring"
              d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
              fill="none"
            />
          </defs>
          <text fontSize="9" fill="currentColor" fontFamily="JetBrains Mono">
            <textPath href="#hero-ring">
              ◦ AI · ML · CV · RAG · MULTIMODAL · EDGE ·
            </textPath>
          </text>
        </svg>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center pt-28 pb-14 sm:pt-32">
      <div className="container-page relative">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#00FFCC]/20 blur-[120px] animate-pulse-glow" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#7B2FBE]/25 blur-[140px] animate-pulse-glow" />

        <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="show"
            className="relative lg:col-span-7"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] tracking-[0.25em] text-white/60"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00FFCC] shadow-[0_0_10px_#00FFCC]" />
              {profile.location}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 font-display text-[clamp(2.2rem,5.4vw,4.4rem)] font-semibold leading-[0.95] tracking-tight text-white"
            >
              <span className="block">Crafting</span>
              <span className="block">
                <span className="text-gradient">intelligent</span> systems
              </span>
              <span className="block text-white/75">that think with us.</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base"
            >
              <span className="font-mono text-white/40">/</span>
              <span className="font-mono text-white/40">I am</span>
              <span className="font-display text-lg font-medium text-white">
                {role}
                <span className="ml-1 inline-block h-[1.05em] w-[2px] -translate-y-[2px] animate-pulse bg-[#00FFCC] align-middle" />
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
            >
              B.E. CSE (AI &amp; ML) — {profile.education.cgpa} CGPA. Patent-pending
              inventor and 3× hackathon winner ({profile.totalPrize}). I build
              real-time computer vision, multimodal AI, and production RAG systems.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-3">
              <MagneticButton href="#projects" variant="primary">
                View Projects
                <span aria-hidden>→</span>
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Get in touch
              </MagneticButton>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="ml-1 inline-flex items-center gap-2 px-3 py-2 text-sm text-white/55 transition-colors hover:text-white"
              >
                <span className="h-px w-6 bg-white/30" />
                GitHub
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {[
                { label: 'CGPA', value: profile.education.cgpa },
                { label: 'Prize Won', value: profile.totalPrize },
                { label: 'Hackathons', value: '3× 1st' },
                { label: 'Papers', value: '3 Published' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-3.5">
                  <div className="font-display text-xl font-semibold text-white">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/45">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative lg:col-span-5">
            <PortraitFrame />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10.5px] tracking-[0.3em] text-white/35 sm:flex"
        >
          <span>SCROLL</span>
          <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
