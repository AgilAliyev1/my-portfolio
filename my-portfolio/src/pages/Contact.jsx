import { useState } from 'react'
import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import { profile } from '../data/profile'
import styles from './Contact.module.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Thanks ${form.name}! I'll get back to you soon.`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.heading}>Contact</h1>
        <p className={styles.sub}>Have a question or want to work together? Reach out anytime.</p>

        <div className={styles.info}>
          <div className={styles.infoGroup}>
            <span className={styles.infoLabel}>Email</span>
            {profile.emails.map(({ address, label }) => (
              <a key={address} href={`mailto:${address}`} className={styles.infoRow}>
                <span>{address}</span>
                <span className={styles.infoTag}>{label}</span>
              </a>
            ))}
          </div>

          <div className={styles.infoGroup}>
            <span className={styles.infoLabel}>Phone</span>
            {profile.phones.map(({ number, label, href }) => (
              <a
                key={number}
                href={href}
                target={href.startsWith('https://wa.me') ? '_blank' : undefined}
                rel={href.startsWith('https://wa.me') ? 'noreferrer' : undefined}
                className={styles.infoRow}
              >
                <span>{number}</span>
                <span className={styles.infoTag}>{label}</span>
              </a>
            ))}
          </div>

          <div className={styles.infoGroup}>
            <span className={styles.infoLabel}>Profiles</span>
            {profile.profiles.map(({ name, url, handle }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className={styles.infoRow}
              >
                <span>{handle}</span>
                <span className={styles.infoTag}>{name}</span>
              </a>
            ))}
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Location</span>
            <span>{profile.location}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={6}
              required
            />
          </div>

          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
