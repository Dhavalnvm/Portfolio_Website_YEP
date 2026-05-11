'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { Reveal } from '@/components/ui/Reveal';
import { profile } from '@/data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function About() {
  const facts = [
    { k: 'Degree', v: profile.education.degree },
    { k: 'College', v: profile.education.college },
    { k: 'CGPA', v: profile.education.cgpa },
    { k: 'Years', v: profile.education.years },
    { k: 'Location', v: profile.location },
    { k: 'Total Prize', v: profile.totalPrize },
  ];

  return (
    <section id="about" className="section-anchor relative py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Built at the intersection of vision, language and systems."
          subtitle="I research multimodal AI, ship production CV and RAG systems, and treat product polish as part of the architecture — not a finishing pass."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <GlowCard variant="glass" glowColor="rgba(64,224,208,0.12)" className="p-7">
              <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-white/75">
                <p>
                  I&apos;m a final-year CSE (AI &amp; ML) student graduating in 2026
                  with a {profile.education.cgpa} CGPA. My focus is real-time
                  perception, time-series intelligence, and conversational AI
                  layered on retrieval — the kinds of systems that turn raw signals
                  into decisions you can act on.
                </p>
                <p>
                  I&apos;ve shipped CNN pipelines on Jetson at 28 FPS, predictive
                  models for infrastructure failure, dark-web threat intelligence
                  layers, and a real-time space-weather intelligence platform.
                  Across these, I optimize for{' '}
                  <span className="text-white">latency, clarity, and operator trust</span>.
                </p>
                <p>
                  Outside engineering, I write research papers, win hackathons,
                  and obsess over interaction design — because models matter less
                  than the surface where humans meet them.
                </p>
              </div>
            </GlowCard>
          </Reveal>

          <motion.ul
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2"
          >
            {facts.map((f) => (
              <motion.li
                key={f.k}
                variants={fadeUp}
                className="glass rounded-xl p-4"
              >
                <div className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-white/40">
                  {f.k}
                </div>
                <div className="mt-1 text-sm font-medium text-white">
                  {f.v}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
