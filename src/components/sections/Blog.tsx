import { fetchMediumPosts } from '@/lib/medium';
import { BlogList } from '@/components/sections/BlogList';
import { CONFIG } from '@/data/config';

export async function Blog() {
  const posts = await fetchMediumPosts(CONFIG.blogDisplayCount);
  return <BlogList posts={posts} />;
}
