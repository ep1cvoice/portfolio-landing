import { Briefcase, FolderCheck, Layers, Zap } from 'lucide-react';
import styles from './About.module.css';

const STATS_ROW1 = [
  {
    icon: <Briefcase size={20} />,
    number: '2+ Years',
    desc: 'Building modern web applications',
  },
  {
    icon: <FolderCheck size={20} />,
    number: '10+',
    desc: 'Completed for real-world use',
  },
];

const STATS_ROW2 = [
  {
    icon: <Layers size={18} />,
    title: 'Modern Stack',
    desc: 'React, TypeScript, Next.js',
  },
  {
    icon: <Zap size={18} />,
    title: 'Performance',
    desc: 'Fast and optimized user experiences',
  },
];

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.body}>
        {/* Left — text */}
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

        {/* Right — stats grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statsRow}>
            {STATS_ROW1.map(({ icon, number, desc }) => (
              <div key={number} className={styles.statCard}>
                <span className={styles.statIcon}>{icon}</span>
                <div className={styles.statNumber}>{number}</div>
                <p className={styles.statDesc}>{desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.statsRow}>
            {STATS_ROW2.map(({ icon, title, desc }) => (
              <div key={title} className={styles.statCard}>
                <div className={styles.statIconWrap}>{icon}</div>
                <div className={styles.statTitle}>{title}</div>
                <p className={styles.statDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
