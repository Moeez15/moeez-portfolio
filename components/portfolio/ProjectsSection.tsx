import { PROJECTS } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="content-section">
      <h2>Projects</h2>
      <div className="project-list">
        {PROJECTS.map(project => (
          <article className="project" key={project.name}>
            <div className="project-heading">
              <h3>{project.name}</h3>
              <div className="project-links">
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} code on GitHub`}>Code <span aria-hidden>↗</span></a>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} live demo`}>Live <span aria-hidden>↗</span></a>}
              </div>
            </div>
            <p>{project.description}</p>
            {project.stack.length > 0 && <p className="stack">{project.stack.join(' · ')}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
