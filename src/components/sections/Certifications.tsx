'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { certifications } from '@/data/portfolio';

export function Certifications() {
  return (
    <section id="certifications" className="section-anchor relative py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentialed across cloud AI, edge, data, and robotics."
          subtitle="Continuous learning — Oracle, NVIDIA, Tata, Udemy."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <CertificationCard key={c.title} cert={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
