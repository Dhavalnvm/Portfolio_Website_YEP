export const theme = {
  colors: {
    bg: '#05060A',
    bgElev: '#0A0C14',
    text: '#E6EAF2',
    textDim: '#9AA3B2',
    line: 'rgba(255,255,255,0.08)',
    cyan: '#00FFCC',
    teal: '#40E0D0',
    violet: '#7B2FBE',
    gold: '#FFD700',
    amber: '#F4A936',
    coral: '#FF6B35',
    green: '#4CAF50',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #00FFCC 0%, #40E0D0 50%, #7B2FBE 100%)',
    cool: 'linear-gradient(135deg, #40E0D0 0%, #7B2FBE 100%)',
    warm: 'linear-gradient(135deg, #FFD700 0%, #FF6B35 100%)',
    sheen:
      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)',
  },
  radius: {
    sm: '10px',
    md: '16px',
    lg: '24px',
    pill: '999px',
  },
  ease: {
    standard: [0.22, 1, 0.36, 1] as [number, number, number, number],
    out: [0.16, 1, 0.3, 1] as [number, number, number, number],
    inOut: [0.83, 0, 0.17, 1] as [number, number, number, number],
  },
  duration: {
    fast: 0.25,
    base: 0.55,
    slow: 0.9,
  },
} as const;

export type Theme = typeof theme;
