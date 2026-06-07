import { NavLink } from 'react-router-dom'
import { profile } from '../../data/profile'
import styles from './Sidebar.module.css'

const navLinks = [
  { path: '/',             label: 'Home',         icon: '⌂' },
  { path: '/about',        label: 'About',        icon: '◎' },
  { path: '/projects',     label: 'Projects',     icon: '⬡' },
  { path: '/certificates', label: 'Certificates', icon: '✦' },
  { path: '/blog',         label: 'Blog',         icon: '✐' },
  { path: '/contact',      label: 'Contact',      icon: '✉' },
]

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.brandDot} />
        <span className={styles.brandName}>{profile.name}</span>
      </div>

      <nav className={styles.nav}>
        {navLinks.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <span className={styles.icon}>{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.footer}>
        <p className={styles.footerText}>Built with React</p>
      </div>
    </aside>
  )
}

export default Sidebar