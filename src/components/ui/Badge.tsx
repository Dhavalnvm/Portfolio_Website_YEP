'use client';

import { cn, hexToRgba } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  color?: string;
  variant?: 'soft' | 'ring' | 'dot';
};

export function Badge({
  className,
  color,
  children,
  variant = 'soft',
  style,
  ...rest
}: Props) {
  const accent = color ?? '#40E0D0';
  return (
    <span
      {...rest}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-wide',
        className,
      )}
      style={{
        background: variant === 'soft' ? hexToRgba(accent, 0.1) : 'transparent',
        color: accent,
        border: variant === 'ring' ? `1px solid ${hexToRgba(accent, 0.4)}` : '1px solid ' + hexToRgba(accent, 0.18),
        ...style,
      }}
    >
      {variant === 'dot' && (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
        />
      )}
      {children}
    </span>
  );
}
