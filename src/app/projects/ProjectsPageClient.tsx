'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectCard } from '@/components/ui/ProjectCard';

interface Project {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  homepage: string | null;
}

export function ProjectsPageClient({ initialProjects }: { initialProjects: Project[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  const allTopics = useMemo(() => {
    const topics = new Set<string>();
    initialProjects.forEach((p) => p.topics.forEach((t) => topics.add(t)));
    return Array.from(topics).sort();
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesSearch =
        searchTerm === '' ||
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTopic =
        selectedTopic === '' || project.topics.includes(selectedTopic);
      return matchesSearch && matchesTopic;
    });
  }, [initialProjects, searchTerm, selectedTopic]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
        <h1 className="font-display text-5xl font-normal text-text-primary">All Projects</h1>
        <p className="mt-2 font-sans text-text-muted">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
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
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 font-sans text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
        />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTopic('')}
            className={`rounded-full px-4 py-2 font-mono text-sm transition-all ${
              selectedTopic === ''
                ? 'bg-accent-blue text-background'
                : 'border border-border text-text-muted hover:border-accent-blue'
            }`}
          >
            All
          </button>
          {allTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`rounded-full px-4 py-2 font-mono text-sm transition-all ${
                selectedTopic === topic
                  ? 'bg-accent-blue text-background'
                  : 'border border-border text-text-muted hover:border-accent-blue'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 mb-20"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.name}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <ProjectCard
              name={project.name}
              description={project.description || 'No description'}
              url={project.html_url}
              stars={project.stargazers_count}
              topics={project.topics}
              homepage={project.homepage || undefined}
            />
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
          <p className="font-sans text-text-muted">No projects found matching your search.</p>
        </motion.div>
      )}
    </div>
  );
}
