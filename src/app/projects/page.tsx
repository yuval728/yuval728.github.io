'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Nav } from '@/components/ui/Nav';
import { Footer } from '@/components/ui/Footer';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { fetchGitHubProjects } from '@/lib/github';
import { use } from 'react';

// Projects data - will be populated from GitHub
const fallbackProjects = [
  {
    name: 'AQI_predictor',
    description:
      'ViT model for AQI prediction from satellite and street imagery',
    html_url: 'https://github.com/yuval728/AQI_predictor',
    stargazers_count: 42,
    topics: ['pytorch', 'vit', 'gcp', 'mlflow', 'computer-vision'],
    homepage: null,
  },
  {
    name: 'VerbalVision',
    description:
      'Lip reading model with 87% character accuracy, deployed with TorchServe',
    html_url: 'https://github.com/yuval728/VerbalVision',
    stargazers_count: 38,
    topics: ['pytorch', 'torchserve', 'mlops', 'docker'],
    homepage: null,
  },
  {
    name: 'ImageLingo',
    description:
      'Image captioning model with attention mechanism, 91% accuracy',
    html_url: 'https://github.com/yuval728/ImageLingo',
    stargazers_count: 35,
    topics: ['pytorch', 'attention', 'aws', 'mlflow'],
    homepage: null,
  },
  {
    name: 'OutreachAce',
    description:
      'Gen-AI resume analyzer and cold email generator powered by LangChain',
    html_url: 'https://github.com/yuval728/OutreachAce',
    stargazers_count: 56,
    topics: ['langchain', 'llm', 'chromadb', 'streamlit'],
    homepage: 'https://outreachace.streamlit.app/',
  },
  {
    name: 'UrbanEcho',
    description:
      'Sound classification on 8000+ samples with robust audio processing',
    html_url: 'https://github.com/yuval728/UrbanEcho',
    stargazers_count: 28,
    topics: ['pytorch', 'audio', 'mlflow', 'docker'],
    homepage: null,
  },
];

interface ProjectsPageProps {
  searchParams?: { [key: string]: string };
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const [projects] = useState(fallbackProjects);
  const [searchTerm, setSearchTerm] = useState(
    searchParams?.search || ''
  );
  const [selectedTopic, setSelectedTopic] = useState(
    searchParams?.topic || ''
  );

  // Extract all unique topics
  const allTopics = useMemo(() => {
    const topics = new Set<string>();
    projects.forEach((p) => {
      p.topics.forEach((t) => topics.add(t));
    });
    return Array.from(topics).sort();
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchTerm === '' ||
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesTopic =
        selectedTopic === '' || project.topics.includes(selectedTopic);

      return matchesSearch && matchesTopic;
    });
  }, [projects, searchTerm, selectedTopic]);

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background pt-32">
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
              className="inline-flex items-center gap-2 font-sans text-sm text-text-muted hover:text-text-primary mb-6"
            >
              ← Back to home
            </Link>
            <h1 className="font-display text-5xl font-normal text-text-primary">
              All Projects
            </h1>
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
                    ? 'border-accent-blue bg-accent-blue text-background'
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
                      ? 'border-accent-blue bg-accent-blue text-background'
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
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center"
            >
              <p className="font-sans text-text-muted">
                No projects found matching your search.
              </p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
