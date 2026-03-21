import { CONFIG } from '@/data/config';

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="section-label mb-8">// about</p>

        <div className="space-y-6 font-sans leading-relaxed text-text-muted">
          {CONFIG.about.sections.map((section, index) => (
            <p key={index}>{section}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
