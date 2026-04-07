import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard';
import ProjectPreviewModal from '../../components/ProjectPreviewModal/ProjectPreviewModal';
import styles from './Projects.module.css';

import xdetalzImg from '../../assets/projects/xdetalz-website.png';
import formafitImg from '../../assets/projects/formafit-website.png';
import swiftrateImg from '../../assets/projects/swiftrate-website.png';
import nexttodoImg from '../../assets/projects/nexttodo-website.png';
import checkycardImg from '../../assets/projects/webdev-checky-cards.png';

const PROJECTS = [
  {
    id: 1,
    title: 'xDetalz Auto Detailing',
    description: 'Premium automotive detailing landing page with service showcase, gallery, and contact form. Dark gold design built for conversion.',
    tags: ['JavaScript', 'Landing', 'SCSS', 'BEM'],
    lang: 'PL',
    image: xdetalzImg,
    github: 'https://github.com/ep1cvoice/xdetalz-detailing-website',
    demo: xdetalzImg,
    demoLabel: 'Preview',
  },
  {
    id: 2,
    title: 'FormaFit Gym',
    description: 'Fitness gym website featuring training programs, trainer profiles, client testimonials, and subscription pricing plans.',
    tags: ['C#', '.NET', 'MVC', 'Bootstrap', 'Landing'],
    lang: 'PL',
    image: formafitImg,
    github: 'https://github.com/ep1cvoice/gym-app-dotnet-mvc',
    demo: formafitImg,
    demoLabel: 'Preview',
  },
  {
    id: 3,
    title: 'SwiftRate',
    description: 'Real-time currency converter supporting lots of currencies with live exchange rates, instant conversion, and clean and modern purple UI.',
    tags: ['React', 'JSX', 'API', 'SPA',],
    lang: 'PL',
    image: swiftrateImg,
    github: 'https://github.com/ep1cvoice/swift-rate-app',
    demo: swiftrateImg,
    demoLabel: 'Preview',
  },
  {
    id: 5,
    title: 'WebDev Checky Cards',
    description: 'Flashcard-style web dev theory trainer. Browse Q&A cards with markdown-rendered answers, syntax-highlighted code snippets, dark/light theme, and auth-protected question management backed by a local REST API.',
    tags: ['React', 'SPA', 'API', 'Auth'],
    lang: 'PL',
    image: checkycardImg, 
    github: 'https://github.com/ep1cvoice/webgdev-checky-cards',
    demo: checkycardImg,
    demoLabel: 'Preview',
  },
  {
    id: 4,
    title: 'NextTodo',
    description: <>Full-featured task manager with active/completed task views, deadlines, pomodoro times and user authentication built with React and Fastify in collaboration with <a href="https://github.com/matt400" target="_blank" rel="noopener noreferrer">matt400<ArrowUpRight size={13} /></a></>,
    tags: ['React', 'JSX', 'API', 'SPA'],
    lang: 'EN',
    image: nexttodoImg,
    github: 'https://github.com/matt400/NextTodo',
    demo: nexttodoImg,
    demoLabel: 'Live Demo',
  },
];

const FILTERS = ['All', 'React', 'Next.js', 'API', 'Landing', 'SPA'];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [preview, setPreview] = useState(null);
  const [sectionRef, visible] = useInView(0.1);
  const [gridRef, gridVisible] = useInView(0.1);

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" ref={sectionRef} className={`${styles.projects} ${visible ? styles.visible : ''}`}>
      <header className={styles.header}>
        <span className={styles.label}>PORTFOLIO</span>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.desc}>
          Here are some of my recent projects showcasing my skills in web development
        </p>
      </header>

      <div className={styles.filters}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.filter} ${activeFilter === f ? styles.filterActive : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div ref={gridRef} className={`${styles.grid} ${gridVisible ? styles.gridVisible : ''}`}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} {...project} onPreview={setPreview} />
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
