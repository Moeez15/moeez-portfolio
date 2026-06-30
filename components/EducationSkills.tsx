'use client';

import FadeIn from './FadeIn';
import { SKILLS } from '@/data/skills';

export default function EducationSkills() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '96px 24px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 900, width: '100%' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: '#E5E7EB' }}>
              Education &amp; Skills
            </h2>
            <div className="section-underline" />
          </div>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: 24,
          }}
          className="grid-cols-1 md:grid-cols-[1fr_1.6fr]"
        >
          {/* Education Card */}
          <FadeIn delay={0.1}>
            <div className="card" style={{ height: '100%' }}>
              {/* Graduation Cap SVG */}
              <div style={{ marginBottom: 20 }}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#E5E7EB', marginBottom: 4 }}>
                Virginia Tech
              </h3>
              <p
                className="font-mono"
                style={{ color: '#22D3EE', fontSize: 12, marginBottom: 8 }}
              >
                Blacksburg, VA
              </p>
              <p style={{ color: '#9CA3AF', fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
                Bachelor of Science in Computer Science
              </p>

<p
                className="font-mono"
                style={{ color: '#9CA3AF', fontSize: 12, display: 'block', marginTop: 8 }}
              >
                Dec 2025
              </p>
            </div>
          </FadeIn>

          {/* Skills Card */}
          <FadeIn delay={0.2}>
            <div className="card" style={{ height: '100%' }}>
              {Object.entries(SKILLS).map(([category, items]) => (
                <div key={category} style={{ marginBottom: 20 }}>
                  <p
                    className="font-mono"
                    style={{
                      color: '#22D3EE',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: 10,
                    }}
                  >
                    {category}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono"
                        style={{
                          background: 'rgba(99,102,241,0.1)',
                          border: '1px solid rgba(99,102,241,0.25)',
                          borderRadius: 6,
                          padding: '3px 10px',
                          fontSize: 12,
                          color: '#E5E7EB',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
