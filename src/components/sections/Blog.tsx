import { fetchMediumPosts } from '@/lib/medium';
import { BlogList } from '@/components/sections/BlogList';

export async function Blog() {
  const posts = await fetchMediumPosts(100);
  return <BlogList posts={posts} />;
}
