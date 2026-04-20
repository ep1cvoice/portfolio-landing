import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
import { Mail, Phone } from 'lucide-react';
import PrivacyPolicyModal from '../../components/PrivacyPolicyModal/PrivacyPolicyModal';
import githubIcon from '../../assets/icons/GitHub_Invertocat_White.svg';
import linkedinIcon from '../../assets/icons/in_logo.png';
import telegramIcon from '../../assets/icons/telegram.svg';
import styles from './Contact.module.css';

const CONTACT_CARDS = [
	{
		icon: <Mail size={22} color='#ffff' />,
		label: 'Email',
		value: 'pavelkovalchuk0510@gmail.com',
		href: 'mailto:pavelkovalchuk0510@gmail.com',
	},
	{
		icon: <Phone size={22} color='#fff' />,
		labelKey: 'contact.phoneLabel',
		value: '+48 576 893 299',
		href: 'https://wa.me/48576893299',
		external: true,
	},
	{
		icon: <img src={telegramIcon} alt='Telegram' width={22} height={22} />,
		labelKey: 'contact.telegramLabel',
		value: 't.me/paveldev',
		href: 'https://t.me/epicvoicce',
		external: true,
	},
	{
		icon: <img src={githubIcon} alt='GitHub' width={22} height={22} />,
		label: 'GitHub',
		value: 'github.com/ep1cvoice',
		href: 'https://github.com/ep1cvoice',
		external: true,
	},
	{
		icon: <img src={linkedinIcon} alt='LinkedIn' width={22} height={22} style={{ borderRadius: '3px' }} />,
		label: 'LinkedIn',
		value: 'linkedin.com/in/pavel',
		href: 'https://www.linkedin.com/in/pavlokovalchuk0510/',
		external: true,
	},
];

function Contact() {
	const { t } = useTranslation();
	const [state, handleSubmit] = useForm('mlgoaorz');
	const [sectionRef, visible] = useInView(0.1);
	const [bodyRef, bodyVisible] = useInView(0.1);
	const [accepted, setAccepted] = useState(false);
	const [showPrivacy, setShowPrivacy] = useState(false);

	return (
		<section id='contact' ref={sectionRef} className={`${styles.contact} ${visible ? styles.visible : ''}`}>
			<header className={styles.header}>
				<span className={styles.label}>{t('contact.label')}</span>
				<h2 className={styles.title}>{t('contact.title')}</h2>
				<p className={styles.desc}>{t('contact.desc')}</p>
			</header>

			<div ref={bodyRef} className={`${styles.body} ${bodyVisible ? styles.bodyVisible : ''}`}>
				{/* Contact info cards */}
				<div className={styles.info}>
					{CONTACT_CARDS.map(({ icon, label, labelKey, value, href, external }) => (
						<a
							key={value}
							href={href}
							className={styles.infoCard}
							target={external ? '_blank' : undefined}
							rel={external ? 'noopener noreferrer' : undefined}>
							<div className={styles.infoIconWrap}>{icon}</div>
							<div className={styles.infoText}>
								<span className={styles.infoLabel}>{labelKey ? t(labelKey) : label}</span>
								<span className={styles.infoValue}>{value}</span>
							</div>
						</a>
					))}
				</div>

				{/* Contact form */}
				{state.succeeded ? (
					<div className={styles.formSuccess}>
						<span className={styles.formSuccessTitle}>{t('contact.successTitle')}</span>
						<p className={styles.formSuccessDesc}>{t('contact.successDesc')}</p>
					</div>
				) : (
					<form className={styles.form} onSubmit={handleSubmit}>
						<h3 className={styles.formTitle}>{t('contact.formTitle')}</h3>
						<div className={styles.nameRow}>
							<div className={styles.field}>
								<label htmlFor='name' className={styles.fieldLabel}>
									{t('contact.name')}
								</label>
								<input
									id='name'
									name='name'
									type='text'
									placeholder={t('contact.namePlaceholder')}
									className={styles.input}
									required
								/>
							</div>
							<div className={styles.field}>
								<label htmlFor='email' className={styles.fieldLabel}>
									{t('contact.email')}
								</label>
								<input
									id='email'
									name='email'
									type='email'
									placeholder={t('contact.emailPlaceholder')}
									className={styles.input}
									required
								/>
								<ValidationError field='email' errors={state.errors} className={styles.fieldError} />
							</div>
						</div>

						<div className={styles.field}>
							<label htmlFor='subject' className={styles.fieldLabel}>
								{t('contact.subject')}
							</label>
							<input
								id='subject'
								name='subject'
								type='text'
								placeholder={t('contact.subjectPlaceholder')}
								className={styles.input}
							/>
						</div>

						<div className={styles.field}>
							<label htmlFor='message' className={styles.fieldLabel}>
								{t('contact.message')}
							</label>
							<textarea
								id='message'
								name='message'
								placeholder={t('contact.msgPlaceholder')}
								className={styles.textarea}
								rows={5}
								required
							/>
							<ValidationError field='message' errors={state.errors} className={styles.fieldError} />
						</div>

						<div className={styles.acceptRow}>
							<input
								id='acceptPrivacy'
								type='checkbox'
								className={styles.acceptCheckbox}
								checked={accepted}
								onChange={(e) => setAccepted(e.target.checked)}
							/>
							<label htmlFor='acceptPrivacy' className={styles.acceptLabel}>
								{t('contact.acceptPre')}{' '}
								<button type='button' className={styles.acceptLink} onClick={() => setShowPrivacy(true)}>
									{t('contact.acceptPolicy')}
								</button>
							</label>
						</div>

						<button type='submit' className={styles.submit} disabled={state.submitting || !accepted}>
							{state.submitting ? t('contact.sending') : t('contact.send')}
						</button>
					</form>
				)}
			</div>

			{showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}
		</section>
	);
}

export default Contact;
