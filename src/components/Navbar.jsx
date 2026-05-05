import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks, personal } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('');
  const { theme, toggleTheme }    = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);

      // Highlight active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} onClick={() => handleNav('#hero')}>
          <span className={styles.logoMono}>&lt;</span>
          {personal.firstName}
          <span className={styles.logoMono}> /&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${active === link.href.slice(1) ? styles.navLinkActive : ''}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a href={personal.resumeUrl} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}>
            Resume
          </a>

          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
            >
              {link.label}
            </a>
          ))}
          <a href={personal.resumeUrl} className={`btn btn-primary ${styles.mobileResume}`}>
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
