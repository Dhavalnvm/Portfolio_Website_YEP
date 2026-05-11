import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#05060A',
          elev: '#0A0C14',
          card: 'rgba(12,14,24,0.55)',
        },
        accent: {
          cyan: '#00FFCC',
          teal: '#40E0D0',
          violet: '#7B2FBE',
          gold: '#FFD700',
          amber: '#F4A936',
          coral: '#FF6B35',
          green: '#4CAF50',
        },
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'grid-dim':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(circle at 50% 0%, rgba(64,224,208,0.12), transparent 60%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, #00FFCC 0deg, #7B2FBE 180deg, #00FFCC 360deg)',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'spin-slow': 'spin 18s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', filter: 'blur(28px)' },
          '50%': { opacity: '0.9', filter: 'blur(40px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(64,224,208,0.35)',
        'glow-violet': '0 0 60px -10px rgba(123,47,190,0.45)',
        card: '0 10px 40px -10px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};

export default config;
