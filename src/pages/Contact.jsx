import { useState } from 'react'
import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './Contact.module.css'

function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(t.contact.thanks(form.name))
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.heading}>{t.contact.heading}</h1>
        <p className={styles.sub}>{t.contact.sub}</p>

        <div className={styles.info}>
          <div className={styles.infoGroup}>
            <span className={styles.infoLabel}>{t.contact.email}</span>
            {profile.emails.map(({ address, label }) => (
              <a key={address} href={`mailto:${address}`} className={styles.infoRow}>
                <span>{address}</span>
                <span className={styles.infoTag}>{t.profile.emailLabels[label]}</span>
              </a>
            ))}
          </div>

          <div className={styles.infoGroup}>
            <span className={styles.infoLabel}>{t.contact.phone}</span>
            {profile.phones.map(({ number, label, href }) => (
              <a
                key={number}
                href={href}
                target={href.startsWith('https://wa.me') ? '_blank' : undefined}
                rel={href.startsWith('https://wa.me') ? 'noreferrer' : undefined}
                className={styles.infoRow}
              >
                <span>{number}</span>
                <span className={styles.infoTag}>{t.profile.phoneLabels[label]}</span>
              </a>
            ))}
          </div>

          <div className={styles.infoGroup}>
            <span className={styles.infoLabel}>{t.contact.profiles}</span>
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
            <span className={styles.infoLabel}>{t.contact.location}</span>
            <span>{t.profile.location}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>{t.contact.name}</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t.contact.namePlaceholder}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>{t.contact.email}</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t.contact.emailPlaceholder}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>{t.contact.message}</label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t.contact.messagePlaceholder}
              rows={6}
              required
            />
          </div>

          <Button type="submit">{t.contact.send}</Button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
