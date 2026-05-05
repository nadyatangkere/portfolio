import { Briefcase, Calendar, TrendingUp } from 'lucide-react';
import { experience } from '../data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Track Record</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Impact-focused. I measure contribution by what changed, not what I did.
        </p>

        <div className={styles.timeline}>
          {experience.map((exp, i) => (
            <div key={i} className={styles.item}>
              {/* Timeline spine */}
              <div className={styles.spine}>
                <div className={styles.dot} />
                {i < experience.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.card}>
                {/* Type badge */}
                <span className={styles.typeBadge}>{exp.type}</span>

                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>

                <span className={styles.period}>
                  <Calendar size={11} />
                  {exp.period}
                </span>

                <ul className={styles.impacts}>
                  {exp.impact.map((item, j) => (
                    <li key={j} className={styles.impact}>
                      <TrendingUp size={12} className={styles.impactIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
