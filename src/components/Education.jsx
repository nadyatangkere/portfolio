import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">Education</h2>

        <div className={styles.list}>
          {education.map((edu, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>
                <GraduationCap size={20} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  <span className={styles.metaItem}>
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                </div>
                <ul className={styles.highlights}>
                  {edu.highlights.map((h, j) => (
                    <li key={j} className={styles.highlight}>
                      <span className={styles.dash}>—</span>
                      {h}
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
