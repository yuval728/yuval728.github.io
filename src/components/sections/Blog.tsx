import { fetchMediumPosts } from '@/lib/medium';
import { BlogList } from '@/components/sections/BlogList';

export async function Blog() {
  const posts = await fetchMediumPosts();
  return <BlogList posts={posts} />;
}
