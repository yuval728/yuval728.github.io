import path from 'path';
import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { compile } from '@mdx-js/mdx';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export async function getContent(filename: string) {
  const filePath = path.join(process.cwd(), 'src/content', `${filename}.mdx`);
  const fileContent = await readFile(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  const compiledHtml = result.toString();
  return {
    metadata: data,
    html: compiledHtml,
    content
  };
}