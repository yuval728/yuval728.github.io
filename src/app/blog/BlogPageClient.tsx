'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogCard } from '@/components/ui/BlogCard';

interface Post {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
}

export function BlogPageClient({ initialPosts }: { initialPosts: Post[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    initialPosts.forEach((p) => p.categories.forEach((c) => cats.add(c)));
    return Array.from(cats).sort();
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        searchTerm === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === '' || post.categories.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [initialPosts, searchTerm, selectedCategory]);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 font-sans text-sm text-text-muted hover:text-text-primary"
        >
          ← Back to home
        </Link>
        <h1 className="font-display text-5xl font-normal text-text-primary">
          Writing
        </h1>
        <p className="mt-2 font-sans text-text-muted">
          {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 space-y-6"
      >
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 font-sans text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
        />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`rounded-full px-4 py-2 font-mono text-sm transition-all ${
              selectedCategory === ''
                ? 'bg-accent-blue text-background'
                : 'border border-border text-text-muted hover:border-accent-blue'
            }`}
          >
            All
          </button>
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 font-mono text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-accent-blue text-background'
                  : 'border border-border text-text-muted hover:border-accent-blue'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Posts */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
        className="mb-20"
      >
        {filteredPosts.map((post) => (
          <motion.div
            key={post.link + post.title}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <BlogCard
              title={post.title}
              link={post.link}
              pubDate={post.pubDate}
              categories={post.categories}
            />
          </motion.div>
        ))}

        {filteredPosts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
            <p className="font-sans text-text-muted">No articles found matching your search.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
