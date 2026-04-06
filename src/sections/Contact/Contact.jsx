import { useForm, ValidationError } from '@formspree/react';
import { Mail } from 'lucide-react';
import githubIcon from '../../assets/icons/GitHub_Invertocat_White.svg';
import linkedinIcon from '../../assets/icons/in_logo.png';
import styles from './Contact.module.css';

const CONTACT_CARDS = [
	{
		icon: <Mail size={22} color='#ffff' />,
		label: 'Email',
		value: 'pavelkovalchuk0510@gmail.com',
		href: 'mailto:pavelkovalchuk0510@gmail.com',
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
	},
];

function Contact() {
	const [state, handleSubmit] = useForm('mlgoaorz');

	return (
		<section id='contact' className={styles.contact}>
			<header className={styles.header}>
				<span className={styles.label}>CONTACT</span>
				<h2 className={styles.title}>Get In Touch</h2>
				<p className={styles.desc}>Have a project in mind or want to collaborate? Let's talk!</p>
			</header>

			<div className={styles.body}>
				{/* Contact info cards */}
				<div className={styles.info}>
					{CONTACT_CARDS.map(({ icon, label, value, href, external }) => (
						<a
							key={label}
							href={href}
							className={styles.infoCard}
							target={external ? '_blank' : undefined}
							rel={external ? 'noopener noreferrer' : undefined}>
							<div className={styles.infoIconWrap}>{icon}</div>
							<div className={styles.infoText}>
								<span className={styles.infoLabel}>{label}</span>
								<span className={styles.infoValue}>{value}</span>
							</div>
						</a>
					))}
				</div>

				{/* Contact form */}
				{state.succeeded ? (
					<div className={styles.formSuccess}>
						<span className={styles.formSuccessTitle}>Message sent!</span>
						<p className={styles.formSuccessDesc}>Thanks for reaching out — I'll get back to you soon.</p>
					</div>
				) : (
					<form className={styles.form} onSubmit={handleSubmit}>
						<div className={styles.nameRow}>
							<div className={styles.field}>
								<label htmlFor='name' className={styles.fieldLabel}>Name</label>
								<input id='name' name='name' type='text' placeholder='Your name' className={styles.input} required />
							</div>
							<div className={styles.field}>
								<label htmlFor='email' className={styles.fieldLabel}>Email</label>
								<input id='email' name='email' type='email' placeholder='your@email.com' className={styles.input} required />
								<ValidationError field='email' errors={state.errors} className={styles.fieldError} />
							</div>
						</div>

						<div className={styles.field}>
							<label htmlFor='subject' className={styles.fieldLabel}>Subject</label>
							<input id='subject' name='subject' type='text' placeholder='Project inquiry' className={styles.input} />
						</div>

						<div className={styles.field}>
							<label htmlFor='message' className={styles.fieldLabel}>Message</label>
							<textarea id='message' name='message' placeholder='Tell me about your project...' className={styles.textarea} rows={5} required />
							<ValidationError field='message' errors={state.errors} className={styles.fieldError} />
						</div>

						<button type='submit' className={styles.submit} disabled={state.submitting}>
							{state.submitting ? 'Sending…' : 'Send Message'}
						</button>
					</form>
				)}
			</div>
		</section>
	);
}

export default Contact;
