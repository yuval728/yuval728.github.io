import { fetchGitHubProjects } from '@/lib/github';
import { Nav } from '@/components/ui/Nav';
import { Footer } from '@/components/ui/Footer';
import { ProjectsPageClient } from '@/app/projects/ProjectsPageClient';

export default async function ProjectsPage() {
  const projects = await fetchGitHubProjects({ all: true });

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background pt-32">
        <ProjectsPageClient initialProjects={projects} />
      </main>
      <Footer />
    </>
  );
}
