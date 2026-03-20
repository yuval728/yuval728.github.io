'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CONFIG } from '@/data/config';
import { sendContactEmail } from '@/app/actions/contact';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    try {
      const result = await sendContactEmail(formState);

      if (result.success) {
        setSubmitMessage(result.message);
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitMessage('');
          setSubmitStatus('');
        }, 3000);
      } else {
        // Fallback to mailto
        const mailtoLink = `mailto:${CONFIG.email}?subject=Portfolio Inquiry from ${formState.name}&body=${encodeURIComponent(
          `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
        )}`;
        window.location.href = mailtoLink;
        setSubmitMessage('Opening email client...');
        setSubmitStatus('success');
        setTimeout(() => {
          setSubmitMessage('');
          setSubmitStatus('');
          setIsSubmitting(false);
        }, 1500);
        return;
      }
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="section-label mb-12">// contact</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="font-display text-4xl font-normal text-text-primary">
              Let's build something.
            </h2>
            <p className="mt-4 font-sans text-text-muted">
              Open to full-time roles, research collaborations, and freelance
              AI/ML projects.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${CONFIG.email}`}
                className="flex items-center gap-3 rounded-lg border border-border/30 bg-surface/30 p-4 transition-all hover:border-accent-blue hover:bg-surface/50"
              >
                <svg
                  className="h-5 w-5 text-accent-blue"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <div className="flex-1">
                  <p className="font-mono text-xs text-text-muted">Email</p>
                  <p className="font-sans text-sm text-text-primary">
                    {CONFIG.email}
                  </p>
                </div>
              </a>

              <a
                href={`https://github.com/${CONFIG.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border/30 bg-surface/30 p-4 transition-all hover:border-accent-blue hover:bg-surface/50"
              >
                <svg
                  className="h-5 w-5 text-accent-blue"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div className="flex-1">
                  <p className="font-mono text-xs text-text-muted">GitHub</p>
                  <p className="font-sans text-sm text-text-primary">
                    @{CONFIG.github}
                  </p>
                </div>
              </a>

              <a
                href={`https://linkedin.com/in/${CONFIG.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border/30 bg-surface/30 p-4 transition-all hover:border-accent-blue hover:bg-surface/50"
              >
                <svg
                  className="h-5 w-5 text-accent-blue"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <div className="flex-1">
                  <p className="font-mono text-xs text-text-muted">LinkedIn</p>
                  <p className="font-sans text-sm text-text-primary">
                    @{CONFIG.linkedin}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 font-sans text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 font-sans text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 font-sans text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full"
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send message →'}
              </motion.button>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center font-sans text-sm ${
                    submitStatus === 'success'
                      ? 'text-accent-green'
                      : 'text-red-400'
                  }`}
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
