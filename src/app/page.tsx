import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { Awards } from '@/components/sections/Awards';
import { ResearchPapers } from '@/components/sections/ResearchPapers';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <AchievementsSection />
      <Awards />
      <ResearchPapers />
      <Certifications />
      <Contact />
    </>
  );
}
