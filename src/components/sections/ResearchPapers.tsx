'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { PaperCard } from '@/components/ui/PaperCard';
import { researchPapers } from '@/data/portfolio';

export function ResearchPapers() {
  return (
    <section id="research" className="section-anchor relative py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Research"
          title="Published papers."
          subtitle="Peer-reviewed work in IRJIET on vision-to-music recommendation, AQI forecasting, and real-time space weather intelligence."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {researchPapers.map((p, i) => (
            <PaperCard key={p.title} paper={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
