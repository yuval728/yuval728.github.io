'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  colorClass: string;
}

export function SkillBadge({ name, colorClass }: SkillBadgeProps) {
  return (
    <motion.span
      className={`skill-pill border ${colorClass} cursor-default`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
    >
      {name}
    </motion.span>
  );
}
