'use client';

import FadeIn from './FadeIn';
import { PROJECTS } from '@/data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
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
              Projects
            </h2>
            <div className="section-underline" />
          </div>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.1}>
              <div
                className="card"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(99,102,241,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                {/* Project Name */}
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#E5E7EB',
                    marginBottom: 12,
                  }}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.7, marginBottom: 14, flex: 1 }}>
                  {project.description}
                </p>

                <div style={{ flex: 1 }} />

                {/* Links Footer */}
                <div
                  style={{
                    display: 'flex',
                    gap: 12,
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        color: '#9CA3AF',
                        fontSize: 13,
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#E5E7EB';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#9CA3AF';
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        color: '#9CA3AF',
                        fontSize: 13,
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#22D3EE';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#9CA3AF';
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
