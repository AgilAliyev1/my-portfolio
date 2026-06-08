import { NavLink } from 'react-router-dom'
import { profile } from '../../data/profile'
import { useLanguage } from '../../i18n/LanguageContext'
import LanguageToggle from '../ui/LanguageToggle'
import styles from './Navbar.module.css'

const navPaths = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/projects', key: 'projects' },
  { path: '/certificates', key: 'certificates' },
  { path: '/blog', key: 'blog' },
  { path: '/contact', key: 'contact' },
]

function Navbar() {
  const { t } = useLanguage()

  return (
    <header className={styles.navbar}>
      <span className={styles.brand}>{profile.name}</span>
      <div className={styles.actions}>
        <nav className={styles.nav}>
          {navPaths.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {t.nav[link.key]}
            </NavLink>
          ))}
        </nav>
        <LanguageToggle />
      </div>
    </header>
  )
}

export default Navbar
