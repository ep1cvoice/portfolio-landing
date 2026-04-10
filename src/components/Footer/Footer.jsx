
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../../utils/i18n';
import styles from './Footer.module.css';

const LANGUAGES = ['EN', 'PL', 'RU'];

function Footer() {
  const { t, i18n } = useTranslation();
  const activeLang = i18n.language.toUpperCase();

  return (
    <footer className={styles.footer}>
      

      <div className={styles.divider} />

      <div className={styles.content}>
        <p className={styles.copy}>{t('footer.copy')}</p>
        <div className={styles.lang}>
          {LANGUAGES.map((lang, i) => (
            <span key={lang} className={styles.langGroup}>
              {i > 0 && <span className={styles.langSep}>/</span>}
              <span
                className={`${styles.langItem} ${activeLang === lang ? styles.langActive : ''}`}
                onClick={() => changeLanguage(lang.toLowerCase())}
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
