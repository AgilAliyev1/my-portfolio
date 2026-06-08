import { useLanguage } from '../../i18n/LanguageContext'
import styles from './ProjectCard.module.css'

function ProjectCard({ title, description, tags, link, live, featured }) {
  const { t } = useLanguage()

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.links}>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
            {t.common.link}
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer" className={styles.link}>
            {t.common.liveDemo}
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
