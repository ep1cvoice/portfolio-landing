import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Download } from 'lucide-react';
import styles from './Header.module.css';

const NAV_LINKS = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Services', href: '#services' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Contact', href: '#contact' },
];

const LANGUAGES = ['EN', 'PL', 'RU'];

function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [active, setActive] = useState('Home');
	const [menuOpen, setMenuOpen] = useState(false);
	const [langModal, setLangModal] = useState(false);
	const [activeLang, setActiveLang] = useState('EN');
	const langRef = useRef(null);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Track active section via IntersectionObserver
	useEffect(() => {
		const observers = [];

		NAV_LINKS.forEach(({ label, href }) => {
			const id = href.replace('#', '');
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActive(label);
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
				{NAV_LINKS.map(({ label, href }, i) => (
					<li
						key={label}
						className={`${styles.overlayItem} ${menuOpen ? styles.overlayItemVisible : ''}`}
						style={{ transitionDelay: menuOpen ? `${i * 75 + 120}ms` : '0ms' }}>
						<a
							href={href}
							className={`${styles.overlayLink} ${active === label ? styles.overlayLinkActive : ''}`}
							onClick={handleNavClick}>
							{label}
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
							{NAV_LINKS.map(({ label, href }) => (
								<li key={label}>
									<a href={href} className={`${styles.link} ${active === label ? styles.linkActive : ''}`}>
										{label}
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
										onClick={() => setActiveLang(lang)}>
										{lang}
									</span>
								</span>
							))}
						</div>

						<a href='#' className={styles.cvBtn}>
							<span>Download CV</span>
							<Download size={14} />
						</a>
					</div>

					{/* Mobile controls: [LANGUAGE] [BURGER] */}
					<div className={styles.mobileControls}>
						<a href='#' className={styles.cvBtnMobile} aria-label='Download CV'>
							<span>CV</span>
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
												setActiveLang(lang);
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
