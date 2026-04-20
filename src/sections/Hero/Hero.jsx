import { useEffect, useState, useRef, useCallback, lazy, Suspense } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WaveBackground = lazy(() => import('./WaveBackground'));
import githubIcon from '../../assets/icons/GitHub_Invertocat_White.svg';
import linkedinIcon from '../../assets/icons/in_logo.png';
import styles from './Hero.module.css';


const TYPE_SPEED_MIN = 40;
const TYPE_SPEED_MAX = 80;
const DELETE_SPEED = 22;
const PAUSE_AFTER_TYPE = 1200;
const PAUSE_BEFORE_TYPE = 300;

function randType() {
	return Math.floor(Math.random() * (TYPE_SPEED_MAX - TYPE_SPEED_MIN + 1)) + TYPE_SPEED_MIN;
}

function Hero() {
	const { t, i18n } = useTranslation();

	// Store char counts, not strings — so derived text auto-updates on language change
	const [line1Chars, setLine1Chars]                 = useState(0);
	const [line2Chars, setLine2Chars]                 = useState(0);
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [isDeleting, setIsDeleting]                 = useState(false);
	const [isLine1Finished, setIsLine1Finished]       = useState(false);
	const [isFinished, setIsFinished]                 = useState(false);

	const name     = t('hero.name');
	const greeting = t('hero.greeting');
	const phrases  = [t('hero.phrase1'), t('hero.phrase2'), t('hero.phrase3')];
	const fullLine1 = greeting + name;

	// Derived display strings — always reflect current language
	const line1Text = isLine1Finished ? fullLine1 : fullLine1.slice(0, line1Chars);
	const line2Text = phrases[currentPhraseIndex].slice(0, line2Chars);

	// When language changes after animation is done, snap to new translation
	useEffect(() => {
		if (isFinished) {
			setLine2Chars(phrases[phrases.length - 1].length);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [i18n.language]);

	// ── Line 1: type once, never delete ──────────────────────────────
	useEffect(() => {
		if (isLine1Finished) return;

		if (line1Chars < fullLine1.length) {
			const timer = setTimeout(() => setLine1Chars((c) => c + 1), randType());
			return () => clearTimeout(timer);
		} else {
			setIsLine1Finished(true);
		}
	}, [line1Chars, isLine1Finished, fullLine1.length]);

	// ── Line 2: start after line 1, stop on last phrase ──────────────
	const phraseLen = phrases[currentPhraseIndex].length;
	useEffect(() => {
		if (!isLine1Finished || isFinished) return;

		const isLast = currentPhraseIndex === phrases.length - 1;

		if (!isDeleting) {
			if (line2Chars < phraseLen) {
				const timer = setTimeout(() => setLine2Chars((c) => c + 1), randType());
				return () => clearTimeout(timer);
			}
			if (isLast) {
				setIsFinished(true);
				return;
			}
			const timer = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
			return () => clearTimeout(timer);
		} else {
			if (line2Chars > 0) {
				const timer = setTimeout(() => setLine2Chars((c) => c - 1), DELETE_SPEED);
				return () => clearTimeout(timer);
			}
			const timer = setTimeout(() => {
				setIsDeleting(false);
				setCurrentPhraseIndex((i) => i + 1);
			}, PAUSE_BEFORE_TYPE);
			return () => clearTimeout(timer);
		}
	// phraseLen re-evaluates when language changes, keeping the effect in sync
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLine1Finished, isFinished, line2Chars, currentPhraseIndex, isDeleting, phraseLen]);

	// ── Magnetic buttons ─────────────────────────────────────────
	const btn1Ref = useRef();
	const btn2Ref = useRef();

	const onMagneticMove = useCallback((e, ref) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 22;
		const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 16;
		el.style.transform = `translate(${x}px, ${y}px)`;
	}, []);

	const onMagneticLeave = useCallback((ref) => {
		if (ref.current) ref.current.style.transform = '';
	}, []);

	// ── Portrait tilt ────────────────────────────────────────────
	const rightRef   = useRef();
	const tiltWrapRef = useRef();
	const glowRef    = useRef();
	const cur  = useRef({ x: 0, y: 0 });
	const tgt  = useRef({ x: 0, y: 0 });
	const rafId = useRef();

	useEffect(() => {
		// Wait for the fadeInUp animation to finish before taking over transform
		const startDelay = setTimeout(() => {
			const tick = () => {
				cur.current.x += (tgt.current.x - cur.current.x) * 0.07;
				cur.current.y += (tgt.current.y - cur.current.y) * 0.07;
				const { x, y } = cur.current;
				if (tiltWrapRef.current) {
					tiltWrapRef.current.style.transform =
						`perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg)`;
				}
				if (glowRef.current) {
					glowRef.current.style.transform =
						`translate(${-x * 16}px, ${y * 12}px)`;
				}
				rafId.current = requestAnimationFrame(tick);
			};
			tick();
		}, 2500);

		// Mobile: device gyroscope
		const onOrientation = (e) => {
			tgt.current.x = Math.max(-1, Math.min(1, (e.gamma || 0) / 15));
			tgt.current.y = Math.max(-1, Math.min(1, ((e.beta  || 45) - 45) / 15));
		};
		window.addEventListener('deviceorientation', onOrientation);

		return () => {
			clearTimeout(startDelay);
			cancelAnimationFrame(rafId.current);
			window.removeEventListener('deviceorientation', onOrientation);
		};
	}, []);

	const handleMouseMove = useCallback((e) => {
		const rect = rightRef.current?.getBoundingClientRect();
		if (!rect) return;
		tgt.current.x = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2;
		tgt.current.y = ((e.clientY - rect.top)    / rect.height - 0.5) * 2;
	}, []);

	const handleMouseLeave = useCallback(() => {
		tgt.current = { x: 0, y: 0 };
	}, []);

	return (
		<section id='home' className={styles.hero}>
			<div className={styles.canvasBg}>
				<Suspense fallback={null}>
					<WaveBackground />
				</Suspense>
			</div>
			<div className={styles.content}>
				{/* Left */}
				<div className={styles.left}>
					<div className={styles.typewriterBlock}>
						{/* Line 1 — types once, stays */}
						<div className={styles.typewriterLine}>
							<span className={`${styles.typewriterText} ${styles.typewriterTextMuted}`}>
								{line1Text.startsWith(greeting) ? (
									<>
										{line1Text.slice(0, greeting.length)}
										<span className={styles.name}>{line1Text.slice(greeting.length)}</span>
									</>
								) : (
									line1Text
								)}
							</span>
							{!isLine1Finished && (
								<span className={styles.cursor} aria-hidden='true'>
									|
								</span>
							)}
						</div>

						{/* Line 2 — starts after line 1, stops on last phrase */}
						<div className={styles.typewriterLine}>
							{isLine1Finished && (
								<>
									<span className={styles.typewriterText}>{line2Text}</span>
									<span className={styles.cursor} aria-hidden='true'>
										|
									</span>
								</>
							)}
						</div>
					</div>

					<p className={styles.description}>{t('hero.description')}</p>
					<div className={styles.cta}>
						<a
							ref={btn1Ref}
							href='#projects'
							className={styles.btnPrimary}
							onMouseMove={(e) => onMagneticMove(e, btn1Ref)}
							onMouseLeave={() => onMagneticLeave(btn1Ref)}>
							{t('hero.viewProjects')}
						</a>
						<a
							ref={btn2Ref}
							href='#contact'
							className={styles.btnOutline}
							onMouseMove={(e) => onMagneticMove(e, btn2Ref)}
							onMouseLeave={() => onMagneticLeave(btn2Ref)}>
							{t('hero.contactMe')}
						</a>
					</div>
				</div>

				{/* Right — portrait */}
				<div
					className={styles.right}
					ref={rightRef}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}>
					<div className={styles.tiltWrap} ref={tiltWrapRef}>
						<div className={styles.glow} ref={glowRef} />
						<div className={styles.portraitFrame}>
							<div className={styles.portrait} />
						</div>
						<div className={`${styles.deco} ${styles.decoC1}`} />
						<div className={`${styles.deco} ${styles.decoC2}`} />
						<div className={`${styles.deco} ${styles.decoSq}`} />
						<div className={`${styles.deco} ${styles.decoDot}`} />
					</div>
					<div className={styles.social}>
						<a
							href='https://github.com/ep1cvoice'
							aria-label='GitHub'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.socialIcon}>
							<img src={githubIcon} alt='GitHub' width={26} height={26} />
						</a>
						<a
							href='https://www.linkedin.com/in/pavlokovalchuk0510'
							aria-label='LinkedIn'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.socialIcon}>
							<img
								src={linkedinIcon}
								alt='LinkedIn'
								width={26}
								height={26}
								className={styles.linkedinIcon}
							/>
						</a>
						<div className={styles.socialLine} />
					</div>
				</div>

				<a href='#about' className={styles.scrollDown}>
					<span className={styles.scrollDownLabel}>{t('hero.scrollDown')}</span>
					<ChevronDown size={16} className={styles.arrow} />
				</a>
			</div>
		</section>
	);
}

export default Hero;
