import { useState } from 'react';
import ProjectCard from '../ProjectCard';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'Full-featured dashboard for managing products, orders and analytics with real-time data updates.',
    tags: ['React', 'API'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'Modern weather application with geolocation, 5-day forecast and interactive maps using OpenWeather API.',
    tags: ['React', 'API'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Responsive portfolio landing page with smooth animations, glassmorphism design and contact form.',
    tags: ['React', 'Landing'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Task Manager',
    description: 'Drag-and-drop task management app with categories, priorities and local storage persistence.',
    tags: ['React', 'SPA'],
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'Movie Search',
    description: 'Film discovery platform with TMDB API integration, search, filtering and watchlist functionality.',
    tags: ['React', 'API'],
    github: '#',
    demo: '#',
  },
  {
    id: 6,
    title: 'Restaurant Landing',
    description: 'Modern restaurant landing page with menu showcase, reservation form and responsive design.',
    tags: ['CSS', 'Landing'],
    github: '#',
    demo: '#',
  },
];

const FILTERS = ['All', 'React', 'API', 'Landing'];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className={styles.projects}>
      <header className={styles.header}>
        <span className={styles.label}>PORTFOLIO</span>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.desc}>
          Here are some of my recent projects showcasing my skills in React development
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

      <div className={styles.grid}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
