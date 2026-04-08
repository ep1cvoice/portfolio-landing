import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../../utils/i18n';
import styles from './Header.module.css';

const NAV_IDS = [
	{ id: 'home', key: 'nav.home', href: '#home' },
	{ id: 'about', key: 'nav.about', href: '#about' },
	{ id: 'projects', key: 'nav.projects', href: '#projects' },
	{ id: 'services', key: 'nav.services', href: '#services' },
	{ id: 'skills', key: 'nav.skills', href: '#skills' },
	{ id: 'contact', key: 'nav.contact', href: '#contact' },
];

const LANGUAGES = ['EN', 'PL', 'RU'];

function Header() {
	const { t, i18n } = useTranslation();
	const [scrolled, setScrolled] = useState(false);
	const [active, setActive] = useState('home');
	const [menuOpen, setMenuOpen] = useState(false);
	const [langModal, setLangModal] = useState(false);
	const langRef = useRef(null);

	const activeLang = i18n.language.toUpperCase();

	const changeLang = (lang) => {
		changeLanguage(lang.toLowerCase());
	};

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Track active section via IntersectionObserver
	useEffect(() => {
		const observers = [];

		NAV_IDS.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActive(id);
				},
				{ threshold: 0.35 },
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	useEffect(() => {
		const onClickOutside = (e) => {
			if (langRef.current && !langRef.current.contains(e.target)) {
				setLangModal(false);
			}
		};
		if (langModal) document.addEventListener('mousedown', onClickOutside);
		return () => document.removeEventListener('mousedown', onClickOutside);
	}, [langModal]);

	const handleNavClick = () => {
		setMenuOpen(false);
	};

	const overlayEl = (
		<div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`} onClick={() => setMenuOpen(false)}>
			<ul className={styles.overlayNav} onClick={(e) => e.stopPropagation()}>
				{NAV_IDS.map(({ id, key, href }, i) => (
					<li
						key={id}
						className={`${styles.overlayItem} ${menuOpen ? styles.overlayItemVisible : ''}`}
						style={{ transitionDelay: menuOpen ? `${i * 75 + 120}ms` : '0ms' }}>
						<a
							href={href}
							className={`${styles.overlayLink} ${active === id ? styles.overlayLinkActive : ''}`}
							onClick={handleNavClick}>
							{t(key)}
						</a>
					</li>
				))}
			</ul>
		</div>
	);

	return (
		<>
			{createPortal(overlayEl, document.body)}
			<header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
				<nav className={styles.nav}>
					<a href='#'>
						<span className={styles.logo}>pavel.</span>
					</a>

					{/* Desktop nav */}
					<div className={styles.right}>
						<ul className={styles.navLinks}>
							{NAV_IDS.map(({ id, key, href }) => (
								<li key={id}>
									<a href={href} className={`${styles.link} ${active === id ? styles.linkActive : ''}`}>
										{t(key)}
									</a>
								</li>
							))}
						</ul>

						<div className={styles.lang}>
							{LANGUAGES.map((lang, i) => (
								<span key={lang} className={styles.langGroup}>
									{i > 0 && <span className={styles.langSep}>/</span>}
									<span
										className={`${styles.langItem} ${activeLang === lang ? styles.langActive : ''}`}
										onClick={() => changeLang(lang)}>
										{lang}
									</span>
								</span>
							))}
						</div>

						<a href='/Pavlo_Kovalchuk_Frontend_Developer_CV.pdf' download className={styles.cvBtn}>
							<span>{t('header.downloadCV')}</span>
							<Download size={14} />
						</a>
					</div>

					{/* Mobile controls */}
					<div className={styles.mobileControls}>
						<a
							href='../../public/Pavlo_Kovalchuk_Frontend_Developer_CV.pdf'
							download
							className={styles.cvBtnMobile}
							aria-label='Download CV'>
							<span>{t('header.cv')}</span>
							<Download size={14} />
						</a>

						<div className={styles.langBtn} ref={langRef} onClick={() => setLangModal((v) => !v)}>
							<span className={styles.langBtnText}>{activeLang}</span>
							<svg
								className={`${styles.langChevron} ${langModal ? styles.langChevronOpen : ''}`}
								width='10'
								height='6'
								viewBox='0 0 10 6'
								fill='none'>
								<path
									d='M1 1L5 5L9 1'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>

							{langModal && (
								<div className={styles.langDropdown}>
									{LANGUAGES.map((lang) => (
										<button
											key={lang}
											className={`${styles.langOption} ${activeLang === lang ? styles.langOptionActive : ''}`}
											onClick={(e) => {
												e.stopPropagation();
												changeLang(lang);
												setLangModal(false);
											}}>
											{lang}
										</button>
									))}
								</div>
							)}
						</div>

						<button
							className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
							onClick={() => setMenuOpen((v) => !v)}
							aria-label='Toggle menu'>
							<span className={styles.burgerLine} />
							<span className={styles.burgerLine} />
							<span className={styles.burgerLine} />
						</button>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Header;
