import Link from 'next/link';
import { PROFILE } from '@/data/profile';

export default function Footer({ backToBlog = false }: { backToBlog?: boolean }) {
  return (
    <footer>
      {backToBlog ? (
        <>
          <Link href="/blog">← Back to blog</Link>
          <p>© 2026 {PROFILE.name}</p>
        </>
      ) : (
        <>
          <p>© 2026 {PROFILE.name}</p>
          <a href={`mailto:${PROFILE.email}`}>Get in touch <span aria-hidden>↗</span></a>
        </>
      )}
    </footer>
  );
}
