import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-subtitle">
          Each project starts with a business problem — not a dataset. Here's how I frame, analyze, and communicate findings.
        </p>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
              style={{ animationDelay: `${i * 120}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
