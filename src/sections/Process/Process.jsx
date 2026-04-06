import { useRef, useEffect, useState } from 'react';
import { Search, Palette, Code2, Rocket } from 'lucide-react';
import styles from './Process.module.css';

const STEPS = [
  {
    number: '01',
    icon: <Search size={22} />,
    title: 'Discovery',
    desc: 'Understanding your goals, audience, and requirements. We align on scope and define what success looks like.',
  },
  {
    number: '02',
    icon: <Palette size={22} />,
    title: 'Design',
    desc: 'Wireframes, layouts, and visual direction. Every element is crafted to be both beautiful and functional.',
  },
  {
    number: '03',
    icon: <Code2 size={22} />,
    title: 'Develop',
    desc: 'Clean, modern code built with React and best practices. Performant, accessible, and easy to maintain.',
  },
  {
    number: '04',
    icon: <Rocket size={22} />,
    title: 'Deploy',
    desc: 'Thorough testing, optimisation, and launch. Ongoing support to keep everything running smoothly.',
  },
];

function Process() {
  const sectionRef = useRef(null);
  const [phase, setPhase] = useState(0);
  // phase 0 = hidden, 1 = line draws, 2 = beam + nodes fire, 3 = cards in

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // line draws first
          setPhase(1);
          // beam + nodes fire after line draw (~0.9s)
          const t1 = setTimeout(() => setPhase(2), 900);
          // cards slide up after beam finishes (~2.2s total)
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

  /* 3-D tilt + icon rotation on card hover */
  function handleMouseMove(e) {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    // disable transform transition while tracking mouse so tilt is instant
    card.style.transition = 'border-color 0.25s ease, box-shadow 0.25s ease';
    card.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    const icon = card.querySelector(`.${styles.iconWrap}`);
    if (icon) icon.style.transform = 'rotate(15deg) scale(1.15)';
  }

  function handleMouseLeave(e) {
    const card = e.currentTarget;
    // restore smooth return with no delay
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
        <span className={styles.label}>PROCESS</span>
        <h2 className={styles.title}>How I Work</h2>
        <p className={styles.desc}>
          A structured approach that keeps every project on track — from first brief to final launch.
        </p>
      </header>

      {/* ── TIMELINE ── */}
      <div className={styles.timeline}>
        {/* base track */}
        <div className={styles.track} />
        {/* beam that travels along the track */}
        <div className={styles.beam} />

        {/* nodes + cards */}
        {STEPS.map((step, i) => (
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
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.desc}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
