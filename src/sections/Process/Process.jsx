import { useRef, useEffect, useState } from 'react';
import { Search, Palette, Code2, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Process.module.css';

const STEPS_META = [
  { number: '01', icon: <Search size={22} />,  stepKey: 'step1' },
  { number: '02', icon: <Palette size={22} />, stepKey: 'step2' },
  { number: '03', icon: <Code2 size={22} />,   stepKey: 'step3' },
  { number: '04', icon: <Rocket size={22} />,  stepKey: 'step4' },
];

function Process() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase(1);
          const t1 = setTimeout(() => setPhase(2), 900);
          const t2 = setTimeout(() => setPhase(3), 2200);
          observer.disconnect();
          return () => { clearTimeout(t1); clearTimeout(t2); };
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    card.style.transition = 'border-color 0.25s ease, box-shadow 0.25s ease';
    card.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    const icon = card.querySelector(`.${styles.iconWrap}`);
    if (icon) icon.style.transform = 'rotate(15deg) scale(1.15)';
  }

  function handleMouseLeave(e) {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.25s ease, box-shadow 0.25s ease';
    card.style.transform = 'translateY(0)';
    const icon = card.querySelector(`.${styles.iconWrap}`);
    if (icon) icon.style.transform = '';
  }

  return (
    <section
      id="process"
      ref={sectionRef}
      className={`${styles.process} ${phase >= 1 ? styles.phase1 : ''} ${phase >= 2 ? styles.phase2 : ''} ${phase >= 3 ? styles.phase3 : ''}`}
    >
      <header className={styles.header}>
        <span className={styles.label}>{t('process.label')}</span>
        <h2 className={styles.title}>{t('process.title')}</h2>
        <p className={styles.desc}>{t('process.desc')}</p>
      </header>

      <div className={styles.timeline}>
        <div className={styles.track} />
        <div className={styles.beam} />

        {STEPS_META.map((step, i) => (
          <div key={step.number} className={styles.step} style={{ '--i': i }}>
            <div className={styles.node}>
              <div className={styles.nodeRing} />
              <div className={styles.nodeDot} />
            </div>

            <article
              className={styles.card}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.cardTop}>
                <span className={styles.stepNum}>{step.number}</span>
                <div className={styles.iconWrap}>{step.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{t(`process.${step.stepKey}.title`)}</h3>
              <p className={styles.cardDesc}>{t(`process.${step.stepKey}.desc`)}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
