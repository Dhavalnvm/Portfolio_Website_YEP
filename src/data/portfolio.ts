export const profile = {
  name: 'Dhaval Smart',
  title: 'AI & Machine Learning Engineer',
  location: 'Navi Mumbai, Maharashtra, India',
  email: 'dhavalasmart@gmail.com',
  github: 'https://github.com/Dhavalnvm',
  linkedin: 'https://www.linkedin.com/in/dhaval-smart-61065424b/',
  education: {
    degree: 'B.E. CSE (AI & ML)',
    college: 'Smt. Indira Gandhi College of Engineering',
    cgpa: '9.75',
    years: '2022–2026',
  },
  roles: [
    'AI Engineer',
    '3x Hackathon Winner',
    'Computer Vision Researcher',
    'Published Researcher',
    'Deep Learning Architect',
  ],
  totalPrize: '₹1,17,000+',
} as const;

export const experience = {
  company: 'Gofloat Defense Tech Pvt. Ltd.',
  url: 'https://www.gofloat.tech/',
  role: 'ML Intern',
  period: 'Feb – Aug 2025',
  highlights: [
    'PyTorch + CUDA CNN pipeline for real-time marine vessel detection — 91% mAP at 28 FPS on NVIDIA Jetson',
    'TensorFlow preprocessing improving image contrast ~40% in low-visibility underwater conditions',
    'PID-controlled underwater drone with PyQt real-time control UI',
    'Production RAG chatbot (Flutter + Python) — reduced query resolution time ~60%',
  ],
} as const;

export type Skill = { name: string; level: number; color: string };
export type Tool = { name: string; color: string };

export const skills = {
  core: [
    { name: 'Machine Learning', level: 95, color: '#00FFCC' },
    { name: 'Deep Learning', level: 92, color: '#40E0D0' },
    { name: 'Computer Vision', level: 90, color: '#7B2FBE' },
    { name: 'LLMs & RAG', level: 88, color: '#00FFCC' },
    { name: 'Multimodal AI', level: 85, color: '#40E0D0' },
    { name: 'Time-Series Forecasting', level: 87, color: '#7B2FBE' },
  ] as Skill[],
  tools: [
    { name: 'PyTorch', color: '#EE4C2C' },
    { name: 'TensorFlow', color: '#FF6F00' },
    { name: 'YOLOv8–v11', color: '#00FFCC' },
    { name: 'LangChain', color: '#40E0D0' },
    { name: 'Streamlit', color: '#FF4B4B' },
    { name: 'Flutter', color: '#54C5F8' },
    { name: 'Redis', color: '#DC382D' },
    { name: 'Kafka', color: '#40E0D0' },
    { name: 'Ollama', color: '#7B2FBE' },
    { name: 'PyQt', color: '#41CD52' },
    { name: 'FastAPI', color: '#009688' },
    { name: 'ClickHouse', color: '#FFCC00' },
    { name: 'Three.js', color: '#00FFCC' },
    { name: 'GSAP', color: '#8BC34A' },
    { name: 'React', color: '#61DAFB' },
    { name: 'NVIDIA Jetson', color: '#76B900' },
  ] as Tool[],
  languages: [
    { name: 'Python', color: '#3776AB' },
    { name: 'C', color: '#A8B9CC' },
    { name: 'Dart / Flutter', color: '#54C5F8' },
  ] as Tool[],
};

