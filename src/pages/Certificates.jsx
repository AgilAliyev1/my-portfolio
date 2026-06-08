import { useState } from 'react'
import Layout from '../components/layout/Layout'
import CertificateCard from '../components/ui/CertificateCard'
import FadeIn from '../components/ui/FadeIn'
import { certificates } from '../data/certificates'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './Certificates.module.css'

function Certificates() {
  const { t } = useLanguage()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const localizedCertificates = certificates.map((cert, index) => ({
    ...cert,
    ...t.certificatesData[index],
    categoryLabel: t.categories[cert.category] ?? cert.category,
  }))

  const categories = [
    'all',
    ...new Set(certificates.map(c => c.category)),
  ]

  const filtered = localizedCertificates.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
                          c.issuer.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'all' || c.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <Layout>
      <div className={styles.page}>
        <FadeIn>
          <h1 className={styles.heading}>{t.certificates.heading}</h1>
          <p className={styles.sub}>{t.certificates.sub}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className={styles.controls}>
            <input
              className={styles.search}
              type="text"
              placeholder={t.certificates.searchPlaceholder}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className={styles.filters}>
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={cat === category ? `${styles.filter} ${styles.active}` : styles.filter}
                >
                  {cat === 'all' ? t.common.all : t.categories[cat]}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {filtered.length === 0 ? (
          <FadeIn delay={0.15}>
            <p className={styles.empty}>{t.certificates.empty}</p>
          </FadeIn>
        ) : (
          <div className={styles.grid}>
            {filtered.map((cert, index) => (
              <FadeIn key={cert.id} delay={0.15 + index * 0.06}>
                <CertificateCard {...cert} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Certificates
