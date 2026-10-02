import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticle from '@/components/blog/BlogArticle';
import { getPost, getPosts } from '@/lib/blog/posts';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { title: 'Post not found — Moeez Ahmad' };
  return { title: `${post.title} — Moeez Ahmad`, description: post.description, openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.date } };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return <BlogArticle post={post} />;
}
