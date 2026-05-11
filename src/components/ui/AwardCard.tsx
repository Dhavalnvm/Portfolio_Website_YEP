'use client';

import { motion } from 'framer-motion';
import type { Award } from '@/data/portfolio';
import { fadeUp, viewportOnce } from '@/lib/motion';
import { GlowCard } from './GlowCard';
import { TiltCard } from './TiltCard';

type Props = { award: Award; index?: number };

export function AwardCard({ award, index = 0 }: Props) {
  const isHackathon = award.type === 'hackathon';
  const accent = isHackathon ? '#FFD700' : '#40E0D0';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay: index * 0.05 }}
    >
      <TiltCard max={4}>
        <GlowCard
          variant="glass"
          glowColor="rgba(255,255,255,0.06)"
          className="p-5"
        >
          <div className="flex items-start gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ring-1 ring-white/10"
              style={{
                background: `linear-gradient(135deg, ${accent}22, transparent)`,
              }}
            >
              {award.icon}
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <h4 className="text-sm font-semibold leading-snug text-white">
                {award.title}
              </h4>
              <p className="truncate text-[12.5px] text-white/55">
                {award.subtitle}
              </p>
              <span
                className="mt-1 inline-block w-fit rounded-md px-2 py-0.5 font-mono text-[10.5px]"
                style={{ background: `${accent}1A`, color: accent }}
              >
                {award.prize}
              </span>
            </div>
          </div>
        </GlowCard>
      </TiltCard>
    </motion.div>
  );
}
