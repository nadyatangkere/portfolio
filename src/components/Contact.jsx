import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal } from '../data/portfolio';
import styles from './Contact.module.css';

const contacts = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    Icon: Mail,
    desc: "Best for formal outreach",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: personal.linkedin,
    Icon: LinkedinIcon,
    desc: "Connect professionally",
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: personal.github,
    Icon: GithubIcon,
    desc: "Browse project code",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.left}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Let's talk data,<br />
            <em>and business.</em>
          </h2>
          <p className={styles.body}>
            I'm actively looking for Data Analyst, Business Analyst, or Management Trainee roles. If you have an opportunity or just want to discuss a problem — I'm genuinely interested.
          </p>
          <a
            href={`mailto:${personal.email}`}
            className={`btn btn-primary ${styles.mailBtn}`}
          >
            Send me an email
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className={styles.cards}>
          {contacts.map(({ label, value, href, Icon, desc }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.contactIcon}>
                <Icon size={16} />
              </div>
              <div className={styles.contactBody}>
                <p className={styles.contactLabel}>{label}</p>
                <p className={styles.contactValue}>{value}</p>
                <p className={styles.contactDesc}>{desc}</p>
              </div>
              <ArrowUpRight size={14} className={styles.arrow} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
