import { LayoutTemplate, Building2, ShoppingCart, AppWindow, Plug, Zap, Wrench } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import figmaIcon from '../../assets/icons/Figma.svg';
import ServiceCard from '../../components/ServiceCard';
import styles from './Services.module.css';

const ROW1_KEYS = [
	{ icon: <LayoutTemplate size={28} />, key: 'landing' },
	{ icon: <Building2 size={28} />, key: 'corporate' },
	{ icon: <ShoppingCart size={28} />, key: 'ecommerce' },
	{ icon: <AppWindow size={28} />, key: 'webapps' },
];

const ROW2_KEYS = [
	{ icon: <Plug size={28} />, key: 'api' },
	{ icon: <Zap size={28} />, key: 'perf' },
	{ icon: <img src={figmaIcon} alt='Figma' width={28} height={28} />, key: 'ui' },
	{ icon: <Wrench size={28} />, key: 'support' },
];

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
	const { t } = useTranslation();

	const row1 = ROW1_KEYS.map(({ icon, key }) => ({
		icon,
		title: t(`services.${key}.title`),
		description: t(`services.${key}.desc`),
	}));

	const row2 = ROW2_KEYS.map(({ icon, key }) => ({
		icon,
		title: t(`services.${key}.title`),
		description: t(`services.${key}.desc`),
	}));

	const ROW1_LOOP = [...row1, ...row1, ...row1];
	const ROW2_LOOP = [...row2, ...row2, ...row2];

	return (
		<section id='services' className={styles.services}>
			<header className={styles.header}>
				<span className={styles.label}>{t('services.label')}</span>
				<h2 className={styles.title}>{t('services.title')}</h2>
				<p className={styles.desc}>{t('services.desc')}</p>
			</header>

			<div className={styles.grid}>
				{/* Row 1 — left to right */}
				<div className={styles.row}>
					<Swiper
						{...BASE_CONFIG}
						autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
						className={styles.swiper}>
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
						className={styles.swiper}>
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
