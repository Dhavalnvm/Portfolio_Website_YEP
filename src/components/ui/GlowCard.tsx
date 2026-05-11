'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  glowColor?: string;
  borderColor?: string;
  variant?: 'glass' | 'glass-strong' | 'solid';
};

export const GlowCard = forwardRef<HTMLDivElement, Props>(function GlowCard(
  { className, glowColor, borderColor, variant = 'glass', style, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      {...rest}
      className={cn(
        'group relative overflow-hidden rounded-2xl',
        variant === 'glass' && 'glass',
        variant === 'glass-strong' && 'glass-strong',
        variant === 'solid' && 'bg-bg-elev ring-1 ring-white/8',
        className,
      )}
      style={{
        ...(borderColor ? { borderColor } : {}),
        ...style,
      }}
    >
      {glowColor && (
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), ${glowColor}, transparent 40%)`,
          }}
        />
      )}
      {children}
    </div>
  );
});
