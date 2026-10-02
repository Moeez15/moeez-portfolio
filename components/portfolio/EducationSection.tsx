import { EDUCATION } from '@/data/education';
import { SKILLS } from '@/data/skills';

export default function EducationSection() {
  return (
    <section id="education" className="content-section">
      <h2>Education & skills</h2>
      <div className="education">
        <p className="date">{EDUCATION.date}</p>
        <div>
          <h3>{EDUCATION.school}</h3>
          <p>{EDUCATION.degree}</p>
          <p className="location">{EDUCATION.location}</p>
        </div>
      </div>
      <dl className="skills">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category}><dt>{category}</dt><dd>{items.join(', ')}</dd></div>
        ))}
      </dl>
    </section>
  );
}
