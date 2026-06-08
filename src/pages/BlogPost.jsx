import { Link, useParams } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import FadeIn from '../components/ui/FadeIn'
import { blogPosts } from '../data/blogPosts'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './BlogPost.module.css'

function BlogPost() {
  const { id } = useParams()
  const { t } = useLanguage()
  const index = blogPosts.findIndex(post => String(post.id) === id)

  if (index === -1) {
    return (
      <Layout>
        <div className={styles.page}>
          <p className={styles.notFound}>{t.blog.notFound}</p>
          <Link to="/blog" className={styles.back}>{t.blog.back}</Link>
        </div>
      </Layout>
    )
  }

  const post = blogPosts[index]
  const localized = t.blogPostsData[index]

  return (
    <Layout>
      <article className={styles.page}>
        <FadeIn>
          <Link to="/blog" className={styles.back}>{t.blog.back}</Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className={styles.meta}>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.readTime}>{localized.readTime} {t.common.read}</span>
          </div>
          <h1 className={styles.heading}>{localized.title}</h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className={styles.tags}>
            {post.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </FadeIn>

        <div className={styles.content}>
          {localized.content.map((paragraph, i) => (
            <FadeIn key={i} delay={0.15 + i * 0.05}>
              <p className={styles.paragraph}>{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </article>
    </Layout>
  )
}

export default BlogPost
