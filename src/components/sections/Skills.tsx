'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'ML/DL',
    color: 'text-accent-blue border-accent-blue/30',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'XGBoost',
      'OpenCV',
      'Transformers',
      'NLTK',
      'spaCy',
      'LightGBM',
    ],
  },
  {
    name: 'AI Agents',
    color: 'text-accent-green border-accent-green/30',
    skills: ['LangChain', 'LangGraph', 'CrewAI', 'A2A', 'MCP', 'LlamaIndex'],
  },
  {
    name: 'MLOps & Cloud',
    color: 'text-accent-amber border-accent-amber/30',
    skills: [
      'MLflow',
      'Docker',
      'W&B',
      'DVC',
      'AWS',
      'GCP',
      'Azure',
      'CI/CD',
      'ONNX',
    ],
  },
  {
    name: 'Languages',
    color: 'text-accent-purple border-accent-purple/30',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C', 'C++', 'Java'],
  },
  {
    name: 'Databases',
    color: 'text-text-muted border-text-muted/30',
    skills: [
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'Supabase',
      'Redis',
      'Pinecone',
      'ChromaDB',
      'FAISS',
      'SQLite',
    ],
  },
  {
    name: 'Web',
    color: 'text-text-muted border-text-muted/30',
    skills: ['FastAPI', 'Django', 'Flask', 'Streamlit', 'Node.js', 'Express.js'],
  },
  {
    name: 'Big Data',
    color: 'text-text-muted border-text-muted/30',
    skills: ['PySpark', 'Apache Spark'],
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

export function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="section-label mb-12">// skills</p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <h3 className="mb-4 font-mono text-sm font-medium text-text-muted">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className={`skill-pill border ${category.color}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
