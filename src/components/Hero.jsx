import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal } from '../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden />
      {/* Glow orbs */}
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />

      <div className={`container ${styles.content}`}>
        {/* Eyebrow */}
        <p className={`section-label animate-fade-up ${styles.eyebrow}`}>
          <span className={styles.dot} />
          Available for new opportunities
        </p>

        {/* Name */}
        <h1 className={`${styles.name} animate-fade-up delay-1`}>
          {personal.name}
        </h1>

        {/* Title bar */}
        <div className={`${styles.titleBar} animate-fade-up delay-2`}>
          <span className={styles.titleText}>{personal.title}</span>
          <span className={styles.titleDivider}>/</span>
          <span className={styles.titleAlt}>Business Analyst</span>
          <span className={styles.titleDivider}>/</span>
          <span className={styles.titleAlt}>MT Candidate</span>
        </div>

        {/* Tagline */}
        <p className={`${styles.tagline} animate-fade-up delay-3`}>
          {personal.tagline}
        </p>
        <p className={`${styles.taglineSub} animate-fade-up delay-4`}>
          {personal.taglineSub}
        </p>

        {/* CTAs */}
        <div className={`${styles.ctas} animate-fade-up delay-4`}>
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('projects')}
          >
            View Projects
            <ArrowDown size={14} />
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollTo('contact')}
          >
            Get in Touch
          </button>
        </div>

        {/* Social links */}
        <div className={`${styles.socials} animate-fade-up delay-5`}>
          <a href={personal.github}   target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
            <GithubIcon size={17} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <LinkedinIcon size={17} />
          </a>
          <a href={`mailto:${personal.email}`} className={styles.socialLink} aria-label="Email">
            <Mail size={17} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden>
        <span />
      </div>
    </section>
  );
}
