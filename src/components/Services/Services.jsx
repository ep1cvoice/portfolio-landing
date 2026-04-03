import {
  LayoutTemplate,
  Building2,
  ShoppingCart,
  AppWindow,
  Plug,
  Zap,
  Wrench,
} from 'lucide-react';
import figmaIcon from '../../assets/icons/Figma.svg';
import ServiceCard from '../ServiceCard';
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
    highlighted: true,
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
    title: 'Maintenance & Support',
    description: 'Continuous updates, improvements, and support for your projects.',
  },
];

function Services() {
  return (
    <section id="services" className={styles.services}>
      <header className={styles.header}>
        <span className={styles.label}>SERVICES</span>
        <h2 className={styles.title}>What I Can Do</h2>
        <p className={styles.desc}>
          Helping businesses launch and improve their web presence.
        </p>
      </header>

      <div className={styles.grid}>
        <div className={styles.row}>
          {ROW1.map(({ icon, title, description, highlighted }) => (
            <ServiceCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              highlighted={highlighted}
            />
          ))}
        </div>
        <div className={styles.row}>
          {ROW2.map(({ icon, title, description }) => (
            <ServiceCard key={title} icon={icon} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
