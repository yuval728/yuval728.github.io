'use client';

import { motion } from 'framer-motion';
import { CONFIG } from '@/data/config';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Stats() {
  return (
    <section id="stats" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <motion.div
          className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {CONFIG.stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              variants={itemVariants}
            >
              <p className="font-display text-3xl font-normal text-accent-blue">
                {stat.value}
              </p>
              <p className="mt-2 font-sans text-sm text-text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {CONFIG.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              className="flex gap-4 rounded-lg border border-border/50 bg-surface/30 p-6"
              variants={itemVariants}
            >
              <span className="text-2xl">{achievement.icon}</span>
              <div className="flex-1">
                <h3 className="font-sans font-medium text-text-primary">
                  {achievement.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-text-muted">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
