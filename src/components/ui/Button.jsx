import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function Button({ children, variant = 'primary', href, onClick, type = 'button', disabled }) {
  const className = `${styles.btn} ${styles[variant]}`

  if (href) {
    const isInternal = href.startsWith('/')
    if (isInternal) {
      return (
        <Link to={href} className={className}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
