import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import WaveBackground from './WaveBackground';
import githubIcon from '../../assets/icons/GitHub_Invertocat_White.svg';
import linkedinIcon from '../../assets/icons/in_logo.png';
import styles from './Hero.module.css';

const LINE1_PART1 = "Hello, my name's ";
const NAME = 'Pavel';

const PHRASES = [
	"I'm a frontend developer",
	'I build fast and user-friendly web applications',
	'I create interfaces that deliver results.',
];

const TYPE_SPEED_MIN = 40;
const TYPE_SPEED_MAX = 80;
const DELETE_SPEED = 22;
const PAUSE_AFTER_TYPE = 1200;
const PAUSE_BEFORE_TYPE = 300;

function randType() {
	return Math.floor(Math.random() * (TYPE_SPEED_MAX - TYPE_SPEED_MIN + 1)) + TYPE_SPEED_MIN;
}

function Hero() {
	const [line1Text, setLine1Text] = useState('');
	const [line2Text, setLine2Text] = useState('');
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isLine1Finished, setIsLine1Finished] = useState(false);
	const [isFinished, setIsFinished] = useState(false);

	// ── Line 1: type once, never delete ──────────────────────────────
	useEffect(() => {
		if (isLine1Finished) return;

		if (line1Text.length < (LINE1_PART1 + NAME).length) {
			const fullText = LINE1_PART1 + NAME;

			const t = setTimeout(() => {
				setLine1Text(fullText.slice(0, line1Text.length + 1));
			}, randType());

			return () => clearTimeout(t);
		} else {
			setIsLine1Finished(true);
		}
	}, [line1Text, isLine1Finished]);

	// ── Line 2: start after line 1, stop on last phrase ──────────────
	useEffect(() => {
		if (!isLine1Finished || isFinished) return;

		const phrase = PHRASES[currentPhraseIndex];
		const isLast = currentPhraseIndex === PHRASES.length - 1;

		if (!isDeleting) {
			if (line2Text.length < phrase.length) {
				const t = setTimeout(() => {
					setLine2Text(phrase.slice(0, line2Text.length + 1));
				}, randType());
				return () => clearTimeout(t);
			}
			// Fully typed
			if (isLast) {
				setIsFinished(true);
				return;
			}
			const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
			return () => clearTimeout(t);
		} else {
			if (line2Text.length > 0) {
				const t = setTimeout(() => {
					setLine2Text(line2Text.slice(0, -1));
				}, DELETE_SPEED);
				return () => clearTimeout(t);
			}
			const t = setTimeout(() => {
				setIsDeleting(false);
				setCurrentPhraseIndex((i) => i + 1);
			}, PAUSE_BEFORE_TYPE);
			return () => clearTimeout(t);
		}
	}, [isLine1Finished, isFinished, line2Text, currentPhraseIndex, isDeleting]);

	return (
		<section id='home' className={styles.hero}>
			<div className={styles.canvasBg}>
				<WaveBackground />
			</div>
			<div className={styles.content}>
				{/* Left */}
				<div className={styles.left}>
					<div className={styles.typewriterBlock}>
						{/* Line 1 — types once, stays */}
						<div className={styles.typewriterLine}>
							<span className={`${styles.typewriterText} ${styles.typewriterTextMuted}`}>
								{line1Text.startsWith(LINE1_PART1) ? (
									<>
										{line1Text.slice(0, LINE1_PART1.length)}
										<span className={styles.name}>{line1Text.slice(LINE1_PART1.length)}</span>
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

					<p className={styles.description}>Building modern, responsive web applications and landing pages.</p>
					<div className={styles.cta}>
						<a href='#projects' className={styles.btnPrimary}>
							View Projects
						</a>
						<a href='#contact' className={styles.btnOutline}>
							Contact Me
						</a>
					</div>
				</div>

				{/* Right — portrait */}
				<div className={styles.right}>
					<div className={styles.glow} />
					<div className={styles.portraitFrame}>
						<div className={styles.portrait} />
					</div>
					<div className={`${styles.deco} ${styles.decoC1}`} />
					<div className={`${styles.deco} ${styles.decoC2}`} />
					<div className={`${styles.deco} ${styles.decoSq}`} />
					<div className={`${styles.deco} ${styles.decoDot}`} />
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
							target='_blank'
							width={26}
							height={26}
							className={styles.linkedinIcon}
						/>
					</a>
					<div className={styles.socialLine} />
				</div>
				</div>

				{/* Social links */}
				<a href='#about' className={styles.scrollDown}>
					<span className={styles.scrollDownLabel}>Scroll down</span>
					<ChevronDown size={16} className={styles.arrow} />
				</a>
			</div>
		</section>
	);
}

export default Hero;
