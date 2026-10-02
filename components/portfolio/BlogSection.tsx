import Link from 'next/link';
import PostList from '@/components/blog/PostList';
import { getPosts } from '@/lib/blog/posts';

export default function BlogSection() {
  const recentPosts = getPosts().slice(0, 3);
  return (
    <section id="blog" className="content-section">
      <div className="section-heading-row"><h2>Blog</h2><Link href="/blog">All writing <span aria-hidden>↗</span></Link></div>
      <PostList posts={recentPosts} />
    </section>
  );
}
