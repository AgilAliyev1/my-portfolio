import Layout from '../components/layout/Layout'
import { profile } from '../data/profile'
import { skills } from '../data/skills'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { volunteer } from '../data/volunteer'
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
          <h2 className={styles.subheading}>Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map(skill => (
              <div key={skill.id} className={styles.skill}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLevel}>{skill.level}%</span>
                </div>
                <div className={styles.bar}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className={styles.category}>{skill.category}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About
