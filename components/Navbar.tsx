'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(11,11,15,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <button
          onClick={scrollToTop}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: 18,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Moeez Ahmad
        </button>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden sm:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#9CA3AF',
                fontSize: 15,
                cursor: 'pointer',
                padding: '4px 0',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.color = '#22D3EE';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.color = '#9CA3AF';
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            style={{
              border: '1px solid #6366F1',
              color: '#6366F1',
              borderRadius: 6,
              padding: '6px 16px',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(99,102,241,0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            color: '#E5E7EB',
            fontSize: 24,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(11,11,15,0.97)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: 20,
              right: 24,
              background: 'none',
              border: 'none',
              color: '#E5E7EB',
              fontSize: 28,
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#E5E7EB',
                fontSize: 24,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.color = '#22D3EE';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.color = '#E5E7EB';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
