import Layout from '../components/layout/Layout'
import BlogCard from '../components/ui/BlogCard'
import { blogPosts } from '../data/blogPosts'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './Blog.module.css'

function Blog() {
  const { t } = useLanguage()

  const localizedPosts = blogPosts.map((post, index) => ({
    ...post,
    ...t.blogPostsData[index],
  }))

  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.heading}>{t.blog.heading}</h1>
        <p className={styles.sub}>{t.blog.sub}</p>
        <div className={styles.grid}>
          {localizedPosts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
