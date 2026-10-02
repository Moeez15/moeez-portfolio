import { EXPERIENCES } from '@/data/experiences';

export default function ExperienceSection() {
  return (
    <section id="experience" className="content-section">
      <h2>Experience</h2>
      <ol className="experience-list">
        {EXPERIENCES.map(experience => (
          <li key={`${experience.org}-${experience.title}`} className="experience">
            <p className="date">{experience.date}</p>
            <div>
              <h3>{experience.title}</h3>
              <p className="organization">{experience.org}</p>
              <p className="location">{experience.location}</p>
              <ul className="experience-bullets">
                {experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
              </ul>
              <p className="stack">{experience.stack.join(' · ')}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
