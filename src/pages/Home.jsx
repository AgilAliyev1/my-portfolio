import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import FadeIn from '../components/ui/FadeIn'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './Home.module.css'

function Home() {
  const { t } = useLanguage()

  return (
    <Layout>
      <section className={styles.hero}>
        <FadeIn>
          <div className={styles.greeting}>{t.home.greeting}</div>
          <h1 className={styles.name}>{profile.name}</h1>
          <h2 className={styles.role}>{t.profile.title}</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className={styles.bio}>{t.profile.summary}</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className={styles.cta}>
            <Button href="/projects">{t.home.viewProjects}</Button>
            <Button variant="outline" href="/contact">{t.home.getInTouch}</Button>
          </div>
        </FadeIn>
      </section>
    </Layout>
  )
}

export default Home
