import { Timeline } from '@/components/ui/Timeline';

const experiences = [
  {
    role: 'AI/ML Engineer',
    company: 'xLM Continuous Intelligence',
    companyUrl: 'https://xlm.ai',
    period: 'Jun 2025 – Present',
    location: 'Remote',
    current: true,
    highlights: [
      'Built LangGraph multi-agent systems: -30% execution time, +40% success rate',
      'GxP workflow automation: +65% task coverage across regulated processes',
      'Implemented audit-readiness traceability pipeline for 100% compliance coverage',
    ],
    stack: ['LangGraph', 'Python', 'MLOps', 'GxP'],
  },
  {
    role: 'AI/ML Intern',
    company: 'xLM Continuous Intelligence',
    companyUrl: 'https://xlm.ai',
    period: 'Jan – May 2025',
    location: 'Mumbai',
    current: false,
    highlights: [
      'Traceability matrix generator: -60% manual effort, +45% consistency score',
      'Built real-time QA pipelines achieving 100% traceability across test cases',
    ],
    stack: ['Python', 'MLOps', 'QA Pipelines'],
  },
  {
    role: 'ML Research Intern',
    company: 'IIT Kharagpur',
    companyUrl: 'https://www.iitkgp.ac.in',
    period: 'Jun 2024 – May 2025',
    location: 'Remote',
    current: false,
    highlights: [
      'Autoencoders + GNN experiments yielded +30% video processing throughput',
      'Hyperparameter optimization research achieved +20% accuracy improvement',
    ],
    stack: ['PyTorch', 'GNN', 'Autoencoders'],
  },
  {
    role: 'ML/Data Science Intern',
    company: 'JM Financial Ltd',
    companyUrl: 'https://www.jmfl.com',
    period: 'Jul – Nov 2024',
    location: 'Mumbai',
    current: false,
    highlights: [
      'KYC automation with CV/DL: -40% document processing time',
      'OCR document verification pipeline: +30% operational efficiency',
      'Large-scale financial data analysis: +15% operational efficiency gains',
    ],
    stack: ['Computer Vision', 'Deep Learning', 'OCR', 'Python'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Kenmark ITAN Solutions',
    companyUrl: 'https://www.kenmark.in',
    period: 'Dec 2022 – Apr 2023',
    location: 'Mumbai',
    current: false,
    highlights: [
      'API engineering improvements: +30% integration efficiency',
      'QA protocols implementation: +20% system reliability',
      'SQL query optimization: -15% average query execution time',
    ],
    stack: ['Node.js', 'SQL', 'MySQL', 'REST APIs'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="section-label mb-12">// experience</p>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}

