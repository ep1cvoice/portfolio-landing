import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard';
import ProjectPreviewModal from '../../components/ProjectPreviewModal/ProjectPreviewModal';
import styles from './Projects.module.css';

import xdetalzImg    from '../../assets/projects/xdetalz-website.png';
import formafitImg   from '../../assets/projects/formafit-website.png';
import swiftrateImg  from '../../assets/projects/swiftrate-website.png';
import nexttodoImg   from '../../assets/projects/nexttodo-website.png';
import checkycardImg from '../../assets/projects/webdev-checky-cards.png';

const PROJECTS = [
	{
		id: 1,
		title: 'xDetalz Auto Detailing',
		descKey: 'projects.items.xdetalz.desc',
		tags: ['JavaScript', 'Landing', 'SCSS', 'BEM'],
		lang: 'PL',
		image: xdetalzImg,
		github: 'https://github.com/ep1cvoice/xdetalz-detailing-website',
		demo: xdetalzImg,
		demoLabelKey: 'preview',
	},
	{
		id: 2,
		title: 'FormaFit Gym',
		descKey: 'projects.items.formafit.desc',
		tags: ['C#', '.NET', 'MVC', 'Bootstrap', 'Landing'],
		lang: 'PL',
		image: formafitImg,
		github: 'https://github.com/ep1cvoice/gym-app-dotnet-mvc',
		demo: formafitImg,
		demoLabelKey: 'preview',
	},
	{
		id: 3,
		title: 'SwiftRate',
		descKey: 'projects.items.swiftrate.desc',
		tags: ['React', 'JSX', 'API', 'SPA'],
		lang: 'PL',
		image: swiftrateImg,
		github: 'https://github.com/ep1cvoice/swift-rate-app',
		demo: swiftrateImg,
		demoLabelKey: 'preview',
	},
	{
		id: 4,
		title: 'NextTodo',
		descKey: 'projects.items.nexttodo.descPre',
		tags: ['React', 'JSX', 'API', 'SPA'],
		lang: 'EN',
		image: nexttodoImg,
		github: 'https://github.com/matt400/NextTodo',
		demo: nexttodoImg,
		demoLabelKey: 'liveDemo',
	},
	{
		id: 5,
		title: 'WebDev Checky Cards',
		descKey: 'projects.items.checkycards.desc',
		tags: ['React', 'SPA', 'API', 'Auth'],
		lang: 'PL',
		image: checkycardImg,
		github: 'https://github.com/ep1cvoice/react-checky-cards',
		demo: checkycardImg,
		demoLabelKey: 'preview',
	},
];

const FILTER_KEYS = ['all', 'React', 'Landing', 'API',  'SPA'];

function Projects() {
	const { t } = useTranslation();
	const [activeFilter, setActiveFilter] = useState('all');
	const [preview, setPreview]           = useState(null);
	const [sectionRef, visible]           = useInView(0.1);
	const [gridRef, gridVisible]          = useInView(0.1);

	const filtered = activeFilter === 'all'
		? PROJECTS
		: PROJECTS.filter((p) => p.tags.includes(activeFilter));

	function getDescription(project) {
		if (project.id === 4) {
			return (
				<>
					{t(project.descKey)}
					<a href='https://github.com/matt400' target='_blank' rel='noopener noreferrer'>
						matt400<ArrowUpRight size={13} />
					</a>
				</>
			);
		}
		return t(project.descKey);
	}

	return (
		<section id='projects' ref={sectionRef} className={`${styles.projects} ${visible ? styles.visible : ''}`}>
			<header className={styles.header}>
				<span className={styles.label}>{t('projects.label')}</span>
				<h2 className={styles.title}>{t('projects.title')}</h2>
				<p className={styles.desc}>{t('projects.desc')}</p>
			</header>

			<div className={styles.filters}>
				{FILTER_KEYS.map((key) => (
					<button
						key={key}
						className={`${styles.filter} ${activeFilter === key ? styles.filterActive : ''}`}
						onClick={() => setActiveFilter(key)}>
						{key === 'all' ? t('projects.all') : key}
					</button>
				))}
			</div>

			<div ref={gridRef} className={`${styles.grid} ${gridVisible ? styles.gridVisible : ''}`}>
				{filtered.map((project) => (
					<ProjectCard
						key={project.id}
						{...project}
						description={getDescription(project)}
						demoLabel={t(`projects.${project.demoLabelKey}`)}
						onPreview={setPreview}
					/>
				))}
			</div>

			{preview && (
				<ProjectPreviewModal
					url={preview.url}
					title={preview.title}
					onClose={() => setPreview(null)}
				/>
			)}
		</section>
	);
}

export default Projects;
