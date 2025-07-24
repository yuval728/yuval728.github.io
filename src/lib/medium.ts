import Parser from 'rss-parser';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  categories: string[];
}

interface ParsedPost {
  title: string;
  date: string;
  preview: string;
  tags: string[];
  link: string;
}

const parser = new Parser();

export async function getMediumPosts(): Promise<ParsedPost[]> {
  try {
    const feed = await parser.parseURL('https://medium.com/@yuvalmehta.728/feed');
    
    return feed.items.slice(0, 6).map((item: any) => ({
      title: item.title || '',
      date: item.pubDate || '',
      preview: item.contentSnippet?.substring(0, 150) + '...' || '',
      tags: item.categories || [],
      link: item.link || ''
    }));
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    // Fallback to empty array if RSS feed fails
    return [];
  }
}