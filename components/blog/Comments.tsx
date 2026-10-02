'use client';

import { useEffect, useRef, useState } from 'react';

import type { CommentsConfig } from '@/lib/blog/types';

export default function Comments({ slug, config }: { slug: string; config: CommentsConfig | null }) {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = container.current;
    if (!node || !config) return;
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    const attributes = {
      'data-repo': config.repo,
      'data-repo-id': config.repoId,
      'data-category': config.category,
      'data-category-id': config.categoryId,
      'data-mapping': 'specific',
      'data-term': `/blog/${slug}`,
      'data-strict': '1',
      'data-reactions-enabled': '0',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': 'light',
      'data-lang': 'en',
    };
    for (const [key, value] of Object.entries(attributes)) script.setAttribute(key, value);
    script.onerror = () => setFailed(true);
    node.appendChild(script);
    return () => { node.replaceChildren(); };
  }, [slug, config]);

  return (
    <section className="comments" aria-labelledby="comments-title">
      <h2 id="comments-title">Conversation</h2>
      <p className="comments-intro">Questions, a different perspective, or something you’ve tried? Leave a comment.</p>
      {!config ? (
        <div className="comments-notice">Comments aren’t available yet. Please check back later.</div>
      ) : (
        <>
          <p className="comment-provider">Comments use GitHub sign-in and are hosted by <a href="https://giscus.app" target="_blank" rel="noopener noreferrer">Giscus</a>.</p>
          <div ref={container} className="comments-widget" />
          {failed && <p role="status">Comments couldn’t load. Please refresh the page to try again.</p>}
          <noscript>Enable JavaScript to read and leave comments.</noscript>
        </>
      )}
    </section>
  );
}
