import Layout from '../components/layout/Layout'
import styles from './Resume.module.css'

const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`

function Resume() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Resume</h1>

          <div className={styles.buttons}>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.btnPrimary}
            >
              View PDF ↗
            </a>

            <a
              href={RESUME_URL}
              download="Agil-Aliyev-Resume.pdf"
              className={styles.btnOutline}
            >
              Download ↓
            </a>
          </div>
        </div>

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
