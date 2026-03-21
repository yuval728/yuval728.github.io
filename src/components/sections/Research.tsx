import { CONFIG } from '@/data/config';

export function Research() {
  return (
    <section id="research" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="section-label mb-12">// research</p>

        <div className="rounded-xl border border-border/30 bg-surface/30 p-8">
          {/* Badge */}
          <div className="mb-4">
            <span className="inline-block rounded-full border border-accent-amber/50 bg-accent-amber/10 px-3 py-1 font-mono text-xs font-medium text-accent-amber">
              {CONFIG.research.conference}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-normal text-text-primary">
            {CONFIG.research.title}
          </h3>

          {/* Authors */}
          <p className="mt-3 font-sans text-sm text-text-muted">
            {CONFIG.research.authors}
          </p>

          {/* Abstract */}
          <p className="mt-6 font-sans text-sm leading-relaxed text-text-muted">
            {CONFIG.research.abstract}
          </p>

          {/* Links */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={CONFIG.research.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-accent-blue hover:underline"
            >
              DOI: {CONFIG.research.doi} ↗
            </a>
            <a
              href={CONFIG.research.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button-ghost inline-flex items-center gap-2"
            >
              View Publication →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
