import { CONFIG } from '@/data/config';

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  homepage: string | null;
}

export async function fetchGitHubProjects(): Promise<GitHubRepo[]> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${CONFIG.github}/repos?per_page=50&sort=updated`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter to pinned repos
    return repos.filter((repo) =>
      CONFIG.pinnedRepos.includes(repo.name)
    );
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return getFallbackProjects();
  }
}

function getFallbackProjects(): GitHubRepo[] {
  return [
    {
      name: 'AQI_predictor',
      description:
        'ViT model for AQI prediction from satellite and street imagery',
      html_url: 'https://github.com/yuval728/AQI_predictor',
      stargazers_count: 42,
      topics: ['pytorch', 'vit', 'gcp', 'mlflow', 'computer-vision'],
      homepage: null,
    },
    {
      name: 'VerbalVision',
      description:
        'Lip reading model with 87% character accuracy, deployed with TorchServe',
      html_url: 'https://github.com/yuval728/VerbalVision',
      stargazers_count: 38,
      topics: ['pytorch', 'torchserve', 'mlops', 'docker'],
      homepage: null,
    },
    {
      name: 'ImageLingo',
      description:
        'Image captioning model with attention mechanism, 91% accuracy',
      html_url: 'https://github.com/yuval728/ImageLingo',
      stargazers_count: 35,
      topics: ['pytorch', 'attention', 'aws', 'mlflow'],
      homepage: null,
    },
    {
      name: 'OutreachAce',
      description:
        'Gen-AI resume analyzer and cold email generator powered by LangChain',
      html_url: 'https://github.com/yuval728/OutreachAce',
      stargazers_count: 56,
      topics: ['langchain', 'llm', 'chromadb', 'streamlit'],
      homepage: 'https://outreachace.streamlit.app/',
    },
    {
      name: 'UrbanEcho',
      description:
        'Sound classification on 8000+ samples with robust audio processing',
      html_url: 'https://github.com/yuval728/UrbanEcho',
      stargazers_count: 28,
      topics: ['pytorch', 'audio', 'mlflow', 'docker'],
      homepage: null,
    },
  ];
}
