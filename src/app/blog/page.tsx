'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Nav } from '@/components/ui/Nav';
import { Footer } from '@/components/ui/Footer';
import { BlogCard } from '@/components/ui/BlogCard';

const fallbackPosts = [
  {
    title: 'Scaling Laws in AI: Why Bigger Models Work in Research but Break in Production',
    link: 'https://medium.com/@3ec8787f291f',
    pubDate: 'Sep 2025',
    categories: ['AI', 'ML', 'Scale'],
  },
  {
    title: 'Agentic Patterns: The Building Blocks of Reliable AI Agents',
    link: 'https://medium.com/@3ec8787f291f',
    pubDate: 'Aug 2025',
    categories: ['AI', 'Agents'],
  },
  {
    title: 'Fine-Tuning LLMs in 2025: Techniques, Trade-offs, and Use Cases',
    link: 'https://medium.com/@3ec8787f291f',
    pubDate: 'May 2025',
    categories: ['LLM', 'ML'],
  },
  {
    title: 'Machine Learning at Scale: Why PySpark MLlib Still Wins in 2025',
    link: 'https://medium.com/@3ec8787f291f',
    pubDate: 'Jul 2025',
    categories: ['BigData', 'ML'],
  },
  {
    title: 'How to Build Bulletproof Data Pipelines with PySpark',
    link: 'https://medium.com/@3ec8787f291f',
    pubDate: 'Jul 2025',
    categories: ['BigData', 'Data'],
  },
];

interface BlogPageProps {
  searchParams?: { [key: string]: string };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const [posts] = useState(fallbackPosts);
  const [searchTerm, setSearchTerm] = useState(
    searchParams?.search || ''
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams?.category || ''
  );

  // Extract all unique categories
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    posts.forEach((p) => {
      p.categories.forEach((c) => categories.add(c));
    });
    return Array.from(categories).sort();
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchTerm === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === '' ||
        post.categories.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background pt-32">
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
              className="inline-flex items-center gap-2 font-sans text-sm text-text-muted hover:text-text-primary mb-6"
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
                    ? 'border-accent-blue bg-accent-blue text-background'
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
                      ? 'border-accent-blue bg-accent-blue text-background'
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
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 },
              },
            }}
            className="mb-20"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.link}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <BlogCard
                  title={post.title}
                  link={post.link}
                  pubDate={post.pubDate}
                  categories={post.categories}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center"
            >
              <p className="font-sans text-text-muted">
                No articles found matching your search.
              </p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
