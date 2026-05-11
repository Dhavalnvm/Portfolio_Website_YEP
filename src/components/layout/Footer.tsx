'use client';

import { profile } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-8 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-white/40">
          © {year} {profile.name}. Engineered with intent.
        </p>
        <div className="flex items-center gap-5 text-xs text-white/50">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white" data-cursor="hover">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white" data-cursor="hover">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-white" data-cursor="hover">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
