'use client';

import { motion } from 'framer-motion';

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
      className="group block border-b border-border/30 py-5 transition-colors"
      whileHover={{ x: 2 }}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-medium text-text-primary transition-colors group-hover:text-accent-blue">
              {title}
            </h3>
            {/* Right arrow appears on hover */}
            <span className="translate-x-0 opacity-0 text-accent-blue transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </div>
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
        <p className="font-mono text-sm text-text-muted whitespace-nowrap sm:ml-4">
          {pubDate}
        </p>
      </div>
    </motion.a>
  );
}

