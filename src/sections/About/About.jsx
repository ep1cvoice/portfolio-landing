import { Briefcase, FolderCheck, Layers, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
import styles from './About.module.css';

const STATS_META = [
	{ icon: <Briefcase size={20} />, valueKey: 'about.stats.role',  descKey: 'about.stats.roleDesc',     boxed: true },
	{ icon: <FolderCheck size={20} />, value: '10+',                descKey: 'about.stats.projectsDesc', boxed: true },
	{ icon: <Layers size={18} />,    valueKey: 'about.stats.stack', descKey: 'about.stats.stackDesc',    boxed: true },
	{ icon: <Zap size={18} />,       valueKey: 'about.stats.perf',  descKey: 'about.stats.perfDesc',     boxed: true },
];

function About() {
	const { t } = useTranslation();
	const [sectionRef, visible]   = useInView(0.15);
	const [statsRef, statsVisible] = useInView(0.2);

	return (
		<section id='about' ref={sectionRef} className={`${styles.about} ${visible ? styles.visible : ''}`}>
			<div className={styles.body}>
				{/* Left */}
				<div className={styles.left}>
					<h2 className={styles.title}>{t('about.title')}</h2>
					<div className={styles.accentLine} />
					<p className={styles.text}>
						{t('about.p1')}
						<br /><br />
						{t('about.p2')}
						<br /><br />
						{t('about.p3')}
						<br /><br />
						{t('about.p4')}
						<br /><br />
						{t('about.p5')}
					</p>
				</div>

				{/* Right */}
				<div ref={statsRef} className={`${styles.statsGrid} ${statsVisible ? styles.statsVisible : ''}`}>
					{STATS_META.map(({ icon, value, valueKey, descKey, boxed }) => (
						<div key={descKey} className={styles.statCard}>
							{boxed ? (
								<div className={styles.statIconWrap}>{icon}</div>
							) : (
								<span className={styles.statIcon}>{icon}</span>
							)}
							<div className={boxed ? styles.statTitle : styles.statNumber}>
								{value ?? t(valueKey)}
							</div>
							<p className={styles.statDesc}>{t(descKey)}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default About;
