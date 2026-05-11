'use client';

import { motion } from 'framer-motion';
import type { ResearchPaper } from '@/data/portfolio';
import { fadeUp, viewportOnce } from '@/lib/motion';
import { GlowCard } from './GlowCard';
import { Badge } from './Badge';

type Props = { paper: ResearchPaper; index?: number };

export function PaperCard({ paper, index = 0 }: Props) {
  return (
    <motion.a
      href={paper.link}
      target="_blank"
      rel="noreferrer"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay: index * 0.07 }}
      data-cursor="hover"
      className="block"
    >
      <GlowCard
        variant="glass"
        glowColor="rgba(64,224,208,0.16)"
        className="h-full p-6 transition-transform hover:-translate-y-0.5"
      >
        <div className="flex h-full flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <Badge color="#40E0D0" variant="ring">
              {paper.journal}
            </Badge>
            <span className="font-mono text-[10.5px] text-white/40">
              {paper.date}
            </span>
          </div>

          <h4 className="font-display text-base font-semibold leading-snug text-white">
            {paper.title}
          </h4>

          <p className="text-[12.5px] leading-relaxed text-white/60">
            {paper.abstract}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-white/35">
              {paper.volume}
            </span>
            <span className="text-[12.5px] font-medium text-[#40E0D0]">
              Read →
            </span>
          </div>
        </div>
      </GlowCard>
    </motion.a>
  );
}
