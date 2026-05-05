import { useState, useEffect, useRef } from 'react';
import { BarChart2, BrainCircuit, Briefcase } from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import styles from './Skills.module.css';

const iconMap = { BarChart2, BrainCircuit, Briefcase };

function SkillBar({ name, level }) {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // slight delay for cascade effect
          setTimeout(() => setWidth(level), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <li ref={ref} className={styles.skillItem}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPct}>{level}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.bar}
          style={{ width: `${width}%` }}
        />
      </div>
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technical depth paired with communication clarity — the combination that makes analysis actually useful.
        </p>

        <div className={styles.grid}>
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] || BarChart2;
            return (
              <div key={group.category} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrap}>
                    <Icon size={16} />
                  </div>
                  <h3 className={styles.cardTitle}>{group.category}</h3>
                </div>
                <ul className={styles.skillList}>
                  {group.skills.map(s => (
                    <SkillBar key={s.name} name={s.name} level={s.level} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
