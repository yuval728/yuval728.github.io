'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  link: string;
  pubDate: string;
  categories?: string[];
}

export function BlogCard({
  title,
  link,
  pubDate,
  categories = [],
}: BlogCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-border/30 py-4 transition-colors hover:text-accent-blue"
      whileHover={{ x: 4 }}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <h3 className="font-sans font-medium text-text-primary group-hover:text-accent-blue">
            {title}
          </h3>
          {categories.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {categories.slice(0, 3).map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-border/50 bg-surface/30 px-2 py-0.5 font-mono text-xs text-text-muted"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="font-mono text-sm text-text-muted whitespace-nowrap">
          {pubDate}
        </p>
      </div>
    </motion.a>
  );
}
