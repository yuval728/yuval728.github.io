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
    
    return feed.items.slice(0, 10).map((item: any) => ({
      title: item.title || '',
      date: new Date(item.pubDate || Date.now()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      }),
      preview: (item.contentSnippet || item.content || item.description || 'No preview available').substring(0, 150) + '...',
      tags: item.categories || [],
      link: item.link || ''
    }));
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    // Fallback to static posts if RSS feed fails
    return [
      {
        title: "The Silent Backbone Why Traditional Machine Learning Still Matters in the AI Era",
        date: "4/22/2025",
        preview: "A deep dive into the relevance of traditional machine learning techniques in the age of advanced AI.",
        tags: ["Machine Learning", "AI", "Data Science"],
        link: "https://medium.com/towards-artificial-intelligence/the-silent-backbone-why-traditional-machine-learning-still-matters-in-the-ai-era-22235586420a"
      },
      {
        title: "The Rise of Intelligent Enterprises AI at the Heart of Business Strategy",
        date: "4/11/2025",
        preview: "An exploration of how AI is becoming a core component of business strategy, driving innovation and efficiency.",
        tags: ["AI", "Business Strategy", "Innovation"],
        link: "https://medium.com/towards-artificial-intelligence/the-rise-of-intelligent-enterprises-ai-at-the-heart-of-business-strategy-ab58276235ba"
      }
    ];
  }
}