export type ProjectTheme = { primary: string; secondary: string; glow: string };
export type FeaturedProject = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  stack: string[];
  github?: string;
  paper?: string;
  theme: ProjectTheme;
  icon: string;
  chamber: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'aether',
    title: 'Aether',
    subtitle: 'Space Weather Intelligence Platform',
    badge: 'Research Paper · 2026',
    description:
      'Real-time NASA/NOAA satellite data ingestion via Kafka → ClickHouse. LSTM + Prophet forecasting, Isolation Forest anomaly detection. RAG chatbot with Flutter app and WebSocket streaming.',
    stack: ['Kafka', 'ClickHouse', 'LSTM', 'Prophet', 'Flutter', 'FastAPI', 'RAG'],
    paper:
      'https://irjiet.com/Volume-10/Issue-4-April-2026/Aether-A-Real-Time-Space-Weather-Intelligence-Platform-Combining-Stream-Processing-Ensemble-ML-and-RAG-Based-Conversational-AI/3158',
    theme: { primary: '#40E0D0', secondary: '#1A5276', glow: 'rgba(64,224,208,0.3)' },
    icon: '✦',
    chamber: 'observatory',
  },
  {
    id: 'shadowecho',
    title: 'ShadowEcho',
    subtitle: 'Dark Web Threat Intelligence Platform',
    badge: '1st Runner Up — ₹75,000',
    description:
      '4-layer pipeline with 5 intelligence modules for actor fingerprinting & narrative reconstruction. Cutting-edge dark web analysis.',
    stack: ['React', 'FastAPI', 'ChromaDB', 'Ollama'],
    github: 'https://github.com/Dhavalnvm/Lost_From_LIght_ShadowEcho',
    theme: { primary: '#7B2FBE', secondary: '#1A0029', glow: 'rgba(123,47,190,0.4)' },
    icon: '◈',
    chamber: 'dark',
  },
  {
    id: 'lexnova',
    title: 'Lexnova',
    subtitle: 'AI Legal Document Guidance System',
    badge: 'Winner — ₹25,000',
    description:
      'Multi-agent clause-level risk analysis + negotiation strategy using LLMs + RAG. Transforms complex legal documents into actionable insights.',
    stack: ['LangChain', 'FastAPI', 'RAG', 'LLMs', 'React'],
    github: 'https://github.com/Dhavalnvm/Lost_from_light_Lexnova',
    theme: { primary: '#FFD700', secondary: '#2a1a00', glow: 'rgba(255,215,0,0.3)' },
    icon: '⚖',
    chamber: 'library',
  },
  {
    id: 'infrapulse',
    title: 'InfraPulse',
    subtitle: 'NASA POWER Predictive Infrastructure Maintenance',
    badge: 'Winner — ₹15,000',
    description:
      'Prophet + LSTM models with real-time weather risk thresholds across 8 infrastructure types. Monitors and predicts failures before they happen.',
    stack: ['Flutter', 'FastAPI', 'ClickHouse', 'Ollama', 'Prophet', 'LSTM'],
    github: 'https://github.com/Sr1ya/Infra-Pulse',
    theme: { primary: '#F4A936', secondary: '#1a0e05', glow: 'rgba(244,169,54,0.3)' },
    icon: '⬡',
    chamber: 'throne',
  },
  {
    id: 'beatlens',
    title: 'BeatLens',
    subtitle: 'AI Music Recommendation System',
    badge: 'Research Paper Published 2025',
    description:
      'YOLOv8 + CLIP for visual mood analysis. LLM recommends songs in 60+ languages based on what you see. Where vision meets music.',
    stack: ['YOLOv8', 'CLIP', 'LLMs', 'Python', 'Computer Vision'],
    github: 'https://github.com/Dhavalnvm/BeatLens',
    theme: { primary: '#FF6B35', secondary: '#1a0800', glow: 'rgba(255,107,53,0.3)' },
    icon: '♪',
    chamber: 'music',
  },
  {
    id: 'aion',
    title: 'Aion',
    subtitle: 'Environmental Impact Analysis Platform',
    badge: '2025',
    description:
      'LLM platform for metallurgy & mining with real-time CO₂/emissions analysis and automated BSRS compliance reporting.',
    stack: ['LLMs', 'FastAPI', 'React', 'Python', 'Emissions Analysis'],
    github: 'https://github.com/Dhavalnvm/Aion',
    theme: { primary: '#4CAF50', secondary: '#0a1a0a', glow: 'rgba(76,175,80,0.3)' },
    icon: '⬦',
    chamber: 'garden',
  },
  {
    id: 'tempestsense',
    title: 'Tempest Sense',
    subtitle: 'Real-Time Cyclone Prediction System',
    badge: '2026',
    description:
      'Live cyclone forecasting on real-time NOAA streams. Kafka ingestion → ClickHouse + Redis cache. Ensemble of Isolation Forest, Prophet, and LSTM with autoencoders for anomaly-aware long-horizon prediction.',
    stack: ['NOAA', 'Kafka', 'ClickHouse', 'Redis', 'Isolation Forest', 'Prophet', 'LSTM', 'Autoencoders'],
    github: 'https://github.com/Dhavalnvm/Tempest_Sense',
    theme: { primary: '#5B9BFF', secondary: '#0A1428', glow: 'rgba(91,155,255,0.32)' },
    icon: '⚡',
    chamber: 'tempest',
  },
];

export type OtherProject = { name: string; github: string; desc: string };

export const otherProjects: OtherProject[] = [
  { name: 'Poseidon Watch', github: 'https://github.com/Dhavalnvm/Poseidon-Watch', desc: 'Ocean monitoring system' },
  { name: 'Oblivion Engine', github: 'https://github.com/Dhavalnvm/Oblivion-Engine', desc: 'Custom rendering engine' },
  { name: 'RenderBox', github: 'https://github.com/Dhavalnvm/RenderBox', desc: 'Rendering toolkit' },
  { name: 'The Graphtagon', github: 'https://github.com/Dhavalnvm/The-Graphtagon', desc: 'Graph visualization' },
  { name: 'Magnum Opus', github: 'https://github.com/Dhavalnvm/Magnum-Opus', desc: 'Flagship AI project' },
  { name: 'Lucent', github: 'https://github.com/Dhavalnvm/Lucent', desc: 'Light simulation' },
  { name: 'Phantom Keys', github: 'https://github.com/Dhavalnvm/Phantom-Keys', desc: 'Keystroke analysis' },
  { name: 'Self-Aware Snake', github: 'https://github.com/Dhavalnvm/Self-Aware-Snake-Unlike-you', desc: 'RL snake AI' },
  { name: "Parkinson's Detection", github: 'https://github.com/Dhavalnvm/Parkinson-s-detection-using-mri', desc: 'MRI-based medical AI' },
];

