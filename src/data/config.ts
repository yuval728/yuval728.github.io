export const CONFIG = {
  name: 'Yuval Mehta',
  title: 'Generative AI Engineer',
  tagline:
    'Building scalable ML pipelines, computer vision models, and production-ready AI systems.',
  location: 'Mumbai, India',
  availableForWork: true,
  email: 'yuvalmehta.728@gmail.com',
  github: 'yuval728',
  linkedin: 'yuvalmehta728',
  medium: 'yuvalmehta.728',
  resume: '/CV_YuvalMehta.pdf',
  avatar: 'https://avatars.githubusercontent.com/u/87527560?v=4',
  currentRole: 'Generative AI Engineer @ xLM',
  pinnedRepos: [
    'VerbalVision',
    'ImageLingo',
    'AQI_predictor',
    'OutreachAce',
    'UrbanEcho',
  ],
  stats: [
    { value: 'Top 1%', label: 'Amazon ML Challenge 2024' },
    { value: '274th', label: 'out of 74,824 participants' },
    { value: '1', label: 'IEEE Publication' },
    { value: '10+', label: 'Medium articles' },
  ],
  achievements: [
    {
      icon: '🏆',
      title: 'Amazon ML Challenge 2024',
      description: 'Ranked 274th / 74,824 participants — Top 1% globally',
    },
    {
      icon: '📄',
      title: 'IEEE APCIT 2024',
      description: 'Published research on Early Diabetes Prediction',
    },
    {
      icon: '⚡',
      title: 'IIT Kharagpur',
      description: '+30% video processing throughput via GNNs and autoencoders',
    },
  ],
  // About section content
  about: {
    title: 'Hi, I\'m Yuval Mehta 👋',
    sections: [
      'I\'m a passionate AI/ML Engineer driven by curiosity and impact. I specialize in developing data-driven solutions that blend machine learning, deep learning, and scalable systems to tackle real-world challenges. With hands-on experience in computer vision, natural language processing, and MLOps, I bring innovative AI models from research to deployment.',
      'I\'m an AI/ML Engineer from Mumbai with a passion for building production-ready systems that solve real problems. My journey has taken me through research labs, fintech, and cutting-edge AI infrastructure companies.',
      'I specialize in building scalable ML pipelines, computer vision models, and AI agent systems using modern tools like LangGraph, PyTorch, and MLOps platforms. I\'m particularly interested in making AI systems reliable, traceable, and production-ready.',
      'Beyond the code, I care about clean architecture, solid engineering practices, and mentoring others in AI/ML. When I\'m not building systems, I write about scaling AI, agentic patterns, and production ML on Medium.',
    ],
  },
  // Skills data
  skills: [
    {
      name: 'ML/DL',
      color: 'text-accent-blue border-accent-blue/30 bg-accent-blue/5',
      items: [
        'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost',
        'OpenCV', 'Transformers', 'NLTK', 'spaCy', 'LightGBM',
      ],
    },
    {
      name: 'AI Agents',
      color: 'text-accent-green border-accent-green/30 bg-accent-green/5',
      items: ['LangChain', 'LangGraph', 'CrewAI', 'A2A', 'MCP', 'LlamaIndex'],
    },
    {
      name: 'MLOps & Cloud',
      color: 'text-accent-amber border-accent-amber/30 bg-accent-amber/5',
      items: ['MLflow', 'Docker', 'W&B', 'DVC', 'AWS', 'GCP', 'Azure', 'CI/CD', 'ONNX'],
    },
    {
      name: 'Languages',
      color: 'text-accent-purple border-accent-purple/30 bg-accent-purple/5',
      items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C', 'C++', 'Java'],
    },
    {
      name: 'Databases',
      color: 'text-text-muted border-text-muted/30',
      items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Supabase', 'Redis', 'Pinecone', 'ChromaDB', 'FAISS', 'SQLite'],
    },
    {
      name: 'Web',
      color: 'text-text-muted border-text-muted/30',
      items: ['FastAPI', 'Django', 'Flask', 'Streamlit', 'Node.js', 'Express.js'],
    },
    {
      name: 'Big Data',
      color: 'text-text-muted border-text-muted/30',
      items: ['PySpark', 'Apache Spark'],
    },
  ],
  // Experience data
  experience: [
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
  ],
  // Research publications
  research: {
    title: 'Examining ML Approaches for Early Diabetes Prediction',
    conference: 'IEEE APCIT 2024',
    authors: 'Yuval Mehta et al.',
    abstract: 'Explores multiple ML models for early diabetes prediction, highlighting key patterns in patient health data to aid proactive healthcare measures. Our research demonstrates the effectiveness of ensemble methods and feature engineering in medical diagnostics.',
    doi: '10.1109/APCIT64514.2024.10673680',
    link: 'https://ieeexplore.ieee.org/document/10673680',
  },
  // Contact section
  contact: {
    title: 'Let\'s build something.',
    description: 'Open to full-time roles, research collaborations, and freelance AI/ML projects.',
  },
  // Blog display settings
  blogDisplayCount: 6,
};
