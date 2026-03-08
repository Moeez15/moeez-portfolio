'use client';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '16px 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          padding: '8px 20px',
          color: '#9CA3AF',
          fontSize: 13,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#6366F1';
          (e.currentTarget as HTMLButtonElement).style.color = '#E5E7EB';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)';
          (e.currentTarget as HTMLButtonElement).style.color = '#9CA3AF';
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        Back to top
      </button>

      {/* Copyright + Tech Stack */}
      <p style={{ color: '#6B7280', fontSize: 12, margin: 0 }}>
        © 2026 Moeez Ahmad · Built with{' '}
        <span style={{ color: '#9CA3AF' }}>Next.js</span>
        {' · '}
        <span style={{ color: '#9CA3AF' }}>TypeScript</span>
        {' · '}
        <span style={{ color: '#9CA3AF' }}>Tailwind CSS</span>
      </p>
    </footer>
  );
}
