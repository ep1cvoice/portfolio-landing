import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './PrivacyPolicyModal.module.css';

function PrivacyPolicyModal({ onClose }) {
	const { t } = useTranslation();

	useEffect(() => {
		function onKey(e) {
			if (e.key === 'Escape') onClose();
		}
		document.addEventListener('keydown', onKey);
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [onClose]);

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<button className={styles.close} onClick={onClose} aria-label='Close'>
					<X size={20} />
				</button>
				<h2 className={styles.title}>{t('privacy.title')}</h2>
				<p className={styles.updated}>{t('privacy.updated')}</p>

				<p className={styles.intro}>{t('privacy.intro')}</p>

				<h3 className={styles.sectionTitle}>{t('privacy.collectTitle')}</h3>
				<p className={styles.text}>{t('privacy.collect')}</p>

				<h3 className={styles.sectionTitle}>{t('privacy.useTitle')}</h3>
				<p className={styles.text}>{t('privacy.use')}</p>

				<h3 className={styles.sectionTitle}>{t('privacy.storageTitle')}</h3>
				<p className={styles.text}>{t('privacy.storage')}</p>

				<h3 className={styles.sectionTitle}>{t('privacy.rightsTitle')}</h3>
				<p className={styles.text}>{t('privacy.rights')}</p>

				<p className={styles.contactNote}>{t('privacy.contact')}</p>
			</div>
		</div>
	);
}

export default PrivacyPolicyModal;
