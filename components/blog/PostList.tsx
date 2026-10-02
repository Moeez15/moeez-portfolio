import Link from 'next/link';
import { formatPostDate, type Post } from '@/lib/blog/posts';

export default function PostList({ posts }: { posts: Post[] }) {
  if (!posts.length) {
    return (
      <div className="blog-empty">
        <p className="empty-title">A little space for what I’m learning.</p>
        <p>No posts yet. I’ll be sharing notes on engineering, experiments, and the things I build.</p>
      </div>
    );
  }
  return (
    <div className="post-list">
      {posts.map(post => (
        <article key={post.slug} className="post-list-item">
          <p className="post-meta"><time dateTime={post.date}>{formatPostDate(post.date)}</time><span aria-hidden>·</span>{post.readingMinutes} min read</p>
          <h3><Link href={`/blog/${post.slug}`}>{post.title} <span aria-hidden>↗</span></Link></h3>
          <p>{post.description}</p>
        </article>
      ))}
    </div>
  );
}
