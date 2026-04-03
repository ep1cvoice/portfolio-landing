import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <span className={styles.logo}>pavel.</span>

        <div className={styles.right}>
          <ul className={styles.navLinks}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`${styles.link} ${active === label ? styles.linkActive : ''}`}
                  onClick={() => setActive(label)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.lang}>
            <span className={`${styles.langItem} ${styles.langActive}`}>EN</span>
            <span className={styles.langSep}>/</span>
            <span className={styles.langItem}>PL</span>
            <span className={styles.langSep}>/</span>
            <span className={styles.langItem}>UA</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
