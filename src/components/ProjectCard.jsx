import { ExternalLink, Lightbulb, Wrench, TrendingUp } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      style={{ '--card-accent': project.color }}
    >
      {/* Top accent line */}
      <div className={styles.accentLine} />

      <div className={styles.body}>
        {featured && (
          <span className={styles.featuredBadge}>Featured Project</span>
        )}

        {/* Header */}
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.subtitle}>{project.subtitle}</p>
          </div>
          <div className={styles.links}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={styles.iconLink}
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={styles.iconLink}
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Problem */}
        <div className={styles.block}>
          <p className={styles.blockLabel}>
            <Wrench size={11} />
            Business Problem
          </p>
          <p className={styles.blockText}>{project.problem}</p>
        </div>

        {/* Key Insight */}
        <div className={`${styles.block} ${styles.insightBlock}`}>
          <p className={styles.blockLabel}>
            <Lightbulb size={11} />
            Key Insight
          </p>
          <p className={styles.blockText}>{project.insight}</p>
        </div>

        {/* Outcomes */}
        <div className={styles.block}>
          <p className={styles.blockLabel}>
            <TrendingUp size={11} />
            Outcomes
          </p>
          <ul className={styles.outcomes}>
            {project.outcomes.map((o, i) => (
              <li key={i} className={styles.outcome}>
                <span className={styles.outcomeDash}>→</span>
                {o}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className={styles.tools}>
          {project.tools.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
