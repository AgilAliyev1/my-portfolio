import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import { profile } from '../data/profile'
import styles from './Home.module.css'

function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.greeting}>Hi there, I'm</div>
        <h1 className={styles.name}>{profile.name}</h1>
        <h2 className={styles.role}>{profile.title}</h2>
        <p className={styles.bio}>{profile.summary}</p>
        <div className={styles.cta}>
          <Button href="/projects">View Projects</Button>
          <Button variant="outline" href="/resume">View Resume</Button>
          <Button variant="outline" href="/contact">Get in Touch</Button>
        </div>
      </section>
    </Layout>
  )
}

export default Home
