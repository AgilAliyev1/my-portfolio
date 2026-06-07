import Layout from '../components/layout/Layout'
import { profile } from '../data/profile'
import { skillGroups } from '../data/skills'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { volunteer } from '../data/volunteer'
import { certificates } from '../data/certificates'
import styles from './About.module.css'

function About() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.heading}>About Me</h1>

        <section className={styles.section}>
          <p className={styles.bio}>{profile.summary}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Education</h2>
          {education.map(item => (
            <div key={item.id} className={styles.entry}>
              <div className={styles.entryHeader}>
                <div>
                  <h3 className={styles.entryTitle}>{item.degree}</h3>
                  <p className={styles.entryOrg}>{item.school} · {item.location}</p>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
              <ul className={styles.list}>
                {item.coursework.map(course => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Work Experience</h2>
          <div className={styles.timeline}>
            {experience.map(item => (
              <div key={item.id} className={styles.timelineItem}>
                <div className={styles.dot} />
                <div className={styles.timelineContent}>
                  <div className={styles.entryHeader}>
                    <div>
                      <h3 className={styles.entryTitle}>{item.role}</h3>
                      <p className={styles.entryOrg}>{item.company}</p>
                    </div>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  <ul className={styles.list}>
                    {item.points.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Volunteer Work</h2>
          <div className={styles.timeline}>
            {volunteer.map(item => (
              <div key={item.id} className={styles.timelineItem}>
                <div className={styles.dot} />
                <div className={styles.timelineContent}>
                  <div className={styles.entryHeader}>
                    <div>
                      <h3 className={styles.entryTitle}>{item.role}</h3>
                      <p className={styles.entryOrg}>{item.organization}</p>
                    </div>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  <ul className={styles.list}>
                    {item.points.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Certifications & Training</h2>
          <ul className={styles.certList}>
            {certificates.map(cert => (
              <li key={cert.id} className={styles.certItem}>
                <span className={styles.certTitle}>{cert.title}</span>
                <span className={styles.certMeta}>{cert.issuer} · {cert.date}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Skills</h2>
          <div className={styles.skillsGrid}>
            {skillGroups.map(group => (
              <div key={group.id} className={styles.skillGroup}>
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
      </div>
    </Layout>
  )
}

export default About
