'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { SkillBar } from '@/components/ui/SkillBar';
import { skills } from '@/data/portfolio';
import { hexToRgba } from '@/lib/utils';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

function Chip({ name, color }: { name: string; color: string }) {
  return (
    <motion.span
      variants={fadeUp}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] ring-1 transition-colors"
      style={{
        background: hexToRgba(color, 0.06),
        color: '#E6EAF2',
        borderColor: hexToRgba(color, 0.25),
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
      />
      {name}
    </motion.span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-anchor relative py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I think in."
          subtitle="Core competencies tuned through research, internships, and shipping real products."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <GlowCard variant="glass" className="p-6 lg:col-span-2" glowColor="rgba(64,224,208,0.12)">
            <h3 className="mb-5 font-display text-base font-semibold text-white">
              Core competencies
            </h3>
            <div className="flex flex-col gap-5">
              {skills.core.map((s, i) => (
                <SkillBar key={s.name} {...s} index={i} />
              ))}
            </div>
          </GlowCard>

          <div className="flex flex-col gap-6 lg:col-span-3">
            <GlowCard variant="glass" className="p-6" glowColor="rgba(123,47,190,0.12)">
              <h3 className="mb-4 font-display text-base font-semibold text-white">
                Tools &amp; frameworks
              </h3>
              <motion.div
                variants={staggerContainer(0.025)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="flex flex-wrap gap-2"
              >
                {skills.tools.map((t) => (
                  <Chip key={t.name} {...t} />
                ))}
              </motion.div>
            </GlowCard>

            <GlowCard variant="glass" className="p-6" glowColor="rgba(64,224,208,0.12)">
              <h3 className="mb-4 font-display text-base font-semibold text-white">
                Languages
              </h3>
              <motion.div
                variants={staggerContainer(0.03)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="flex flex-wrap gap-2"
              >
                {skills.languages.map((t) => (
                  <Chip key={t.name} {...t} />
                ))}
              </motion.div>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
