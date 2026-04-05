import { LayoutTemplate, Building2, ShoppingCart, AppWindow, Plug, Zap, Wrench } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import figmaIcon from '../../assets/icons/Figma.svg';
import ServiceCard from '../../components/ServiceCard';
import styles from './Services.module.css';

const ROW1 = [
  {
    icon: <LayoutTemplate size={28} />,
    title: 'Landing Pages',
    description: 'Conversion-focused landing pages designed to turn visitors into customers.',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Corporate Websites',
    description: 'Scalable business websites with clear structure and strong online presence.',
  },
  {
    icon: <ShoppingCart size={28} />,
    title: 'E-commerce',
    description: 'Online stores with smooth shopping experience, payments, and integrations.',
  },
  {
    icon: <AppWindow size={28} />,
    title: 'Web Applications',
    description: 'Complex web apps like dashboards, CRM systems, and SaaS platforms.',
  },
];

const ROW2 = [
  {
    icon: <Plug size={28} />,
    title: 'API Integration',
    description: 'Seamless connection with backend services, authentication, and data flow.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Performance Optimization',
    description: 'Faster websites with better SEO and smooth user experience.',
  },
  {
    icon: <img src={figmaIcon} alt="Figma" width={28} height={28} />,
    title: 'UI Development',
    description: 'Clean and responsive interfaces built from Figma with attention to detail.',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Support',
    description: 'Continuous updates, improvements, and support for your projects.',
  },
];

// Duplicate cards so the loop fills more than a full viewport width
const ROW1_LOOP = [...ROW1, ...ROW1, ...ROW1];
const ROW2_LOOP = [...ROW2, ...ROW2, ...ROW2];

const BASE_CONFIG = {
  modules: [Autoplay, FreeMode],
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: true,
  speed: 8000,
  freeMode: { enabled: true, momentum: false },
  grabCursor: true,
  allowTouchMove: true,
};

function Services() {
  return (
    <section id="services" className={styles.services}>
      <header className={styles.header}>
        <span className={styles.label}>SERVICES</span>
        <h2 className={styles.title}>What I Can Do</h2>
        <p className={styles.desc}>Helping businesses launch and improve their web presence.</p>
      </header>

      <div className={styles.grid}>
        {/* Row 1 — left to right */}
        <div className={styles.row}>
          <Swiper
            {...BASE_CONFIG}
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
            className={styles.swiper}
          >
            {ROW1_LOOP.map((card, i) => (
              <SwiperSlide key={i} className={styles.slide}>
                <ServiceCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Row 2 — right to left */}
        <div className={styles.row}>
          <Swiper
            {...BASE_CONFIG}
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
            className={styles.swiper}
          >
            {ROW2_LOOP.map((card, i) => (
              <SwiperSlide key={i} className={styles.slide}>
                <ServiceCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Services;
