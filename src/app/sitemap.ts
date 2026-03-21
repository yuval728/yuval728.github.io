import { MetadataRoute } from 'next';
import { siteMetadata } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: siteMetadata.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${siteMetadata.url}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${siteMetadata.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return routes;
}
