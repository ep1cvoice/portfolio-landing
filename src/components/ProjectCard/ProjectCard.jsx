import { memo } from 'react';
import { ExternalLink } from 'lucide-react';
import githubIcon from '../../assets/icons/GitHub_Invertocat_White.svg';
import styles from './ProjectCard.module.css';

function ProjectCard({ image, title, description, tags, lang, github, demo, demoUrl, demoLabel = 'Live Demo', onPreview }) {
  const handleDemoClick = () => {
    if (demoUrl) {
      window.open(demoUrl, '_blank', 'noopener,noreferrer');
    } else {
      onPreview?.({ url: demo, title });
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.image} onClick={handleDemoClick}>
        {image && (
          <img
            src={image}
            alt={title}
            className={styles.img}
            loading="lazy"
            decoding="async"
          />
        )}
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
          {github && (
            <a href={github} className={styles.linkGh} aria-label="GitHub repository" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" width={16} height={16} />
              <span>GitHub</span>
            </a>
          )}
          {demoUrl ? (
            <a
              href={demoUrl}
              className={styles.linkDemo}
              aria-label="Live demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span>{demoLabel}</span>
            </a>
          ) : (
            <button
              className={styles.linkDemo}
              aria-label="Live demo"
              onClick={handleDemoClick}
            >
              <ExternalLink size={16} />
              <span>{demoLabel}</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default memo(ProjectCard);
