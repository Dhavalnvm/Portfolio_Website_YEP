'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AchievementCard } from '@/components/ui/AchievementCard';
import { Lightbox } from '@/components/ui/Lightbox';
import { achievements, type Achievement } from '@/data/achievements';

export function AchievementsSection() {
  const [active, setActive] = useState<Achievement | null>(null);

  const lightboxImages: StaticImageData[] = active
    ? active.secondaryImage
      ? [active.image, active.secondaryImage]
      : [active.image]
    : [];

  return (
    <section id="achievements" className="section-anchor relative py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured Wins"
          title="Trophy moments, in pixels."
          subtitle="Hover to peek — click any card to see the full image."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <AchievementCard
              key={a.id}
              achievement={a}
              index={i}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      <Lightbox
        images={lightboxImages}
        title={active?.title}
        subtitle={active?.subtitle}
        open={!!active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
