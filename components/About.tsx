'use client';

import FadeIn from './FadeIn';

export default function About() {
  return (
    <section
      id="about"
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '96px 24px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 800, width: '100%' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: '#E5E7EB' }}>
              About{' '}
              <span style={{ color: '#6366F1' }}>Me</span>
            </h2>
            <div className="section-underline" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            style={{
              color: '#9CA3AF',
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            I&apos;m a Computer Science graduate from Virginia Tech with a passion for building
            intelligent systems that solve real-world problems. My work spans machine learning
            research, full-stack development, and AI-powered applications.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              color: '#9CA3AF',
              fontSize: 17,
              lineHeight: 1.8,
            }}
          >
            I&apos;m especially interested in the intersection of AI and product — building tools
            that are not just technically sound but genuinely useful. Currently focused on backend
            engineering at Spirit AI while exploring new projects in ML and generative AI.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
