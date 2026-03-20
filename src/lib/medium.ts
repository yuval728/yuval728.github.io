import { CONFIG } from '@/data/config';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
}

export async function fetchMediumPosts(posts_count: number = 5): Promise<MediumPost[]> {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${CONFIG.medium}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Medium posts');
    }

    const data = await response.json();

    if (!data.items) {
      return getFallbackPosts();
    }

    return data.items.slice(0, posts_count).map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      }),
      categories: item.categories || [],
    }));
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return getFallbackPosts();
  }
}

function getFallbackPosts(): MediumPost[] {
  return [
    {
      title: 'Scaling Laws in AI: Why Bigger Models Work in Research but Break in Production',
      link: 'https://medium.com/@3ec8787f291f',
      pubDate: 'Sep 2025',
      categories: ['AI', 'ML', 'Scale'],
    },
    {
      title: 'Agentic Patterns: The Building Blocks of Reliable AI Agents',
      link: 'https://medium.com/@3ec8787f291f',
      pubDate: 'Aug 2025',
      categories: ['AI', 'Agents'],
    },
    {
      title: 'Fine-Tuning LLMs in 2025: Techniques, Trade-offs, and Use Cases',
      link: 'https://medium.com/@3ec8787f291f',
      pubDate: 'May 2025',
      categories: ['LLM', 'ML'],
    },
    {
      title: 'Machine Learning at Scale: Why PySpark MLlib Still Wins in 2025',
      link: 'https://medium.com/@3ec8787f291f',
      pubDate: 'Jul 2025',
      categories: ['BigData', 'ML'],
    },
    {
      title: 'How to Build Bulletproof Data Pipelines with PySpark',
      link: 'https://medium.com/@3ec8787f291f',
      pubDate: 'Jul 2025',
      categories: ['BigData', 'Data'],
    },
  ];
}
