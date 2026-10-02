import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostList from '@/components/blog/PostList';
import { getPosts } from '@/lib/blog/posts';

export const metadata: Metadata = { title: 'Blog — Moeez Ahmad', description: 'Notes on software engineering, AI, and learning by building.' };

export default function Blog() {
  const posts = getPosts();
  return (
    <div className="site-shell">
      <Header />
      <main id="main" className="blog-main">
        <header className="blog-header">
          <p className="section-kicker">Notes & ideas</p>
          <h1>Writing, as I learn.</h1>
          <p>A place for thoughts on software, AI, and the process of building things that work.</p>
        </header>
        <PostList posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
