import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.content}>
        <p className={styles.copy}>© 2026 Pavel. All rights reserved.</p>
        <div className={styles.lang}>
          <span className={`${styles.langItem} ${styles.langActive}`}>EN</span>
          <span className={styles.langItem}>PL</span>
          <span className={styles.langItem}>UA</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
