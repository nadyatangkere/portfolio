import { Users, Award, Heart } from 'lucide-react';
import { organizations } from '../data/portfolio';
import styles from './Organizations.module.css';

const typeConfig = {
  Leadership:   { icon: Award,  color: 'gold'  },
  Organization: { icon: Users,  color: 'blue'  },
  Volunteer:    { icon: Heart,  color: 'green' },
};

export default function Organizations() {
  return (
    <section id="organizations" className="section">
      <div className="container">
        <p className="section-label">Beyond the Desk</p>
        <h2 className="section-title">
          Organizations &<br />
          <em>Leadership</em>
        </h2>
        <p className="section-subtitle">
          I believe good analysts are also good collaborators. Here's where I've practiced leading, coordinating, and working with people toward a shared goal.
        </p>

        <div className={styles.grid}>
          {organizations.map((org, i) => {
            const config = typeConfig[org.type] || typeConfig.Organization;
            const Icon = config.icon;
            return (
              <div key={i} className={`${styles.card} ${styles[`card--${config.color}`]}`}>
                <div className={styles.header}>
                  <div className={`${styles.iconWrap} ${styles[`icon--${config.color}`]}`}>
                    <Icon size={16} />
                  </div>
                  <span className={`${styles.typeBadge} ${styles[`badge--${config.color}`]}`}>
                    {org.type}
                  </span>
                </div>

                <h3 className={styles.orgName}>{org.name}</h3>
                <p className={styles.role}>{org.role}</p>
                <p className={styles.period}>{org.period}</p>
                <p className={styles.description}>{org.description}</p>

                <div className={styles.contribs}>
                  <p className={styles.contribLabel}>Key contributions</p>
                  <ul>
                    {org.contributions.map((c, j) => (
                      <li key={j} className={styles.contrib}>
                        <span className={styles.arrow}>→</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.tags}>
                  {org.skills.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}