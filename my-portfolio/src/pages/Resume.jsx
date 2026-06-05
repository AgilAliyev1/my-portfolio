import Layout from '../components/layout/Layout'
import styles from './Resume.module.css'

const RESUME_URL = '/resume.pdf'

function Resume() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.heading}>Resume</h1>

        <div className={styles.viewerWrapper}>
          <iframe
            src={RESUME_URL}
            title="Agil Aliyev Resume"
            className={styles.viewer}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Resume
