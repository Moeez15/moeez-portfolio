'use client';

import ProfilePhoto from './ProfilePhoto';
import FadeIn from './FadeIn';

const IMAGE_URL: string | null = '/images/headshot.png';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '96px 24px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 48,
        }}
        className="flex-col-reverse sm:flex-row"
      >
        {/* Left Content */}
        <FadeIn className="flex-1" delay={0.1}>
          <div style={{ maxWidth: 560 }}>
            <p
              className="font-mono"
              style={{
                color: '#22D3EE',
                fontSize: 12,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              WELCOME TO MY PORTFOLIO
            </p>

            <h1
              style={{
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 16,
                color: '#E5E7EB',
              }}
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Moeez Ahmad</span>
            </h1>

            <p
              style={{
                fontSize: 20,
                color: '#9CA3AF',
                marginBottom: 40,
                fontWeight: 400,
              }}
            >
              AI Engineer · Startup Enthusiast
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button
                className="btn-primary"
                onClick={() => scrollToSection('experience')}
              >
                View Experience
              </button>
              <button
                className="btn-outline"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Right: Profile Photo */}
        <FadeIn delay={0.3} className="flex justify-center">
          <ProfilePhoto imageUrl={IMAGE_URL} />
        </FadeIn>
      </div>
    </section>
  );
}
