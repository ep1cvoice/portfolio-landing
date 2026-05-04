import { useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../utils/i18n';
import { ChevronUp, Languages } from 'lucide-react';
import PrivacyPolicyModal from '../PrivacyPolicyModal/PrivacyPolicyModal';
import ReactLogo from '../../assets/icons/React-logo.svg';
import TypeScriptLogo from '../../assets/icons/Typescript_logo_2020.svg';
import ViteLogo from '../../assets/icons/Vite-logo.svg';
import ThreeJSLogo from '../../assets/icons/Three.js_Icon.svg';
import SwiperLogo from '../../assets/icons/swiper-logo.svg';
import FormspreeLogo from '../../assets/icons/Formspree_logo.svg';
import styles from './Footer.module.css';

interface TechItem {
	name: string;
	icon: ReactNode;
}

const LANGUAGES = ['EN', 'PL', 'RU'];

const TECH: TechItem[] = [
	{ name: 'React',       icon: <img src={ReactLogo}      alt='React'      className={styles.icon} /> },
	{ name: 'TypeScript',  icon: <img src={TypeScriptLogo} alt='TypeScript' className={styles.icon} /> },
	{ name: 'Vite',        icon: <img src={ViteLogo}       alt='Vite'       className={styles.icon} /> },
	{ name: 'Three.js',    icon: <img src={ThreeJSLogo}    alt='Three.js'   className={styles.icon} /> },
	{ name: 'Swiper',      icon: <img src={SwiperLogo}     alt='Swiper'     className={styles.icon} /> },
	{ name: 'Formspree',   icon: <img src={FormspreeLogo}  alt='Formspree'  className={styles.icon} /> },
	{ name: 'i18next',     icon: <Languages size={14} /> },
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
						{icon}
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
