import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Comments from '@/components/blog/Comments';
import { formatPostDate, type Post } from '@/lib/blog/posts';
import { getCommentsConfig } from '@/lib/blog/comments';
import { PROFILE } from '@/data/profile';

export default function BlogArticle({ post }: { post: Post }) {
  return (
    <div className="site-shell">
      <Header />
      <main id="main" className="article-main">
        <Link href="/blog" className="back-link">← All posts</Link>
        <article>
          <header className="article-header">
            <p className="post-meta"><time dateTime={post.date}>{formatPostDate(post.date)}</time><span aria-hidden>·</span>{post.readingMinutes} min read</p>
            <h1>{post.title}</h1>
            <p className="article-description">{post.description}</p>
            <p className="article-author">By {PROFILE.name}</p>
          </header>
          <div className="prose">
            <Markdown remarkPlugins={[remarkGfm]} skipHtml>{post.content}</Markdown>
          </div>
        </article>
        <Comments key={post.slug} slug={post.slug} config={getCommentsConfig()} />
      </main>
      <Footer backToBlog />
    </div>
  );
}
