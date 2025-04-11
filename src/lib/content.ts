import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

export async function getContent(filename: string) {
  const filePath = path.join(process.cwd(), 'src/content', `${filename}.mdx`);
  const fileContent = await readFile(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  
  return {
    metadata: data,
    content
  };
}