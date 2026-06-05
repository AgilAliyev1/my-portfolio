import styles from './CertificateCard.module.css'

function CertificateCard({ title, issuer, date, category, url }) {
  const isPdf = url?.endsWith('.pdf')
  const isImage = /\.(png|jpe?g|webp)$/i.test(url ?? '')
  const linkLabel = isPdf ? 'View PDF →' : isImage ? 'View Certificate →' : 'View →'

  return (
    <article className={styles.card}>
      <span className={styles.category}>{category}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.issuer}>{issuer}</p>
      <div className={styles.footer}>
        <span className={styles.date}>{date}</span>
        {url && (
          <a href={url} target="_blank" rel="noreferrer" className={styles.link}>
            {linkLabel}
          </a>
        )}
      </div>
    </article>
  )
}

export default CertificateCard
