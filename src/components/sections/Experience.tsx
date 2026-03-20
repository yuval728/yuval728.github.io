'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'AI/ML Engineer',
    company: 'xLM Continuous Intelligence',
    period: 'Jun 2025 – Present',
    location: 'Remote',
    current: true,
    highlights: [
      'LangGraph multi-agent systems: -30% execution time, +40% success rate',
      'GxP workflow automation: +65% task coverage',
      'Audit-readiness and traceability improvements',
    ],
    stack: ['LangGraph', 'Python', 'MLOps', 'GxP'],
  },
  {
    role: 'AI/ML Intern',
    company: 'xLM Continuous Intelligence',
    period: 'Jan – May 2025',
    location: 'Mumbai',
    current: false,
    highlights: [
      'Traceability matrix generator: -60% manual effort, +45% consistency',
      'Real-time QA pipelines: 100% traceability',
    ],
    stack: ['Python', 'MLOps', 'QA Pipelines'],
  },
  {
    role: 'ML Research Intern',
    company: 'IIT Kharagpur',
    period: 'Jun 2024 – May 2025',
    location: 'Remote',
    current: false,
    highlights: [
      'Autoencoders + GNN experiments: +30% video throughput',
      'Hyperparameter optimization: +20% accuracy improvement',
    ],
    stack: ['PyTorch', 'GNN', 'Autoencoders'],
  },
  {
    role: 'ML/Data Science Intern',
    company: 'JM Financial Ltd',
    period: 'Jul – Nov 2024',
    location: 'Mumbai',
    current: false,
    highlights: [
      'KYC automation with CV/DL: -40% processing time',
      'OCR document verification: +30% efficiency',
      'Large-scale data analysis: +15% operational efficiency',
    ],
    stack: ['Computer Vision', 'Deep Learning', 'OCR', 'Python'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Kenmark ITAN Solutions',
    period: 'Dec 2022 – Apr 2023',
    location: 'Mumbai',
    current: false,
    highlights: [
      'API engineering: +30% integration efficiency',
      'QA protocols: +20% reliability improvement',
      'SQL optimization: -15% query time',
    ],
    stack: ['Node.js', 'SQL', 'MySQL', 'REST APIs'],
  },
];

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

export function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="section-label mb-12">// experience</p>
        </motion.div>

        <motion.div
          className="relative space-y-8 pl-4 sm:pl-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 w-1 bg-gradient-to-b from-accent-blue via-accent-blue to-transparent h-full" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-6 top-2 h-3 w-3 rounded-full border-2 border-accent-blue bg-background sm:-left-10" />

              {/* Content */}
              <div className="rounded-lg border border-border/50 bg-surface/30 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="flex-1">
                    <h3 className="font-sans font-medium text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="mt-1 font-sans text-sm">
                      <span className="text-accent-blue hover:underline cursor-pointer">
                        {exp.company}
                      </span>
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
                    <li
                      key={i}
                      className="font-sans text-sm text-text-muted leading-relaxed"
                    >
                      <span className="text-accent-blue">•</span>{' '}
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
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
      </div>
    </section>
  );
}
