'use client';

import { motion } from 'framer-motion';

export function StatusPill() {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-2 w-2 rounded-full bg-accent-green"
      />
      <span className="text-sm font-medium text-accent-green">
        Open to opportunities
      </span>
    </div>
  );
}
