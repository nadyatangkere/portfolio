import { CheckCircle2 } from 'lucide-react';
import { about, personal } from '../data/portfolio';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.grid}`}>
        {/* Left: text content */}
        <div className={styles.content}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Analytical by nature,<br />
            <em>business-minded</em> by design.
          </h2>

          <div className={styles.paragraphs}>
            {about.paragraphs.map((p, i) => (
              <p key={i} className={styles.para}>{p}</p>
            ))}
          </div>
        </div>

        {/* Right: highlights card */}
        <div className={styles.sidebar}>
          <div className={styles.card}>
            <p className={styles.cardLabel}>What I bring</p>
            <ul className={styles.highlights}>
              {about.highlights.map((h, i) => (
                <li key={i} className={styles.highlight}>
                  <CheckCircle2 size={14} className={styles.checkIcon} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location tag */}
          <div className={styles.locationTag}>
            <span className={styles.locationDot} />
            <span className={styles.locationText}>{personal.location}</span>
          </div>

          {/* Stat row */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>3+</span>
              <span className={styles.statLabel}>End-to-end projects</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>Industry domains</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Tools mastered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
