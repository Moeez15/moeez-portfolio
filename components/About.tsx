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
            I&apos;m an AI Engineer focused on building intelligent, scalable systems that solve
            real-world problems. I work at the intersection of machine learning and software
            engineering, developing solutions that enhance user experiences and drive impact.
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
            My experience includes AI research on indoor navigation for visually impaired users,
            building interactive systems that teach sustainable farming through aquaponics, and
            working as a Backend Software Engineer at Spirit AI, where I contribute to building
            AI-driven backend systems.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            style={{
              color: '#9CA3AF',
              fontSize: 17,
              lineHeight: 1.8,
            }}
          >
            I&apos;m curious, detail-oriented, and driven by impact, always exploring how AI can
            be applied to create meaningful and practical solutions.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
