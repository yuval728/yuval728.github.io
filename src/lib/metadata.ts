import { CONFIG } from '@/data/config';

export const siteMetadata = {
  title: `${CONFIG.name} | ${CONFIG.title}`,
  description: `AI/ML Engineer from Mumbai. Top 1% Amazon ML Challenge 2024. IEEE published. Specializing in LangGraph agents, computer vision, and MLOps.`,
  url: 'https://yuval728.vercel.app',
  ogImage: '/og.png',
  twitterHandle: '@yuval728',
  keywords: [
    'AI Engineer',
    'ML Engineer',
    'LangGraph',
    'Computer Vision',
    'MLOps',
    'Mumbai',
    'Yuval Mehta',
    'PyTorch',
    'AI Agents',
  ],
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: CONFIG.name,
  jobTitle: CONFIG.title,
  url: siteMetadata.url,
  email: CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: CONFIG.location.split(',')[0].trim(),
    addressCountry: 'IN',
  },
  sameAs: [
    `https://github.com/${CONFIG.github}`,
    `https://linkedin.com/in/${CONFIG.linkedin}`,
    `https://medium.com/@${CONFIG.medium}`,
  ],
};
