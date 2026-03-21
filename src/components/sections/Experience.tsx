import { Timeline } from '@/components/ui/Timeline';
import { CONFIG } from '@/data/config';

export function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="section-label mb-12">// experience</p>
        <Timeline items={CONFIG.experience} />
      </div>
    </section>
  );
}

