'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: Props) {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        'mb-9 flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.32em] text-white/50"
        >
          <span className="h-px w-8 bg-gradient-to-r from-[#00FFCC] to-transparent" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
