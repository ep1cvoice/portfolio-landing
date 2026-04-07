import { ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const LANGUAGES = ['EN', 'PL', 'RU'];

function Footer() {
  const { t, i18n } = useTranslation();
  const activeLang = i18n.language.toUpperCase();

  return (
    <footer className={styles.footer}>
      <a href="#home" className={styles.startOver}>
        <ChevronUp size={16} className={styles.arrow} />
        <span className={styles.startOverLabel}>{t('footer.startOver')}</span>
      </a>

      <div className={styles.divider} />

      <div className={styles.content}>
        <p className={styles.copy}>{t('footer.copy')}</p>
        <div className={styles.lang}>
          {LANGUAGES.map((lang, i) => (
            <span key={lang} className={styles.langGroup}>
              {i > 0 && <span className={styles.langSep}>/</span>}
              <span
                className={`${styles.langItem} ${activeLang === lang ? styles.langActive : ''}`}
                onClick={() => i18n.changeLanguage(lang.toLowerCase())}
                style={{ cursor: 'pointer' }}>
                {lang}
              </span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
