import { fetchGitHubProjects } from '@/lib/github';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';

export async function Projects() {
  const projects = await fetchGitHubProjects();
  return <ProjectsGrid projects={projects} />;
}
