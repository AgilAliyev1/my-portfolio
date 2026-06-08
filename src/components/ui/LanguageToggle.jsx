import { useLanguage } from '../../i18n/LanguageContext'
import { languages } from '../../i18n/translations'
import styles from './LanguageToggle.module.css'

function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className={styles.toggle} role="group" aria-label="Language">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={lang === code ? `${styles.btn} ${styles.active}` : styles.btn}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default LanguageToggle
