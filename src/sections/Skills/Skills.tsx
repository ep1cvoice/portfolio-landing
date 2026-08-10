import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
import styles from './Skills.module.css';

interface Chip {
  text: string;
  active?: boolean;
}

interface SkillCategory {
  id: string;
  label: string;
  accent: boolean;
  chips: Chip[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    accent: false,
    chips: [
      { text: 'React', active: true },
      { text: 'Next.js', active: true },
      { text: 'TypeScript', active: true },
      { text: 'JavaScript (ES6+)' },
      { text: 'HTML5' },
      { text: 'JSX / TSX' },
      { text: 'CSS3 (Flexbox, Grid)' },
      { text: 'SASS/SCSS' },
      { text: 'CSS Modules' },
      { text: 'BEM' },
      { text: 'Tailwind' },
      { text: 'Responsive UI' },
      { text: 'Accessibility (a11y)' },
    ],
  },
  {
    id: 'mobile',
    label: 'MOBILE',
    accent: false,
    chips: [
      { text: 'React Native', active: true },
      { text: 'Expo', active: true },
      { text: 'Expo Router' },
      { text: 'AsyncStorage' },
    ],
  },
  {
    id: 'state',
    label: 'STATE MANAGEMENT',
    accent: false,
    chips: [
      { text: 'Context API' },
      { text: 'Redux' },
      { text: 'TanStack Query' },
    ],
  },
  {
    id: 'api',
    label: 'API & APPLICATION LOGIC',
    accent: true,
    chips: [
      { text: 'REST API (CRUD, auth flows)' },
      { text: 'Auth (JWT / sessions)' },
      { text: 'Zod + React Hook Form' },
      { text: 'Error handling & loading UX' },
    ],
  },
  {
    id: 'tools',
    label: 'TOOLS & WORKFLOW',
    accent: true,
    chips: [
      { text: 'Git / GitHub' },
      { text: 'Vite' },
      { text: 'Vitest' },
      { text: 'ESLint / Prettier' },
      { text: 'CI/CD (Vercel)' },
      { text: 'Docker' },
      { text: 'VS Code' },
      { text: 'Chrome DevTools' },
      { text: 'Kanban' },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND / FULLSTACK',
    accent: true,
    chips: [
      { text: 'Node.js' },
      { text: 'Prisma', active: true },
      { text: 'PostgreSQL', active: true },
      { text: 'Auth.js', active: true },
      { text: 'Supabase (auth, DB, RLS)', active: true },
    ],
  },
  {
    id: 'design',
    label: 'DESIGN',
    accent: true,
    chips: [
      { text: 'Figma' },
      { text: 'Pencil.dev' },
    ],
  },
  {
    id: 'wordpress',
    label: 'CMS & PAGE BUILDERS',
    accent: true,
    chips: [
      { text: 'WordPress' },
      { text: 'Elementor' },
      { text: 'WooCommerce' },
    ],
  },
];

function ChipTag({ text, active }: Chip) {
  return (
    <span className={`${styles.chip} ${active ? styles.chipActive : ''}`}>
      {text}
    </span>
  );
}

function Skills() {
  const { t } = useTranslation();
  const [sectionRef, visible] = useInView(0.1);
  const [gridRef, gridVisible] = useInView<HTMLDivElement>(0.1);

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
                  <ChipTag key={chip.text} text={chip.text} active={chip.active} />
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
