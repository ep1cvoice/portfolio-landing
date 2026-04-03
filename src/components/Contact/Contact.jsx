import { useState } from 'react';
import { Mail } from 'lucide-react';
import githubIcon from '../../assets/icons/GitHub_Invertocat_White.svg';
import linkedinIcon from '../../assets/icons/in_logo.png';
import styles from './Contact.module.css';

const CONTACT_CARDS = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'pavel.dev@email.com',
    href: 'mailto:pavel.dev@email.com',
  },
  {
    icon: <img src={githubIcon} alt="GitHub" width={22} height={22} />,
    label: 'GitHub',
    value: 'github.com/pavel',
    href: '#',
  },
  {
    icon: <img src={linkedinIcon} alt="LinkedIn" width={22} height={22} style={{ borderRadius: '3px' }} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pavel',
    href: '#',
  },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission placeholder
  };

  return (
    <section id="contact" className={styles.contact}>
      <header className={styles.header}>
        <span className={styles.label}>CONTACT</span>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.desc}>Have a project in mind or want to collaborate? Let's talk!</p>
      </header>

      <div className={styles.body}>
        {/* Contact info cards */}
        <div className={styles.info}>
          {CONTACT_CARDS.map(({ icon, label, value, href }) => (
            <a key={label} href={href} className={styles.infoCard}>
              <div className={styles.infoIconWrap}>{icon}</div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>{label}</span>
                <span className={styles.infoValue}>{value}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Contact form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.nameRow}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.fieldLabel}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className={styles.input}
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.fieldLabel}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className={styles.input}
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="subject" className={styles.fieldLabel}>Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Project inquiry"
              className={styles.input}
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.fieldLabel}>Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              className={styles.textarea}
              rows={5}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.submit}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
