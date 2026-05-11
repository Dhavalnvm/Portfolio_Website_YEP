import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ParticlesBackground } from '@/components/layout/ParticlesBackground';
import { profile } from '@/data/portfolio';

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: `${profile.title}. Published researcher, 3x hackathon winner, computer vision engineer.`,
  keywords: ['AI Engineer', 'Machine Learning', 'Computer Vision', 'Deep Learning', 'Portfolio'],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: 'AI & Machine Learning Engineer portfolio.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#05060A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="cursor-none-desktop" data-loading="true">
        <LoadingScreen />
        <SmoothScroll>
          <CustomCursor />
          <ParticlesBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
