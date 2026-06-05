import Layout from '../components/layout/Layout'
import styles from './Resume.module.css'

const isProd = window.location.hostname !== 'localhost'
const RESUME_URL = isProd ? '/resume.pdf' : '/resume.pdf'

const experience = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Company Name',
    period: '2023 — Present',
    description: 'Built and maintained React applications. Collaborated with design and backend teams.',
  },
]

const education = [
  {
    id: 1,
    degree: 'Computer Science',
    school: 'ADA University',
    period: '2019 — 2023',
    description: 'Focused on software engineering and web development.',
  },
]

function Resume() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Resume</h1>
          <div className={styles.buttons}>
            
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.btnPrimary}
            >
              View PDF ↗
            </a>
            
              href={RESUME_URL}
              download
              className={styles.btnOutline}
            >
              Download ↓
            </a>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Experience</h2>
          <div className={styles.timeline}>
            {experience.map(item => (
              <div key={item.id} className={styles.timelineItem}>
                <div className={styles.dot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3 className={styles.role}>{item.role}</h3>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.desc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Education</h2>
          <div className={styles.timeline}>
            {education.map(item => (
              <div key={item.id} className={styles.timelineItem}>
                <div className={styles.dot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3 className={styles.role}>{item.degree}</h3>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  <p className={styles.company}>{item.school}</p>
                  <p className={styles.desc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Resume