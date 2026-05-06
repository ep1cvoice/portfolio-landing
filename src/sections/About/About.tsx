import { Briefcase, FolderCheck, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
import styles from './About.module.css';

function About() {
  const { t } = useTranslation();
  const [sectionRef, visible]    = useInView(0.15);
  const [cardsRef, cardsVisible] = useInView<HTMLDivElement>(0.2);

  return (
    <section id='about' ref={sectionRef} className={`${styles.about} ${visible ? styles.visible : ''}`}>
      <div className={styles.body}>
        {/* Left */}
        <div className={styles.left}>
          <h2 className={styles.title}>{t('about.title')}</h2>
          <div className={styles.accentLine} />
          <p className={styles.text}>
            {t('about.p1')}
            <br /><br />
            {t('about.p2')}
            <br /><br />
            {t('about.p3')}
          </p>
        </div>

        {/* Right — 3 glass cards: 1 wide + 2 below */}
        <div ref={cardsRef} className={`${styles.cardsGrid} ${cardsVisible ? styles.cardsVisible : ''}`}>

          {/* Available for Hire */}
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={`${styles.statIconWrap} ${styles.iconAvailable}`}>
                <Briefcase size={16} />
              </div>
              <div className={`${styles.statTitle} ${styles.titleAvailable}`}>
                <span className={styles.availableDot} />
                {t('about.facts.availability')}
              </div>
            </div>
            <p className={styles.statDesc}>{t('about.facts.availabilitySub')}</p>
          </div>

          {/* Projects */}
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.statIconWrap}>
                <FolderCheck size={16} />
              </div>
              <div className={styles.statTitle}>{t('about.facts.projects')}</div>
            </div>
            <p className={styles.statDesc}>{t('about.facts.projectsSub')}</p>
          </div>

          {/* Stack */}
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.statIconWrap}>
                <Code2 size={16} />
              </div>
              <div className={styles.statTitle}>{t('about.facts.stack')}</div>
            </div>
            <p className={styles.statDesc}>{t('about.facts.stackSub')}</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
