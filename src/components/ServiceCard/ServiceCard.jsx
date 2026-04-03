import styles from './ServiceCard.module.css';

function ServiceCard({ icon, title, description, highlighted = false }) {
  return (
    <article className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}>
      <div className={styles.iconWrap}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );
}

export default ServiceCard;
