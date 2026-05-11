import type { StaticImageData } from 'next/image';
import codebits from '../../assets/Codebits.jpg';
import hackups from '../../assets/hackups.jpg';
import news from '../../assets/News.jpg';
import resilience from '../../assets/Resilence.jpg';
import sigce from '../../assets/sigce.jpg';

export type Achievement = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  prize?: string;
  icon: string;
  glowColor: string;
  image: StaticImageData;
  secondaryImage?: StaticImageData;
  caption?: string;
};

export type SecondaryWin = {
  id: string;
  title: string;
  subtitle: string;
  prize: string;
  icon: string;
};

export const secondaryWins: SecondaryWin[] = [
  {
    id: 'poster',
    title: '1st Place — National Poster Presentation',
    subtitle: 'Research Excellence',
    prize: '₹2,000',
    icon: '🏅',
  },
  {
    id: 'ideathon',
    title: '1st Place — Ideathon',
    subtitle: 'Innovation Challenge',
    prize: '₹1,000',
    icon: '🏅',
  },
  {
    id: 'app-design',
    title: '1st Place — App Design Challenge',
    subtitle: 'UI/UX Excellence',
    prize: '₹1,000',
    icon: '🏅',
  },
  {
    id: 'national-runner-up',
    title: 'Runner Up — National Project Presentation',
    subtitle: 'Research Excellence',
    prize: '₹2,000',
    icon: '🏅',
  },
  {
    id: 'enlightenment-4x',
    title: '4× Winner — Enlightenment TechFest',
    subtitle: 'Multiple Categories',
    prize: 'Multiple',
    icon: '⭐',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'codebits',
    title: 'Lexnova',
    subtitle: 'CodeBits Hackathon · Winner',
    year: '2025',
    prize: '₹25,000',
    icon: '🏆',
    glowColor: '#FFD700',
    image: codebits,
    secondaryImage: news,
    caption: 'AI legal document guidance with multi-agent risk analysis. Featured in newspaper coverage.',
  },
  {
    id: 'hackups',
    title: 'ShadowEcho',
    subtitle: 'HackUps · 1st Runner Up',
    year: '2025',
    prize: '₹75,000',
    icon: '🥈',
    glowColor: '#7B2FBE',
    image: hackups,
    caption: 'Dark web threat intelligence platform — 4-layer pipeline, 5 intel modules.',
  },
  {
    id: 'sigce',
    title: 'InfraPulse',
    subtitle: 'Enlightenment TechFest · Winner',
    year: '2024',
    prize: '₹15,000',
    icon: '🏆',
    glowColor: '#F4A936',
    image: sigce,
    caption: 'NASA POWER predictive infrastructure maintenance across 8 risk types.',
  },
  {
    id: 'resilience',
    title: 'Project Excellence',
    subtitle: 'Resilience TechMaster · 1st Place',
    year: '2024',
    prize: '₹7,000',
    icon: '🏅',
    glowColor: '#40E0D0',
    image: resilience,
    caption: 'Inter-college project presentation winner.',
  },
];
