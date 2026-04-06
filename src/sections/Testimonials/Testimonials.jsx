import { useRef, useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Michał Kowalski',
    role: 'CEO, TechStart Sp. z o.o.',
    avatar: 'https://api.dicebear.com/8.x/personas/svg?seed=Michal&backgroundColor=1a2040',
    text: 'Working with Pavel was an outstanding experience. He built our website from scratch and delivered something that truly exceeded our expectations — clean design, fast load times, and rock-solid code. Highly recommend.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Anna Wiśniewska',
    role: 'Freelance UX Designer',
    avatar: 'https://api.dicebear.com/8.x/personas/svg?seed=AnnaWis&backgroundColor=0f1424',
    text: 'Pavel translated my design requirements into a beautiful, functional interface with zero friction. The code was clean, delivery was on time, and communication was excellent throughout. I will definitely work with him again.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Piotr Nowak',
    role: 'E-commerce Owner',
    avatar: null,
    text: 'Since Pavel rebuilt our storefront, the app runs smoothly and customers constantly compliment the look. Performance improved dramatically and the whole process was professional from start to finish.',
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className={styles.star} />
      ))}
    </div>
  );
}

function Avatar({ src, name }) {
  if (src) {
    return <img src={src} alt={name} className={styles.avatar} />;
  }
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);
  return <div className={styles.avatarFallback}>{initials}</div>;
}

function TestimonialCard({ name, role, avatar, text, stars, index }) {
  return (
    <article
      className={styles.card}
      style={{ '--delay': `${0.1 + index * 0.15}s` }}
    >
      <div className={styles.quoteIcon}>
        <Quote size={28} />
      </div>

      <Stars count={stars} />

      <p className={styles.text}>{text}</p>

      <div className={styles.divider} />

      <div className={styles.author}>
        <Avatar src={avatar} name={name} />
        <div className={styles.authorInfo}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </div>
      </div>
    </article>
  );
}

function Testimonials() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`${styles.testimonials} ${visible ? styles.visible : ''}`}
    >
      <header className={styles.header}>
        <span className={styles.label}>TESTIMONIALS</span>
        <h2 className={styles.title}>What Clients Say</h2>
        <p className={styles.desc}>
          Trust and quality — the foundation of every project I take on.
        </p>
      </header>

      <div className={styles.grid}>
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.id} {...t} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
