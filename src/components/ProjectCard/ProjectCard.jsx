import { ExternalLink } from 'lucide-react';
import githubIcon from '../../assets/icons/GitHub_Invertocat_White.svg';
import styles from './ProjectCard.module.css';

function ProjectCard({ image, title, description, tags, lang, github, demo, demoLabel = 'Live Demo', onPreview }) {
  return (
    <article className={styles.card}>
      <div
        className={styles.image}
        style={image ? { backgroundImage: `url(${image})` } : {}}
        onClick={() => onPreview?.({ url: demo, title })}
      >
        {lang && <span className={styles.lang}>{lang}</span>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>

        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.links}>
          <a href={github} className={styles.linkGh} aria-label="GitHub repository" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" width={16} height={16} />
            <span>GitHub</span>
          </a>
          <button
            className={styles.linkDemo}
            aria-label="Live demo"
            onClick={() => onPreview?.({ url: demo, title })}
          >
            <ExternalLink size={16} />
            <span>{demoLabel}</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
