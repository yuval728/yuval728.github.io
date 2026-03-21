import { CONFIG } from '@/data/config';

export function Research() {
  return (
    <section id="research" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="section-label mb-12">// research</p>

        <div className="flex flex-col gap-8">
          {CONFIG.research.map((item, index) => (
            <div key={index} className="rounded-xl border border-border/30 bg-surface/30 p-8">
              {/* Badge */}
              <div className="mb-4">
                <span className="inline-block rounded-full border border-accent-amber/50 bg-accent-amber/10 px-3 py-1 font-mono text-xs font-medium text-accent-amber">
                  {item.conference}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-normal text-text-primary">
                {item.title}
              </h3>

              {/* Authors */}
              <p className="mt-3 font-sans text-sm text-text-muted">
                {item.authors}
              </p>

              {/* Abstract */}
              <p className="mt-6 font-sans text-sm leading-relaxed text-text-muted">
                {item.abstract}
              </p>

              {/* Links */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-accent-blue hover:underline"
                >
                  DOI: {item.doi} ↗
                </a>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-ghost inline-flex items-center gap-2"
                >
                  View Publication →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
