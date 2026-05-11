'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { GlowCard } from '@/components/ui/GlowCard';
import { featuredProjects, otherProjects } from '@/data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Projects() {
  return (
    <section id="projects" className="section-anchor relative py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected Work"
          title="Seven chambers of intelligent systems."
          subtitle="Each project explores a different surface — observability, security, law, infrastructure, perception, sustainability, atmosphere."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16"
        >
          <motion.h3
            variants={fadeUp}
            className="mb-5 font-display text-lg font-semibold text-white"
          >
            More repositories
          </motion.h3>

          <motion.div
            variants={staggerContainer(0.03)}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {otherProjects.map((p) => (
              <motion.a
                key={p.name}
                href={p.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                variants={fadeUp}
                className="block"
              >
                <GlowCard
                  variant="glass"
                  glowColor="rgba(64,224,208,0.1)"
                  className="flex items-center justify-between gap-3 p-4 transition-transform hover:-translate-y-0.5"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-white">
                      {p.name}
                    </div>
                    <div className="truncate text-[12px] text-white/50">
                      {p.desc}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-white/40">↗</span>
                </GlowCard>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
