'use client';

import FadeIn from './FadeIn';
import { EXPERIENCES } from '@/data/experiences';

export default function Experience() {
  return (
    <section
      id="experience"
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
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: '#E5E7EB' }}>
              Experience
            </h2>
            <div className="section-underline" />
          </div>
        </FadeIn>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 20,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'rgba(255,255,255,0.08)',
            }}
          />

          {EXPERIENCES.map((exp, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                style={{
                  position: 'relative',
                  paddingLeft: 56,
                  paddingBottom: 40,
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: 14,
                    top: 4,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: '#6366F1',
                    border: '2px solid #22D3EE',
                    zIndex: 1,
                  }}
                />

                {/* Date */}
                <p
                  className="font-mono"
                  style={{
                    color: '#22D3EE',
                    fontSize: 12,
                    marginBottom: 6,
                  }}
                >
                  {exp.date}
                </p>

                {/* Title */}
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#E5E7EB', marginBottom: 4 }}>
                  {exp.title}
                </h3>

                {/* Org */}
                <p style={{ fontSize: 14, fontWeight: 600, color: '#6366F1', marginBottom: 12 }}>
                  {exp.org}
                </p>

                {/* Bullets */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {exp.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      style={{
                        color: '#9CA3AF',
                        fontSize: 14,
                        lineHeight: 1.7,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ color: '#6366F1', flexShrink: 0 }}>›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
