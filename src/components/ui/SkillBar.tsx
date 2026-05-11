'use client';

import { motion } from 'framer-motion';
import { hexToRgba } from '@/lib/utils';
import { viewportOnce } from '@/lib/motion';

type Props = {
  name: string;
  level: number;
  color: string;
  index?: number;
};

export function SkillBar({ name, level, color, index = 0 }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white/90">{name}</span>
        <span
          className="font-mono text-[11px] tracking-wide"
          style={{ color }}
        >
          {level}%
        </span>
      </div>
      <div
        className="relative h-1.5 w-full overflow-hidden rounded-full"
        style={{ background: hexToRgba(color, 0.08) }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={viewportOnce}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.05 * index,
          }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${hexToRgba(color, 0.7)}, ${color})`,
            boxShadow: `0 0 18px ${hexToRgba(color, 0.5)}`,
          }}
        />
      </div>
    </div>
  );
}
