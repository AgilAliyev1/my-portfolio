import { useLanguage } from '../../i18n/LanguageContext'
import styles from './CertificateCard.module.css'

function CertificateCard({
  title,
  issuer,
  date,
  categoryLabel,
  url,
}) {
  const { t } = useLanguage()

  const isPdf = url?.endsWith('.pdf')
  const isImage = /\.(png|jpg|jpeg|webp)$/i.test(url ?? '')

  const linkLabel = isPdf
    ? t.common.viewPdf
    : isImage
    ? t.common.viewCertificate
    : t.common.view

  return (
    <article className={styles.card}>
      <span className={styles.category}>
        {categoryLabel}
      </span>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.issuer}>{issuer}</p>

      <div className={styles.footer}>
        <span className={styles.date}>
          {date}
        </span>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {linkLabel}
          </a>
        )}
      </div>
    </article>
  )
}

export default CertificateCard
