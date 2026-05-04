import type { ReactNode } from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );
}

export default ServiceCard;
