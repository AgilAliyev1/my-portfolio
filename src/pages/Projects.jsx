import Layout from '../components/layout/Layout'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

function Projects() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.heading}>Projects</h1>
        <p className={styles.sub}>Things I've built</p>
        <div className={styles.grid}>
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects