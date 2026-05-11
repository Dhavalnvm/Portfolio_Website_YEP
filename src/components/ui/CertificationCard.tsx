'use client';

import { motion } from 'framer-motion';
import type { Certification } from '@/data/portfolio';
import { fadeUp, viewportOnce } from '@/lib/motion';
import { GlowCard } from './GlowCard';
import { hexToRgba } from '@/lib/utils';

type Props = { cert: Certification; index?: number };

export function CertificationCard({ cert, index = 0 }: Props) {
  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay: index * 0.06 }}
      data-cursor="hover"
      className="block"
    >
      <GlowCard
        variant="glass"
        glowColor={hexToRgba(cert.color, 0.18)}
        className="flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5"
      >
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl font-bold ring-1 ring-white/10"
          style={{
            background: `linear-gradient(135deg, ${hexToRgba(cert.color, 0.22)}, ${hexToRgba(cert.color, 0.06)})`,
            color: cert.color,
            boxShadow: `0 0 28px -10px ${hexToRgba(cert.color, 0.6)}`,
          }}
        >
          {cert.initial}
        </span>
        <div className="flex min-w-0 flex-1 flex-col">
          <h4 className="truncate text-sm font-semibold text-white">
            {cert.title}
          </h4>
          <p className="text-[12.5px] text-white/55">{cert.issuer}</p>
        </div>
        <span className="font-mono text-xs text-white/40">↗</span>
      </GlowCard>
    </motion.a>
  );
}
