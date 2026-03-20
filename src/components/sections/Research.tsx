export function Research() {
  return (
    <section id="research" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="section-label mb-12">// research</p>

        <div className="rounded-xl border border-border/30 bg-surface/30 p-8">
          {/* Badge */}
          <div className="mb-4">
            <span className="inline-block rounded-full border border-accent-amber/50 bg-accent-amber/10 px-3 py-1 font-mono text-xs font-medium text-accent-amber">
              IEEE APCIT 2024
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-normal text-text-primary">
            Examining ML Approaches for Early Diabetes Prediction
          </h3>

          {/* Authors */}
          <p className="mt-3 font-sans text-sm text-text-muted">
            Yuval Mehta et al.
          </p>

          {/* Abstract */}
          <p className="mt-6 font-sans text-sm leading-relaxed text-text-muted">
            Explores multiple ML models for early diabetes prediction, highlighting key patterns
            in patient health data to aid proactive healthcare measures. Our research demonstrates
            the effectiveness of ensemble methods and feature engineering in medical diagnostics.
          </p>

          {/* Links */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://ieeexplore.ieee.org/document/10673680"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-accent-blue hover:underline"
            >
              DOI: 10.1109/APCIT64514.2024.10673680 ↗
            </a>
            <a
              href="https://ieeexplore.ieee.org/document/10673680"
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
