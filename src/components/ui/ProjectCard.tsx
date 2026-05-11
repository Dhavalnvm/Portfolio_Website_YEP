'use client';

import { motion } from 'framer-motion';
import type { FeaturedProject } from '@/data/portfolio';
import { GlowCard } from './GlowCard';
import { TiltCard } from './TiltCard';
import { Badge } from './Badge';
import { hexToRgba } from '@/lib/utils';
import { fadeUp, viewportOnce } from '@/lib/motion';

type Props = { project: FeaturedProject; index?: number };

export function ProjectCard({ project, index = 0 }: Props) {
  const { theme } = project;
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay: index * 0.06 }}
    >
      <TiltCard max={5}>
        <GlowCard
          variant="glass"
          glowColor={hexToRgba(theme.primary, 0.18)}
          className="h-full p-6 sm:p-7"
          style={{
            borderColor: hexToRgba(theme.primary, 0.18),
            boxShadow: `inset 0 1px 0 ${hexToRgba('#FFFFFF', 0.04)}, 0 0 0 1px ${hexToRgba(theme.primary, 0.08)}`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl"
            style={{ background: theme.glow }}
          />

          <div className="relative flex h-full flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-xl ring-1"
                  style={{
                    background: `linear-gradient(135deg, ${hexToRgba(theme.primary, 0.18)}, ${hexToRgba(theme.secondary, 0.6)})`,
                    color: theme.primary,
                    boxShadow: `0 0 28px -8px ${hexToRgba(theme.primary, 0.55)}`,
                    borderColor: hexToRgba(theme.primary, 0.3),
                  }}
                >
                  {project.icon}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-[12.5px] text-white/55">{project.subtitle}</p>
                </div>
              </div>
              <Badge color={theme.primary} variant="ring">
                {project.badge}
              </Badge>
            </div>

            <p className="text-sm leading-relaxed text-white/70">
              {project.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md px-2 py-0.5 font-mono text-[10.5px] text-white/70 ring-1 ring-white/10"
                  style={{ background: hexToRgba(theme.primary, 0.05) }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium transition-colors"
                  style={{ color: theme.primary }}
                >
                  View on GitHub
                  <span aria-hidden>→</span>
                </a>
              ) : project.paper ? (
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium transition-colors"
                  style={{ color: theme.primary }}
                >
                  Read the paper
                  <span aria-hidden>→</span>
                </a>
              ) : (
                <span className="text-[12.5px] text-white/35">Private repository</span>
              )}
              <span className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-white/30">
                {project.chamber}
              </span>
            </div>
          </div>
        </GlowCard>
      </TiltCard>
    </motion.div>
  );
}
