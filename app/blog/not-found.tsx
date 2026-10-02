import Link from 'next/link';
import Header from '@/components/layout/Header';

export default function NotFound() {
  return <div className="site-shell"><Header /><main id="main" className="blog-main"><h1>Post not found.</h1><p className="not-found-copy">This post may not be published yet, or the link may have changed.</p><Link className="back-link" href="/blog">← Back to blog</Link></main></div>;
}
