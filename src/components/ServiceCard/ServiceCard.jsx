import styles from './ServiceCard.module.css';

function ServiceCard({ icon, title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );
}

export default ServiceCard;
