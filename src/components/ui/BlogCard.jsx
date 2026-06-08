import { useLanguage } from '../../i18n/LanguageContext'
import styles from './BlogCard.module.css'

function BlogCard({ title, excerpt, date, readTime, tags }) {
  const { t } = useLanguage()

  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.date}>{date}</span>
        <span className={styles.readTime}>{readTime} {t.common.read}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
      <div className={styles.tags}>
        {tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </article>
  )
}

export default BlogCard
