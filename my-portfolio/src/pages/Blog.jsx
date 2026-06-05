import Layout from '../components/layout/Layout'
import BlogCard from '../components/ui/BlogCard'
import { blogPosts } from '../data/blogPosts'
import styles from './Blog.module.css'

function Blog() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.heading}>Blog</h1>
        <p className={styles.sub}>Thoughts, notes and updates</p>
        <div className={styles.grid}>
          {blogPosts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
