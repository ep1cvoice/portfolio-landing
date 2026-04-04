import { ChevronUp } from 'lucide-react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#home" className={styles.startOver}>
        <ChevronUp size={16} className={styles.arrow} />
        <ChevronUp size={16} className={styles.arrow} />
        <span className={styles.startOverLabel}>Start over</span>
      </a>

      <div className={styles.divider} />

      <div className={styles.content}>
        <p className={styles.copy}>© 2026 Pavel. All rights reserved.</p>
        <div className={styles.lang}>
          <span className={`${styles.langItem} ${styles.langActive}`}>EN</span>
          <span className={styles.langItem}>PL</span>
          <span className={styles.langItem}>RU</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
