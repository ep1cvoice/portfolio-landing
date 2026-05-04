import { useState, useEffect, useCallback, useMemo, lazy, Suspense, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard';
import styles from './Projects.module.css';
import xdetalzImg from '../../assets/projects/xdetalz-website.jpg?format=webp&quality=80';
import formafitImg from '../../assets/projects/formafit-website.jpg?format=webp&quality=80';
import swiftrateImg from '../../assets/projects/swiftrate-website.jpg?format=webp&quality=80';
import nexttodoImg from '../../assets/projects/nexttodo-website.jpg?format=webp&quality=80';
import checkycardImg from '../../assets/projects/webdev-checky-cards.jpg?format=webp&quality=80';
import emileRestaurantImg from '../../assets/projects/emile-restaurant.jpg?format=webp&quality=80';
import GlossAndMuseImg from '../../assets/projects/glossandmuse-site.jpg?w=1920&format=webp&quality=80';

const ProjectPreviewModal = lazy(() => import('../../components/ProjectPreviewModal/ProjectPreviewModal'));

interface Project {
  id: number;
  title: string;
  descKey: string;
  tags: string[];
  lang: string;
  image: string;
  demo?: string;
  demoUrl?: string;
  github?: string;
  demoLabelKey: string;
}

interface PreviewData {
  url: string;
  title: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Gloss&Muse Beauty Salon',
    descKey: 'projects.items.glossandmuse.desc',
    tags: ['Landing', 'Tailwind CSS', 'Figma'],
    lang: 'PL',
    image: GlossAndMuseImg,
    demo: GlossAndMuseImg,
    demoLabelKey: 'preview',
  },
  {
    id: 2,
    title: 'Émile Restaurant',
    descKey: 'projects.items.emile.desc',
    tags: ['Landing', 'Tailwind CSS', 'Figma'],
    lang: 'EN',
    image: emileRestaurantImg,
    demo: emileRestaurantImg,
    demoLabelKey: 'preview',
  },
  {
    id: 3,
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
    id: 4,
    title: 'FormaFit Gym',
    descKey: 'projects.items.formafit.desc',
    tags: ['Landing', 'C#', '.NET', 'MVC', 'Bootstrap', 'Entity', 'Identity'],
    lang: 'PL',
    image: formafitImg,
    github: 'https://github.com/ep1cvoice/gym-app-dotnet-mvc',
    demo: formafitImg,
    demoLabelKey: 'preview',
  },
  {
    id: 5,
    title: 'SwiftRate',
    descKey: 'projects.items.swiftrate.desc',
    tags: ['SPA', 'React', 'JSX', 'API', 'Vite', 'Error handling'],
    lang: 'PL',
    image: swiftrateImg,
    github: 'https://github.com/ep1cvoice/swift-rate-app',
    demo: swiftrateImg,
    demoLabelKey: 'preview',
  },
  {
    id: 6,
    title: 'NextTodo',
    descKey: 'projects.items.nexttodo.descPre',
    tags: ['SPA', 'React', 'TypeScript', 'API', 'Fastify'],
    lang: 'EN',
    image: nexttodoImg,
    github: 'https://github.com/matt400/NextTodo',
    demo: nexttodoImg,
    demoLabelKey: 'preview',
  },
  {
    id: 7,
    title: 'WebDev Checky Cards',
    descKey: 'projects.items.checkycards.desc',
    tags: ['SPA', 'React', 'Typescript', 'Supabase', 'Markdown'],
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
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const [sectionRef, visible] = useInView(0.1);
  const [gridRef, gridVisible] = useInView<HTMLDivElement>(0.1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const { paginatedProjects, totalPages } = useMemo(() => {
    const filtered = activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(activeFilter));
    const total = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    return { paginatedProjects: filtered.slice(startIndex, startIndex + itemsPerPage), totalPages: total };
  }, [activeFilter, currentPage, itemsPerPage]);

  useEffect(() => {
    function handleResize() {
      let next: number;
      if (window.innerWidth >= 1024) {
        next = 6;
      } else if (window.innerWidth >= 768) {
        next = 4;
      } else {
        next = 3;
      }
      setItemsPerPage((prev) => {
        if (prev !== next) setCurrentPage(1);
        return next;
      });
    }

    let raf: number;
    function onResize() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(handleResize);
    }

    handleResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToSection = useCallback(() => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [sectionRef]);

  const handlePreview = useCallback((data: PreviewData) => setPreview(data), []);
  const handleClosePreview = useCallback(() => setPreview(null), []);
  const handleFilterClick = useCallback((key: string) => { setActiveFilter(key); setCurrentPage(1); }, []);

  const getDescription = useCallback(
    (project: Project): ReactNode => {
      if (project.id === 6) {
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
    },
    [t],
  );

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
            onClick={() => handleFilterClick(key)}>
            {key === 'all' ? t('projects.all') : key}
          </button>
        ))}
      </div>

      <div ref={gridRef} className={`${styles.grid} ${gridVisible ? styles.gridVisible : ''}`}>
        {paginatedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            description={getDescription(project)}
            demoLabel={t(`projects.${project.demoLabelKey}`)}
            onPreview={handlePreview}
          />
        ))}
      </div>

      {preview && (
        <Suspense fallback={null}>
          <ProjectPreviewModal url={preview.url} title={preview.title} onClose={handleClosePreview} />
        </Suspense>
      )}

      {totalPages >= 2 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentPage(i + 1);
                scrollToSection();
              }}
              className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.activePage : ''}`}>
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
