'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  stars: number;
  topics: string[];
  homepage?: string;
}

export function ProjectCard({
  name,
  description,
  url,
  stars,
  topics,
  homepage,
}: ProjectCardProps) {
  return (
    <motion.div
      className="flex flex-col rounded-xl border border-border/30 bg-surface/30 p-5 transition-all hover:border-accent-blue hover:bg-surface/50"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="mb-3 flex items-start justify-between">
        <h3 className="font-sans font-medium text-text-primary">{name}</h3>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent-blue"
          aria-label="Open project"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      <p className="mb-4 font-sans text-sm leading-relaxed text-text-muted line-clamp-2">
        {description}
      </p>

      <div className="mb-4 flex items-center gap-2 font-mono text-xs text-text-muted">
        <span>⭐</span>
        <span>{stars}</span>
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {topics.slice(0, 5).map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-border/50 bg-surface px-2 py-0.5 font-mono text-xs text-text-muted"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-3 pt-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent-blue hover:underline"
        >
          GitHub →
        </a>
        {homepage && (
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent-green hover:underline"
          >
            Live Demo →
          </a>
        )}
      </div>
    </motion.div>
  );
}
