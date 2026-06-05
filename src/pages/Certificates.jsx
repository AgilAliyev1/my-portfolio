import { useState } from 'react'
import Layout from '../components/layout/Layout'
import CertificateCard from '../components/ui/CertificateCard'
import { certificates } from '../data/certificates'
import styles from './Certificates.module.css'

const ALL = 'All'

function Certificates() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(ALL)

  const categories = [ALL, ...new Set(certificates.map(c => c.category))]

  const filtered = certificates.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
                          c.issuer.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === ALL || c.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.heading}>Certificates</h1>
        <p className={styles.sub}>Courses and credentials I've earned</p>

        <div className={styles.controls}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cat === category ? `${styles.filter} ${styles.active}` : styles.filter}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>No certificates found.</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map(cert => (
              <CertificateCard key={cert.id} {...cert} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Certificates
