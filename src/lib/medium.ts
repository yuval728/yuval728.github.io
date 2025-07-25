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
      preview: generatePreview(item),
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

function generatePreview(item: any): string {
  // Try to get content from various RSS fields
  let content = item.contentSnippet || item.content || item.description || '';
  
  // Clean up HTML tags if present
  content = content.replace(/<[^>]*>/g, '');
  
  // Clean up common RSS artifacts
  content = content.replace(/&nbsp;/g, ' ');
  content = content.replace(/&amp;/g, '&');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&quot;/g, '"');
  
  // Remove extra whitespace
  content = content.replace(/\s+/g, ' ').trim();
  
  // If we still don't have content, generate based on title
  if (!content || content.length < 20) {
    const title = item.title || '';
    if (title.toLowerCase().includes('machine learning') || title.toLowerCase().includes('ml')) {
      content = 'Exploring the latest developments and practical applications in machine learning and artificial intelligence.';
    } else if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('artificial intelligence')) {
      content = 'Deep dive into artificial intelligence technologies and their real-world impact across industries.';
    } else if (title.toLowerCase().includes('data') || title.toLowerCase().includes('analytics')) {
      content = 'Insights into data science methodologies and analytical approaches for modern challenges.';
    } else if (title.toLowerCase().includes('deep learning') || title.toLowerCase().includes('neural')) {
      content = 'Understanding deep learning architectures and their applications in solving complex problems.';
    } else if (title.toLowerCase().includes('business') || title.toLowerCase().includes('strategy')) {
      content = 'Strategic insights on how technology and AI are transforming business operations and decision-making.';
    } else {
      content = 'Exploring cutting-edge technology trends and their practical applications in the modern world.';
    }
  }
  
  // Ensure preview is appropriate length
  if (content.length > 150) {
    content = content.substring(0, 147) + '...';
  }
  
  return content;
}