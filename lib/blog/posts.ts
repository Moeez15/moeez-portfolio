import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

import type { Post } from './types';
export type { Post } from './types';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function parsePost(source: string, slug: string): Post {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`Invalid blog slug: ${slug}`);
  }
  const { data, content } = matter(source);
  for (const key of ['title', 'description', 'date']) {
    if (typeof data[key] !== 'string' || !data[key].trim()) {
      throw new Error(`${slug}: ${key} must be a nonempty string. Quote dates as "YYYY-MM-DD".`);
    }
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date) || Number.isNaN(Date.parse(data.date)) || new Date(data.date).toISOString().slice(0, 10) !== data.date) {
    throw new Error(`${slug}: date must be a valid YYYY-MM-DD date.`);
  }
  if (typeof data.draft !== 'boolean') {
    throw new Error(`${slug}: explicitly set draft to true or false.`);
  }
  if (!content.trim()) throw new Error(`${slug}: the post needs a body.`);
  return {
    slug,
    title: data.title.trim(),
    description: data.description.trim(),
    date: data.date,
    draft: data.draft,
    content: content.trim(),
    readingMinutes: Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 220)),
  };
}

export function publishedPosts(posts: Post[], now = new Date()): Post[] {
  return posts.filter(post => !post.draft && Date.parse(`${post.date}T00:00:00Z`) <= now.getTime())
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export function getPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const posts = fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => parsePost(fs.readFileSync(path.join(postsDirectory, file), 'utf8'), file.slice(0, -3)));
  return publishedPosts(posts);
}

export function getPost(slug: string): Post | undefined {
  // Resolve from the public list so drafts, future posts and arbitrary paths stay inaccessible.
  return getPosts().find(post => post.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
}
