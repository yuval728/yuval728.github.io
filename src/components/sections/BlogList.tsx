'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogCard } from '@/components/ui/BlogCard';
import { CONFIG } from '@/data/config';

interface Post {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
}

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <section id="blog" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="section-label mb-12">// writing</p>
        </motion.div>

        <div className="space-y-0">
          {posts.map((post) => (
            <BlogCard
              key={post.link}
              title={post.title}
              link={post.link}
              pubDate={post.pubDate}
              categories={post.categories}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-8"
        >
          <a
            href={`https://medium.com/@${CONFIG.medium}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans font-medium text-accent-blue hover:underline"
          >
            Read all articles on Medium →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
