import Layout from '../components/layout/Layout'
import FadeIn from '../components/ui/FadeIn'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './Projects.module.css'

function Projects() {
  const { t } = useLanguage()

  const localizedProjects = projects.map((project, index) => ({
    ...project,
    ...t.projectsData[index],
  }))

  return (
    <Layout>
      <div className={styles.page}>
        <FadeIn>
          <h1 className={styles.heading}>{t.projects.heading}</h1>
          <p className={styles.sub}>{t.projects.sub}</p>
        </FadeIn>
        <div className={styles.grid}>
          {localizedProjects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 + index * 0.08}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
