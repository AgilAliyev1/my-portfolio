import Layout from '../components/layout/Layout'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { volunteer } from '../data/volunteer'
import { certificates } from '../data/certificates'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './About.module.css'

function About() {
  const { t } = useLanguage()

  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.heading}>{t.about.heading}</h1>

        <section className={styles.section}>
          <p className={styles.bio}>{t.profile.summary}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>{t.about.education}</h2>
          {education.map((item, index) => {
            const localized = t.education[index]
            return (
              <div key={item.id} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <div>
                    <h3 className={styles.entryTitle}>{localized.degree}</h3>
                    <p className={styles.entryOrg}>{localized.school} · {localized.location}</p>
                  </div>
                  <span className={styles.period}>{localized.period}</span>
                </div>
                <ul className={styles.list}>
                  {localized.coursework.map(course => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>{t.about.workExperience}</h2>
          <div className={styles.timeline}>
            {experience.map((item, index) => {
              const localized = t.experience[index]
              return (
                <div key={item.id} className={styles.timelineItem}>
                  <div className={styles.dot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.entryHeader}>
                      <div>
                        <h3 className={styles.entryTitle}>{localized.role}</h3>
                        <p className={styles.entryOrg}>{localized.company}</p>
                      </div>
                      <span className={styles.period}>{localized.period}</span>
                    </div>
                    <ul className={styles.list}>
                      {localized.points.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>{t.about.volunteerWork}</h2>
          <div className={styles.timeline}>
            {volunteer.map((item, index) => {
              const localized = t.volunteer[index]
              return (
                <div key={item.id} className={styles.timelineItem}>
                  <div className={styles.dot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.entryHeader}>
                      <div>
                        <h3 className={styles.entryTitle}>{localized.role}</h3>
                        <p className={styles.entryOrg}>{localized.organization}</p>
                      </div>
                      <span className={styles.period}>{localized.period}</span>
                    </div>
                    <ul className={styles.list}>
                      {localized.points.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>{t.about.certifications}</h2>
          <ul className={styles.certList}>
            {certificates.map((cert, index) => {
              const localized = t.certificatesData[index]
              return (
                <li key={cert.id} className={styles.certItem}>
                  <span className={styles.certTitle}>{localized.title}</span>
                  <span className={styles.certMeta}>{cert.issuer} · {cert.date}</span>
                </li>
              )
            })}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>{t.about.skills}</h2>
          <div className={styles.skillsGrid}>
            {t.skillGroups.map((group, index) => (
              <div key={index} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{group.category}</h3>
                <div className={styles.skillTags}>
                  {group.items.map(item => (
                    <span key={item} className={styles.skillTag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>{t.about.technologiesUsed}</h2>
          <p className={styles.technologiesSub}>{t.about.technologiesSub}</p>
          <div className={styles.technologies}>
            {t.technologiesUsed.map(tech => (
              <span key={tech} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About
