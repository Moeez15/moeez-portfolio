import Link from 'next/link';
import { PROFILE } from '@/data/profile';

export default function Header() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <Link className="site-brand" href="/">{PROFILE.name}</Link>
        <nav aria-label="Main navigation">
          <Link href="/#about">About</Link>
          <Link href="/#experience">Work</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#blog">Blog</Link>
          <Link href="/#education">Education &amp; skills</Link>
        </nav>
      </header>
    </>
  );
}
