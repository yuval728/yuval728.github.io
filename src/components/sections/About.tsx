'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="section-label mb-8">// about</p>

          <div className="space-y-6 font-sans text-text-muted leading-relaxed">
            <p>
              I'm an AI/ML Engineer from Mumbai with a passion for building
              production-ready systems that solve real problems. My journey has
              taken me through research labs, fintech, and cutting-edge AI
              infrastructure companies.
            </p>

            <p>
              I specialize in building scalable ML pipelines, computer vision
              models, and AI agent systems using modern tools like LangGraph,
              PyTorch, and MLOps platforms. I'm particularly interested in
              making AI systems reliable, traceable, and production-ready.
            </p>

            <p>
              Beyond the code, I care about clean architecture, solid
              engineering practices, and mentoring others in AI/ML. When I'm
              not building systems, I write about scaling AI, agentic patterns,
              and production ML on Medium.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
