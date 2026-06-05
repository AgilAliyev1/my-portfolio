import { NavLink } from 'react-router-dom'
import { profile } from '../../data/profile'
import styles from './Navbar.module.css'

const navLinks = [
  { path: '/',             label: 'Home'         },
  { path: '/about',        label: 'About'        },
  { path: '/projects',     label: 'Projects'     },
  { path: '/certificates', label: 'Certificates' },
  { path: '/blog',         label: 'Blog'         },
  { path: '/resume',       label: 'Resume'       },
  { path: '/contact',      label: 'Contact'      },
]

function Navbar() {
  return (
    <header className={styles.navbar}>
      <span className={styles.brand}>{profile.name}</span>
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
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar