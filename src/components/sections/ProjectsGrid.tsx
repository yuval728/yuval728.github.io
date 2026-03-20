'use client';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="section-label mb-12">// projects</p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={itemVariants}>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-sans font-medium text-accent-blue hover:underline"
          >
            View all projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
