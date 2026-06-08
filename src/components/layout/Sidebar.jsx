import { NavLink } from 'react-router-dom'
import { profile } from '../../data/profile'
import { useLanguage } from '../../i18n/LanguageContext'
import LanguageToggle from '../ui/LanguageToggle'
import styles from './Sidebar.module.css'

const navPaths = [
  { path: '/', key: 'home', icon: '⌂' },
  { path: '/about', key: 'about', icon: '◎' },
  { path: '/projects', key: 'projects', icon: '⬡' },
  { path: '/certificates', key: 'certificates', icon: '✦' },
  { path: '/blog', key: 'blog', icon: '✐' },
  { path: '/contact', key: 'contact', icon: '✉' },
]

function Sidebar() {
  const { t } = useLanguage()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.brandDot} />
        <span className={styles.brandName}>{profile.name}</span>
      </div>

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
            <span className={styles.icon}>{link.icon}</span>
            <span>{t.nav[link.key]}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.footer}>
        <LanguageToggle />
        <p className={styles.footerText}>{t.common.builtWith}</p>
      </div>
    </aside>
  )
}

export default Sidebar
