'use client';

import { motion } from 'framer-motion';

interface TimelineItemProps {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
  stack: string[];
}

interface TimelineProps {
  items: TimelineItemProps[];
}

function highlightNumbers(text: string) {
  // Bold any percentage, number with +/-, or metric like "100%"
  const parts = text.split(/(\b[+-]?\d+%?(?:\s*(?:participants|accuracy|efficiency|effort|time|coverage|traceability|reliability|throughput|rate))?\b)/g);
  return parts.map((part, i) =>
    /^[+-]?\d+/.test(part) ? <strong key={i} className="font-semibold text-text-primary">{part}</strong> : part
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Timeline({ items }: TimelineProps) {
  return (
    <motion.div
      className="relative space-y-8 pl-4 sm:pl-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent-blue via-accent-blue/50 to-transparent" />

      {items.map((exp, idx) => (
        <motion.div key={idx} className="relative" variants={itemVariants}>
          {/* Timeline Dot — filled = current, ring = past */}
          <div
            className={`absolute -left-[5px] sm:-left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent-blue ${
              exp.current ? 'bg-accent-blue' : 'bg-background'
            }`}
            style={{ left: '-5px' }}
          />

          {/* Content Card */}
          <div className="ml-4 sm:ml-6 rounded-lg border border-border/50 bg-surface/30 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="flex-1">
                <h3 className="font-sans font-medium text-text-primary">
                  {exp.role}
                </h3>
                <p className="mt-1 font-sans text-sm">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-accent-blue">{exp.company}</span>
                  )}
                  <span className="mx-2 text-text-muted">·</span>
                  <span className="text-text-muted">{exp.location}</span>
                </p>
              </div>
              <p className="font-mono text-xs text-text-muted whitespace-nowrap">
                {exp.period}
              </p>
            </div>

            {/* Highlights */}
            <ul className="mt-4 space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="font-sans text-sm text-text-muted leading-relaxed">
                  <span className="text-accent-blue">•</span>{' '}
                  {highlightNumbers(highlight)}
                </li>
              ))}
            </ul>

            {/* Tech Stack Pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/50 bg-surface px-2.5 py-1 font-mono text-xs text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
