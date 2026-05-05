import { personal } from '../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.name}>
          <span className={styles.mono}>&lt;</span>
          {personal.firstName}
          <span className={styles.mono}> /&gt;</span>
        </p>
        <p className={styles.copy}>
          © {year} · Built with React + Vite · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
