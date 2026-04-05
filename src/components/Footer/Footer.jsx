import { ChevronUp } from 'lucide-react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#home" className={styles.startOver}>
        <ChevronUp size={16} className={styles.arrow} />
        <span className={styles.startOverLabel}>Start over</span>
      </a>

      <div className={styles.divider} />

      <div className={styles.content}>
        <p className={styles.copy}>© 2026 Pavel. All rights reserved.</p>
        <div className={styles.lang}>
          {['EN', 'PL', 'RU'].map((lang, i) => (
            <span key={lang} className={styles.langGroup}>
              {i > 0 && <span className={styles.langSep}>/</span>}
              <span className={`${styles.langItem} ${lang === 'EN' ? styles.langActive : ''}`}>{lang}</span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
