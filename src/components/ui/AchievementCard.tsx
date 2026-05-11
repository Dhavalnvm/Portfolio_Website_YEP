'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type Transition,
} from 'framer-motion';
import type { Achievement } from '@/data/achievements';
import { hexToRgba } from '@/lib/utils';

type Props = {
  achievement: Achievement;
  index?: number;
  onOpen?: (achievement: Achievement) => void;
};

const SPRING: Transition = { type: 'spring', stiffness: 240, damping: 24, mass: 0.7 };
const REVEAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SLIDE_INTERVAL_MS = 3600;

export function AchievementCard({ achievement, index = 0, onOpen }: Props) {
  const [hovered, setHovered] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);

  const images = achievement.secondaryImage
    ? [achievement.image, achievement.secondaryImage]
    : [achievement.image];

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setSlideIdx((i) => (i + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [images.length]);

  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const tiltX = useSpring(useTransform(py, [0, 100], [4, -4]), {
    stiffness: 220,
    damping: 22,
  });
  const tiltY = useSpring(useTransform(px, [0, 100], [-4, 4]), {
    stiffness: 220,
    damping: 22,
  });

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${px}% ${py}%, ${hexToRgba(
    achievement.glowColor,
    0.32,
  )}, transparent 50%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - rect.left) / rect.width) * 100);
    py.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function onLeave() {
    setHovered(false);
    px.set(50);
    py.set(50);
  }

  const { glowColor } = achievement;
  const multi = images.length > 1;

  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={() => onOpen?.(achievement)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen?.(achievement);
        }
      }}
      role="button"
      aria-label={`Open ${achievement.title} photo`}
      tabIndex={0}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ ...SPRING, delay: index * 0.07 }}
      whileHover={{ y: -6, scale: 1.025 }}
      data-cursor="hover"
      style={{
        rotateX: tiltX,
        rotateY: tiltY,
        transformPerspective: 1100,
        borderColor: hexToRgba(glowColor, 0.28),
      }}
      className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border bg-black/40 outline-none focus-visible:ring-2 focus-visible:ring-white/30 will-change-transform"
    >
      {/* Always-on image layer */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={slideIdx}
            initial={{ opacity: 0, x: multi ? 40 : 0, scale: 1.08 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: hovered ? 1.08 : 1.02,
            }}
            exit={{ opacity: 0, x: multi ? -40 : 0, scale: 1.08 }}
            transition={{
              opacity: { duration: 0.9, ease: REVEAL_EASE },
              x: { duration: 0.9, ease: REVEAL_EASE },
              scale: { duration: 0.9, ease: REVEAL_EASE },
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[slideIdx]}
              alt={achievement.title}
              fill
              priority={index < 2}
              placeholder="blur"
              className="object-cover"
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft scrim — light at top, just enough at bottom for text legibility */}
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0)_0%,rgba(5,6,10,0.08)_55%,rgba(5,6,10,0.72)_100%)]" />

        {/* Inner glow that strengthens on hover */}
        <motion.span
          aria-hidden
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: REVEAL_EASE }}
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow: `inset 0 0 80px ${hexToRgba(glowColor, 0.4)}`,
          }}
        />
      </div>

      {/* Animated conic gradient border */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl p-[1px]"
        animate={{ opacity: hovered ? 1 : 0.55 }}
        transition={{ duration: 0.5, ease: REVEAL_EASE }}
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, ${glowColor}, transparent 30%, ${hexToRgba(
            glowColor,
            0.6,
          )} 60%, transparent 100%)`,
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Spotlight follow */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      {/* Slide indicators for multi-image */}
      {multi && (
        <div className="absolute right-4 top-14 z-10 flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === slideIdx ? 16 : 6,
                background: i === slideIdx ? glowColor : 'rgba(255,255,255,0.35)',
                boxShadow: i === slideIdx ? `0 0 8px ${glowColor}` : 'none',
              }}
            />
          ))}
        </div>
      )}

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <motion.span
            animate={{
              scale: hovered ? 1.06 : 1,
              boxShadow: hovered
                ? `0 0 28px -4px ${hexToRgba(glowColor, 0.9)}`
                : `0 0 14px -6px ${hexToRgba(glowColor, 0.55)}`,
            }}
            transition={SPRING}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-lg ring-1 ring-white/15"
            style={{
              background: hexToRgba(glowColor, 0.2),
              color: glowColor,
              backdropFilter: 'blur(8px)',
            }}
          >
            {achievement.icon}
          </motion.span>

          <span className="rounded-full bg-black/55 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/85 backdrop-blur-md ring-1 ring-white/10">
            {achievement.year}
          </span>
        </div>

        <motion.div
          animate={{ y: hovered ? -4 : 0 }}
          transition={SPRING}
          className="flex flex-col gap-1.5"
        >
          <div className="font-mono text-[10.5px] uppercase tracking-[0.3em] text-white/75 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            {achievement.subtitle}
          </div>

          <h3 className="font-display text-lg font-semibold leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            {achievement.title}
          </h3>

          {achievement.prize && (
            <div className="mt-1">
              <span
                className="inline-block rounded-md px-2 py-0.5 font-mono text-[10.5px] backdrop-blur-md"
                style={{
                  background: hexToRgba(glowColor, 0.28),
                  color: '#fff',
                  border: `1px solid ${hexToRgba(glowColor, 0.5)}`,
                  textShadow: `0 0 12px ${hexToRgba(glowColor, 0.7)}`,
                }}
              >
                {achievement.prize}
              </span>
            </div>
          )}

          <AnimatePresence>
            {hovered && achievement.caption && (
              <motion.p
                key="caption"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.35, ease: REVEAL_EASE }}
                className="mt-1.5 text-[12.5px] leading-relaxed text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
              >
                {achievement.caption}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.article>
  );
}
