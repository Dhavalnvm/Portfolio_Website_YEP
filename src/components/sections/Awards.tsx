'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AwardCard } from '@/components/ui/AwardCard';
import { GlowCard } from '@/components/ui/GlowCard';
import { awards, profile } from '@/data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Awards() {
  const hackathonCount = awards.filter((a) => a.type === 'hackathon').length;
  const competitionCount = awards.filter((a) => a.type === 'competition').length;

  return (
    <section id="awards" className="section-anchor relative py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Recognition"
          title="9 wins, ₹1,17,000+ in prizes."
          subtitle="Hackathons, ideathons, presentations — building under constraint sharpens the work."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { k: 'Total prize', v: profile.totalPrize },
            { k: 'Hackathon wins', v: `${hackathonCount}×` },
            { k: 'Competitions', v: `${competitionCount}×` },
            { k: 'Years competing', v: '3+' },
          ].map((s) => (
            <motion.div
              key={s.k}
              variants={fadeUp}
            >
              <GlowCard variant="glass" className="p-4">
                <div className="font-display text-xl font-semibold text-white">
                  {s.v}
                </div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/45">
                  {s.k}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => (
            <AwardCard key={a.title} award={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
