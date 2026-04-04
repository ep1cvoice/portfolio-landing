import { ChevronDown } from 'lucide-react';
import githubIcon from '../../assets/icons/GitHub_Invertocat_White.svg';
import linkedinIcon from '../../assets/icons/in_logo.png';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        {/* Left */}
        <div className={styles.left}>
          <span className={styles.subtitle}>Welcome to my portfolio!</span>
          <h1 className={styles.heading}>Hello, my name's Pavel.</h1>
          <p className={styles.description}>
            I'm a frontend developer specializing in React. Building modern,
            responsive web applications and landing pages.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className={styles.btnPrimary}>View Projects</a>
            <a href="#contact" className={styles.btnOutline}>Contact Me</a>
          </div>
        </div>

        {/* Right — portrait */}
        <div className={styles.right}>
          <div className={styles.glow} />
          <div className={styles.portraitFrame}>
            <div className={styles.portrait} />
          </div>
          <div className={`${styles.deco} ${styles.decoC1}`} />
          <div className={`${styles.deco} ${styles.decoC2}`} />
          <div className={`${styles.deco} ${styles.decoSq}`} />
          <div className={`${styles.deco} ${styles.decoDot}`} />
        </div>

        {/* Social links */}
        <div className={styles.social}>
          <a href="#" aria-label="GitHub" className={styles.socialIcon}>
            <img src={githubIcon} alt="GitHub" width={22} height={22} />
          </a>
          <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
            <img src={linkedinIcon} alt="LinkedIn" width={22} height={22} className={styles.linkedinIcon} />
          </a>
          <div className={styles.socialLine} />
        </div>
      </div>

      <a href="#about" className={styles.scrollDown}>
        <span className={styles.scrollDownLabel}>Scroll down</span>
        <ChevronDown size={16} className={styles.arrow} />
      </a>
    </section>
  );
}

export default Hero;
