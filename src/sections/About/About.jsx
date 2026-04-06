import { Briefcase, FolderCheck, Layers, Zap } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import styles from './About.module.css';

const STATS = [
	{
		icon: <Briefcase size={20} />,
		value: 'Web Developer',
		desc: 'Focused on React & modern UI',
		boxed: true,
	},
	{
		icon: <FolderCheck size={20} />,
		value: '10+',
		desc: 'Projects completed',
		boxed: true,
	},
	{
		icon: <Layers size={18} />,
		value: 'Modern Stack',
		desc: 'React, TypeScript, Next.js',
		boxed: true,
	},
	{
		icon: <Zap size={18} />,
		value: 'Performance',
		desc: 'Fast, responsive & optimized UX',
		boxed: true,
	},
];

function About() {
	const [sectionRef, visible] = useInView(0.15);
	const [statsRef, statsVisible] = useInView(0.2);

	return (
		<section id='about' ref={sectionRef} className={`${styles.about} ${visible ? styles.visible : ''}`}>
			<div className={styles.body}>
				{/* Left — slides in from the left */}
				<div className={styles.left}>
					<h2 className={styles.title}>About Me</h2>
					<div className={styles.accentLine} />
					<p className={styles.text}>
						I'm Pavel — a frontend developer focused on building clean, modern, and user-friendly web experiences. I
						primarily work with React and the modern JavaScript ecosystem.
						<br />
						<br />
						I enjoy turning complex problems into simple and intuitive interfaces, with a strong focus on performance,
						accessibility, and smooth user interactions.
						<br />
						<br />
            I've built several real-world projects — from landing pages to interactive web applications — paying close attention to detail, responsiveness, and UX.
						<br />
						<br />
						Currently, I'm deepening my knowledge in TypeScript and Next.js, while exploring the world of full-stack
						development with Node.js. I believe in continuous learning and staying curious about new technologies.
						<br />
						<br />
						Outside of coding, I actively follow UI/UX trends, experiment with animations and micro-interactions, and
						continuously improve my skills through hands-on projects.
					</p>
				</div>

				{/* Right — slides in from the right, cards stagger up */}
				<div ref={statsRef} className={`${styles.statsGrid} ${statsVisible ? styles.statsVisible : ''}`}>
					{STATS.map(({ icon, value, desc, boxed }) => (
						<div key={value} className={styles.statCard}>
							{boxed ? (
								<div className={styles.statIconWrap}>{icon}</div>
							) : (
								<span className={styles.statIcon}>{icon}</span>
							)}
							<div className={boxed ? styles.statTitle : styles.statNumber}>{value}</div>
							<p className={styles.statDesc}>{desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default About;
