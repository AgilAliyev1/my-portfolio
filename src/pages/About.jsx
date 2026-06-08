import Layout from '../components/layout/Layout'
import FadeIn from '../components/ui/FadeIn'
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
        <FadeIn>
          <h1 className={styles.heading}>{t.about.heading}</h1>
        </FadeIn>

        <section className={styles.section}>
          <FadeIn delay={0.05}>
            <p className={styles.bio}>{t.profile.summary}</p>
          </FadeIn>
        </section>

        <section className={styles.section}>
          <FadeIn delay={0.1}>
            <h2 className={styles.subheading}>{t.about.education}</h2>
          </FadeIn>
          {education.map((item, index) => {
            const localized = t.education[index]
            return (
              <FadeIn key={item.id} delay={0.15 + index * 0.05}>
                <div className={styles.entry}>
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
              </FadeIn>
            )
          })}
        </section>

        <section className={styles.section}>
          <FadeIn delay={0.1}>
            <h2 className={styles.subheading}>{t.about.workExperience}</h2>
          </FadeIn>
          <div className={styles.timeline}>
            {experience.map((item, index) => {
              const localized = t.experience[index]
              return (
                <FadeIn key={item.id} delay={0.15 + index * 0.06}>
                  <div className={styles.timelineItem}>
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
                </FadeIn>
              )
            })}
          </div>
        </section>

        <section className={styles.section}>
          <FadeIn delay={0.1}>
            <h2 className={styles.subheading}>{t.about.volunteerWork}</h2>
          </FadeIn>
          <div className={styles.timeline}>
            {volunteer.map((item, index) => {
              const localized = t.volunteer[index]
              return (
                <FadeIn key={item.id} delay={0.15 + index * 0.06}>
                  <div className={styles.timelineItem}>
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
                </FadeIn>
              )
            })}
          </div>
        </section>

        <section className={styles.section}>
          <FadeIn delay={0.1}>
            <h2 className={styles.subheading}>{t.about.certifications}</h2>
          </FadeIn>
          <ul className={styles.certList}>
            {certificates.map((cert, index) => {
              const localized = t.certificatesData[index]
              return (
                <FadeIn key={cert.id} delay={0.15 + index * 0.04}>
                  <li className={styles.certItem}>
                    <span className={styles.certTitle}>{localized.title}</span>
                    <span className={styles.certMeta}>{cert.issuer} · {cert.date}</span>
                  </li>
                </FadeIn>
              )
            })}
          </ul>
        </section>

        <section className={styles.section}>
          <FadeIn delay={0.1}>
            <h2 className={styles.subheading}>{t.about.skills}</h2>
          </FadeIn>
          <div className={styles.skillsGrid}>
            {t.skillGroups.map((group, index) => (
              <FadeIn key={index} delay={0.15 + index * 0.05}>
                <div className={styles.skillGroup}>
                  <h3 className={styles.skillCategory}>{group.category}</h3>
                  <div className={styles.skillTags}>
                    {group.items.map(item => (
                      <span key={item} className={styles.skillTag}>{item}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <FadeIn delay={0.1}>
            <h2 className={styles.subheading}>{t.about.technologiesUsed}</h2>
            <p className={styles.technologiesSub}>{t.about.technologiesSub}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className={styles.technologies}>
              {t.technologiesUsed.map(tech => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </FadeIn>
        </section>
      </div>
    </Layout>
  )
}

export default About
