import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../../utils/i18n';
import { ChevronUp } from 'lucide-react';
import PrivacyPolicyModal from '../PrivacyPolicyModal/PrivacyPolicyModal';
import styles from './Footer.module.css';

const LANGUAGES = ['EN', 'PL', 'RU'];

function Footer() {
	const { t, i18n } = useTranslation();
	const activeLang = i18n.language.toUpperCase();
	const [showPrivacy, setShowPrivacy] = useState(false);

	return (
		<footer className={styles.footer}>
			<a href='#home' className={styles.startOver}>
				<ChevronUp size={16} className={styles.arrow} />
				<span className={styles.startOverLabel}>{t('footer.startOver')}</span>
			</a>

			<div className={styles.divider} />

			<div className={styles.content}>
				<div className={styles.left}>
					<p className={styles.copy}>{t('footer.copy')}</p>
					<p className={styles.rights}>{t('footer.rights')}</p>
				</div>
				<div className={styles.right}>
					<button className={styles.privacyLink} onClick={() => setShowPrivacy(true)}>
						{t('footer.privacy')}
					</button>
					<span className={styles.rightSep} />
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
			</div>

			{showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}
		</footer>
	);
}

export default Footer;
