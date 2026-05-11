'use client';

import { useMagnetic } from '@/hooks/useMagnetic';
import { cn } from '@/lib/utils';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost';
  strength?: number;
};

export function MagneticButton({
  className,
  children,
  variant = 'primary',
  strength = 0.25,
  ...rest
}: Props) {
  const ref = useMagnetic<HTMLAnchorElement>({ strength, scale: 1.04 });
  return (
    <a
      ref={ref}
      {...rest}
      data-cursor="hover"
      className={cn(
        'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[box-shadow,background-color] will-change-transform',
        variant === 'primary' &&
          'bg-white text-black hover:shadow-[0_8px_40px_-8px_rgba(64,224,208,0.6)]',
        variant === 'ghost' &&
          'ring-1 ring-white/15 text-white/90 hover:bg-white/5 hover:ring-[#40E0D0]/40',
        className,
      )}
    >
      {children}
    </a>
  );
}
