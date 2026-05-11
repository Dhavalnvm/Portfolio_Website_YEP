'use client';

import { useTilt } from '@/hooks/useTilt';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  max?: number;
  perspective?: number;
  scale?: number;
};

export function TiltCard({
  className,
  children,
  max = 6,
  perspective = 1000,
  scale = 1.015,
  style,
  ...rest
}: Props) {
  const ref = useTilt<HTMLDivElement>({ max, perspective, scale });
  return (
    <div
      ref={ref}
      {...rest}
      className={cn('transition-transform will-change-transform', className)}
      style={{ transformStyle: 'preserve-3d', ...style }}
    >
      {children}
    </div>
  );
}
