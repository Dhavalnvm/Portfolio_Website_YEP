'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { Badge } from '@/components/ui/Badge';
import { experience } from '@/data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Experience() {
  return (
    <section id="experience" className="section-anchor relative py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Production AI, shipped."
          subtitle="Where research meets deadlines, hardware, and real users."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="absolute left-3 top-3 h-full w-px bg-gradient-to-b from-[#40E0D0]/60 via-white/10 to-transparent md:left-[7.5rem]" />

          <motion.div variants={fadeUp} className="relative pl-10 md:pl-44">
            <span className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-[#00FFCC] shadow-[0_0_18px_#00FFCC] md:left-[6.95rem]" />

            <span className="absolute left-0 top-0 hidden font-mono text-[11px] uppercase tracking-[0.25em] text-white/45 md:block">
              {experience.period}
            </span>
            <span className="mb-3 inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-white/45 md:hidden">
              {experience.period}
            </span>

            <GlowCard variant="glass" glowColor="rgba(64,224,208,0.14)" className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="hover"
                      className="text-sm text-[#40E0D0] hover:underline"
                    >
                      {experience.company} ↗
                    </a>
                  </div>
                  <Badge variant="dot" color="#00FFCC">
                    Defense Tech
                  </Badge>
                </div>

                <ul className="grid gap-2.5">
                  {experience.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-[14px] leading-relaxed text-white/75"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#00FFCC] to-[#7B2FBE]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
