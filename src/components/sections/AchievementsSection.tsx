'use client';

import { useState } from 'react';
import type { StaticImageData } from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AchievementCard } from '@/components/ui/AchievementCard';
import { Lightbox } from '@/components/ui/Lightbox';
import { achievements, type Achievement } from '@/data/achievements';

export function AchievementsSection() {
  // `current` stays set after close so images stay valid during the exit animation.
  // `open` is the actual visibility flag the Lightbox uses.
  const [current, setCurrent] = useState<Achievement | null>(null);
  const [open, setOpen] = useState(false);

  function openCard(a: Achievement) {
    setCurrent(a);
    setOpen(true);
  }

  const images: StaticImageData[] = current
    ? current.secondaryImage
      ? [current.image, current.secondaryImage]
      : [current.image]
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
              onOpen={openCard}
            />
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        title={current?.title}
        subtitle={current?.subtitle}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
