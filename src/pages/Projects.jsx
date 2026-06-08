import Layout from '../components/layout/Layout'
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
        <h1 className={styles.heading}>{t.projects.heading}</h1>
        <p className={styles.sub}>{t.projects.sub}</p>
        <div className={styles.grid}>
          {localizedProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
