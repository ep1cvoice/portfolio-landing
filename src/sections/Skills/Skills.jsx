import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
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
      { text: 'CSS Architecture (BEM, modular CSS)' },
      { text: 'SASS (SCSS)' },
      { text: 'Tailwind' },
    ],
  },
  {
    id: 'state',
    label: 'STATE MANAGEMENT',
    accent: false,
    chips: [
      { text: 'Context API' },
      { text: 'Redux' }
    ],
  },
  {
    id: 'api',
    label: 'API & DATA',
    accent: true,
    chips: [
      { text: 'REST API integration' },
      { text: 'Data fetching & state handling' },
      { text: 'TanStack Query' },
      { text: 'Authentication & Authorization (JWT)' },
      { text: 'Error handling' },
    ],
  },
  {
    id: 'tools',
    label: 'TOOLS & WORKFLOW',
    accent: true,
    chips: [
      { text: 'Git' },
      { text: 'GitHub' },
      { text: 'VS Code' },
      { text: 'Vite' },
      { text: 'CI/CD (Vercel)' },
      { text: 'npm' },
      { text: 'ESLint' },
      { text: 'Prettier' },
      { text: 'Chrome DevTools' },
      { text: 'Figma' },
      { text: 'Kanban' },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    accent: true,
    chips: [
      { text: 'Node.js' },
      { text: `Supabase` },
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
  const { t } = useTranslation();
  const [sectionRef, visible] = useInView(0.1);
  const [gridRef, gridVisible] = useInView(0.1);

  return (
    <section id="skills" ref={sectionRef} className={`${styles.skills} ${visible ? styles.visible : ''}`}>
      <h2 className={styles.title}>{t('skills.title')}</h2>
      <div className={styles.accentLine} />
      <p className={styles.subtitle}>{t('skills.subtitle')}</p>

      <div ref={gridRef} className={`${styles.grid} ${gridVisible ? styles.gridVisible : ''}`}>
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
