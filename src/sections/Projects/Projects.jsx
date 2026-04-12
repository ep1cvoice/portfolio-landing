import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard';
import ProjectPreviewModal from '../../components/ProjectPreviewModal/ProjectPreviewModal';
import styles from './Projects.module.css';

import xdetalzImg from '../../assets/projects/xdetalz-website.jpg';
import formafitImg from '../../assets/projects/formafit-website.jpg';
import swiftrateImg from '../../assets/projects/swiftrate-website.jpg';
import nexttodoImg from '../../assets/projects/nexttodo-website.jpg';
import checkycardImg from '../../assets/projects/webdev-checky-cards.jpg';
import emileRestaurantImg from '../../assets/projects/emile-restaurant.jpg'

const PROJECTS = [
	{
		id: 1,
		title: 'Émile Restaurant',
		descKey: 'projects.items.emile.desc',
		tags: ['Landing', 'Tailwind CSS', 'Figma'],
		lang: 'EN',
		image: emileRestaurantImg,
		demo: emileRestaurantImg,
		demoLabelKey: 'preview',
	},
	{
		id: 2,
		title: 'xDetalz Auto Detailing',
		descKey: 'projects.items.xdetalz.desc',
		tags: ['Landing', 'JavaScript', 'SCSS', 'BEM'],
		lang: 'PL',
		image: xdetalzImg,
		github: 'https://github.com/ep1cvoice/xdetalz-detailing-website',
		demo: xdetalzImg,
		demoLabelKey: 'preview',
	},
	{
		id: 3,
		title: 'FormaFit Gym',
		descKey: 'projects.items.formafit.desc',
		tags: ['Landing', 'C#', '.NET', 'MVC', 'Bootstrap', ],
		lang: 'PL',
		image: formafitImg,
		github: 'https://github.com/ep1cvoice/gym-app-dotnet-mvc',
		demo: formafitImg,
		demoLabelKey: 'preview',
	},
	{
		id: 4,
		title: 'SwiftRate',
		descKey: 'projects.items.swiftrate.desc',
		tags: ['SPA', 'React', 'JSX', 'API', ],
		lang: 'PL',
		image: swiftrateImg,
		github: 'https://github.com/ep1cvoice/swift-rate-app',
		demo: swiftrateImg,
		demoLabelKey: 'preview',
	},
	{
		id: 5,
		title: 'NextTodo',
		descKey: 'projects.items.nexttodo.descPre',
		tags: ['SPA', 'React', 'JSX', 'API', ],
		lang: 'EN',
		image: nexttodoImg,
		github: 'https://github.com/matt400/NextTodo',
		demo: nexttodoImg,
		demoLabelKey: 'liveDemo',
	},
	{
		id: 6,
		title: 'WebDev Checky Cards',
		descKey: 'projects.items.checkycards.desc',
		tags: ['SPA', 'React', 'API', 'Supabase'],
		lang: 'PL',
		image: checkycardImg,
		github: 'https://github.com/ep1cvoice/webdev-checky-cards',
		demoUrl: 'https://webdev-checky-cards.vercel.app/',
		demoLabelKey: 'liveDemo',
	},
];

const FILTER_KEYS = ['all', 'React', 'Landing', 'API', 'SPA'];

function Projects() {
	const { t } = useTranslation();
	const [activeFilter, setActiveFilter] = useState('all');
	const [preview, setPreview] = useState(null);
	const [sectionRef, visible] = useInView(0.1);
	const [gridRef, gridVisible] = useInView(0.1);

	const filtered = activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(activeFilter));

	function getDescription(project) {
		if (project.id === 4) {
			return (
				<>
					{t(project.descKey)}
					<a href='https://github.com/matt400' target='_blank' rel='noopener noreferrer'>
						matt400
						<ArrowUpRight size={13} />
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

			{preview && <ProjectPreviewModal url={preview.url} title={preview.title} onClose={() => setPreview(null)} />}
		</section>
	);
}

export default Projects;
