'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { profile } from '@/data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Contact() {
  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', value: 'Dhavalnvm', href: profile.github },
    { label: 'LinkedIn', value: 'dhaval-smart', href: profile.linkedin },
    { label: 'Location', value: profile.location, href: null },
  ];

  return (
    <section id="contact" className="section-anchor relative py-16 sm:py-20">
      <div className="container-page">
        <GlowCard
          variant="glass-strong"
          className="relative overflow-hidden p-10 sm:p-14"
          glowColor="rgba(64,224,208,0.18)"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#40E0D0]/15 blur-[120px]" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#7B2FBE]/15 blur-[120px]" />

          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something the future remembers."
            subtitle="Open to roles, research collaborations, and ambitious problems in AI/ML, computer vision, and applied research."
          />

          <motion.div
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {links.map((l) =>
              l.href ? (
                <motion.a
                  key={l.label}
                  variants={fadeUp}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  data-cursor="hover"
                  className="glass group flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-white/[0.06]"
                >
                  <div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-white/45">
                      {l.label}
                    </div>
                    <div className="text-sm font-medium text-white">{l.value}</div>
                  </div>
                  <span className="text-white/30 transition-colors group-hover:text-[#40E0D0]">
                    ↗
                  </span>
                </motion.a>
              ) : (
                <motion.div
                  key={l.label}
                  variants={fadeUp}
                  className="glass flex items-center justify-between rounded-xl p-4"
                >
                  <div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-white/45">
                      {l.label}
                    </div>
                    <div className="text-sm font-medium text-white">{l.value}</div>
                  </div>
                </motion.div>
              ),
            )}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href={`mailto:${profile.email}`} variant="primary">
              Send a message
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton href={profile.linkedin} variant="ghost">
              Connect on LinkedIn
            </MagneticButton>
          </motion.div>
        </GlowCard>
      </div>
    </section>
  );
}
