import Image from 'next/image';
import { ABOUT, PROFILE } from '@/data/profile';

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="identity">
        <Image src={PROFILE.photo} alt={PROFILE.name} width={400} height={400} sizes="(max-width: 600px) 152px, 200px" priority className="portrait" />
        <div>
          <h1>{PROFILE.name}</h1>
          <p className="role">{PROFILE.role}</p>
        </div>
      </div>
      <div className="introduction">
        {ABOUT.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="social-links">
        <a href={`mailto:${PROFILE.email}`}>Email <span aria-hidden>↗</span></a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden>↗</span></a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden>↗</span></a>
        <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer">Résumé <span aria-hidden>↗</span></a>
      </div>
    </section>
  );
}