export type Award = {
  title: string;
  subtitle: string;
  prize: string;
  type: 'hackathon' | 'competition';
  icon: string;
};

export const awards: Award[] = [
  { title: '1st Place — Enlightenment TechFest', subtitle: 'InfraPulse', prize: '₹15,000', type: 'hackathon', icon: '🏆' },
  { title: '1st Place — CodeBits Hackathon', subtitle: 'Lexnova', prize: '₹25,000', type: 'hackathon', icon: '🏆' },
  { title: '1st Runner Up — HackUps', subtitle: 'ShadowEcho', prize: '₹75,000', type: 'hackathon', icon: '🥈' },
  { title: '1st Place — Resilience TechMaster', subtitle: 'Inter-College Project Presentation', prize: '₹7,000', type: 'competition', icon: '🏅' },
  { title: '1st Place — National Poster Presentation', subtitle: 'Research Excellence', prize: '₹2,000', type: 'competition', icon: '🏅' },
  { title: '1st Place — Ideathon', subtitle: 'Innovation Challenge', prize: '₹1,000', type: 'competition', icon: '🏅' },
  { title: '1st Place — App Design Challenge', subtitle: 'UI/UX Excellence', prize: '₹1,000', type: 'competition', icon: '🏅' },
  { title: 'Runner Up — National Project Presentation', subtitle: 'Research Excellence', prize: '₹2,000', type: 'competition', icon: '🏅' },
  { title: '4x Winner — Enlightenment TechFest', subtitle: 'Multiple Categories', prize: 'Multiple', type: 'competition', icon: '⭐' },
];

export type ResearchPaper = {
  title: string;
  journal: string;
  volume: string;
  date: string;
  link: string;
  abstract: string;
  relatedProject: string | null;
};

export const researchPapers: ResearchPaper[] = [
  {
    title: 'BeatLens: A Context-Aware Vision-to-Music Framework for Image-Based Song Recommendations',
    journal: 'IRJIET',
    volume: 'Volume 9, Issue 4',
    date: 'April 2025',
    link: 'https://irjiet.com/Volume-9/Issue-4-April-2025/BeatLens-A-Context-Aware-Vision-to-Music-Framework-for-Image-Based-Song-Recommendations/2636',
    abstract:
      'A novel framework combining YOLOv8 and CLIP for visual mood analysis to recommend music across 60+ languages based on image content.',
    relatedProject: 'beatlens',
  },
  {
    title: 'Robust Predictive Model to Forecast Air Quality Index Level',
    journal: 'IRJIET',
    volume: 'Volume 8, Issue 4',
    date: 'April 2024',
    link: 'https://irjiet.com/Volume-8/Issue-4-April-2024/Robust-Predictive-Model-to-Forecast-Air-Quality-Index-Level/2172',
    abstract:
      'A robust ensemble machine learning approach for accurate Air Quality Index forecasting using multi-source environmental data.',
    relatedProject: null,
  },
  {
    title:
      'Aether: A Real-Time Space Weather Intelligence Platform Combining Stream Processing, Ensemble ML, and RAG-Based Conversational AI',
    journal: 'IRJIET',
    volume: 'Volume 10, Issue 4',
    date: 'April 2026',
    link: 'https://irjiet.com/Volume-10/Issue-4-April-2026/Aether-A-Real-Time-Space-Weather-Intelligence-Platform-Combining-Stream-Processing-Ensemble-ML-and-RAG-Based-Conversational-AI/3158',
    abstract:
      'Aether is a local-first space weather monitoring platform enabling real-time forecasting, anomaly detection, and natural language querying',
    relatedProject: 'aether',
  },
];

export type Certification = {
  title: string;
  issuer: string;
  link: string;
  color: string;
  initial: string;
};

export const certifications: Certification[] = [
  {
    title: 'Oracle OCI Generative AI Professional',
    issuer: 'Oracle',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=5240121A5A489B418380C6B7D48C5A536FF704FD61FF0C72DE1571CBBF8205C5',
    color: '#F80000',
    initial: 'O',
  },
  {
    title: 'NVIDIA Jetson Orin Nano AI',
    issuer: 'NVIDIA',
    link: 'https://learn.nvidia.com/certificates?id=iYVPqXnVRf-s5trnLaZ9Fw',
    color: '#76B900',
    initial: 'N',
  },
  {
    title: 'Tata GenAI Powered Data Analysis',
    issuer: 'Tata / Forage',
    link: 'https://www.theforage.com/simulations/tata/data-analytics-t3zr/completed',
    color: '#003399',
    initial: 'T',
  },
  {
    title: 'ROS2 Robotics Operating System',
    issuer: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-5e734908-ae38-43d7-b9d7-7e2fd4b486e1/',
    color: '#A435F0',
    initial: 'U',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
] as const;
