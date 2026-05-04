import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../utils/i18n';
import { ChevronUp } from 'lucide-react';
import PrivacyPolicyModal from '../PrivacyPolicyModal/PrivacyPolicyModal';
import ReactLogo from '../../assets/icons/React-icon.svg.png';
import TypeScriptLogo from '../../assets/icons/Typescript_logo.jpg';
import I18nextLogo from '../../assets/icons/i18next-logo.png';
import SwipertLogo from '../../assets/icons/swiper-logo.svg';
import ViteLogo from '../../assets/icons/Vitejs-logo.svg.png';
import ThreeJSLogo from '../../assets/icons/Three.js_Icon.svg.png';
import FormspreeLogo from '../../assets/icons/Formspree_logo.svg';

import styles from './Footer.module.css';

const LANGUAGES = ['EN', 'PL', 'RU'];

const TECH = [
	{ name: 'React', icon: ReactLogo },
	{ name: 'TypeScript', icon: TypeScriptLogo },
	{ name: 'Vite', icon: ViteLogo },
	{ name: 'i18next', icon: I18nextLogo },
	{ name: 'Three.js', icon: ThreeJSLogo },
	{ name: 'Swiper', icon: SwipertLogo },
	{ name: 'Formspree', icon: FormspreeLogo },
];

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

			{/* Tech Stack Footer */}
			<div className={styles.techStack}>
				<span className={styles.label}>{t('footer.techStack')}</span>
				{TECH.map(({ name, icon }) => (
					<span key={name} className={styles.chip}>
						<img src={icon} alt={name} className={styles.icon} />
						{name}
					</span>
				))}
			</div>
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

			{/* Privacy Policy Modal show */}
			{showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}
		</footer>
	);
}

export default Footer;
