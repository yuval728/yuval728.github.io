import { fetchMediumPosts } from '@/lib/medium';
import { Nav } from '@/components/ui/Nav';
import { Footer } from '@/components/ui/Footer';
import { BlogPageClient } from '@/app/blog/BlogPageClient';

export default async function BlogPage() {
  const posts = await fetchMediumPosts();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background pt-32">
        <BlogPageClient initialPosts={posts} />
      </main>
      <Footer />
    </>
  );
}
