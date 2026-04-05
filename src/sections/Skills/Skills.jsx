import styles from './Skills.module.css';

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    accent: false,
    chips: [
      { text: 'React', active: true },
      { text: 'Next.js', active: true },
      { text: 'TypeScript', active: true },
      { text: 'JavaScript (ES6+)' },
      { text: 'Tailwind CSS' },
      { text: 'Sass' },
      { text: 'CSS Modules' },
      { text: 'Bootstrap' },
    ],
  },
  {
    id: 'state',
    label: 'STATE MANAGEMENT',
    accent: false,
    chips: [
      { text: 'Redux' },
      { text: 'Context API' },
    ],
  },
  {
    id: 'api',
    label: 'API & DATA',
    accent: true,
    chips: [
      { text: 'REST APIs' },
      { text: 'React Query' },
      { text: 'Axios' },
      { text: 'JSON' },
      { text: 'Authentication (JWT)' },
    ],
  },
  {
    id: 'tools',
    label: 'TOOLS & WORKFLOW',
    accent: true,
    chips: [
      { text: 'Git' },
      { text: 'GitHub' },
      { text: 'Vite' },
      { text: 'npm' },
      { text: 'VS Code' },
      { text: 'Figma' },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    accent: true,
    chips: [
      { text: 'Node.js' },
      { text: 'Express' },
      { text: 'Working with APIs' },
    ],
  },
];

function Chip({ text, active }) {
  return (
    <span className={`${styles.chip} ${active ? styles.chipActive : ''}`}>
      {text}
    </span>
  );
}

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Tech Stack</h2>
      <div className={styles.accentLine} />
      <p className={styles.subtitle}>
        Technologies I use to build fast and scalable web applications.
      </p>

      <div className={styles.grid}>
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div key={cat.id}>
            {idx > 0 && <div className={styles.divider} />}
            <div className={styles.category}>
              <span className={`${styles.categoryLabel} ${cat.accent ? styles.labelAccent : ''}`}>
                {cat.label}
              </span>
              <div className={styles.chips}>
                {cat.chips.map((chip) => (
                  <Chip key={chip.text} text={chip.text} active={chip.active} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
