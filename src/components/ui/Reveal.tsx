'use client';

import { motion, type Variants } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span' | 'header';
};

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = 'div',
}: Props) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </Comp>
  );
}
