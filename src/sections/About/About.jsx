import { useRef, useEffect, useState } from 'react';
import { Briefcase, FolderCheck, Layers, Zap } from 'lucide-react';
import styles from './About.module.css';

const STATS = [
  {
    icon: <Briefcase size={20} />,
    value: '2+ Years',
    desc: 'Building modern web applications',
    boxed: false,
  },
  {
    icon: <FolderCheck size={20} />,
    value: '10+',
    desc: 'Projects completed',
    boxed: false,
  },
  {
    icon: <Layers size={18} />,
    value: 'Modern Stack',
    desc: 'React, TypeScript, Next.js',
    boxed: true,
  },
  {
    icon: <Zap size={18} />,
    value: 'Performance',
    desc: 'Fast and optimized user experiences',
    boxed: true,
  },
];

function About() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.about} ${visible ? styles.visible : ''}`}
    >
      <div className={styles.body}>
        {/* Left — slides in from the left */}
        <div className={styles.left}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.accentLine} />
          <p className={styles.text}>
            I'm Pavel — a passionate frontend developer focused on building clean, modern, and
            user-friendly web experiences. My primary expertise lies in React and the modern
            JavaScript ecosystem.
            <br /><br />
            I love turning complex problems into simple, beautiful, and intuitive interfaces.
            Whether it's a landing page, a web application, or a design system — I bring
            attention to detail and a focus on performance to every project.
            <br /><br />
            Currently, I'm deepening my knowledge in TypeScript and Next.js, while exploring
            the world of full-stack development with Node.js. I believe in continuous learning
            and staying curious about new technologies.
            <br /><br />
            When I'm not coding, you'll find me exploring UI/UX trends, contributing to open
            source, or experimenting with creative coding projects.
          </p>
        </div>

        {/* Right — slides in from the right, cards stagger up */}
        <div className={styles.statsGrid}>
          {STATS.map(({ icon, value, desc, boxed }) => (
            <div key={value} className={styles.statCard}>
              {boxed
                ? <div className={styles.statIconWrap}>{icon}</div>
                : <span className={styles.statIcon}>{icon}</span>
              }
              <div className={boxed ? styles.statTitle : styles.statNumber}>{value}</div>
              <p className={styles.statDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
