import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const STORAGE_KEY = 'portfolio-lang'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'az' ? 'az' : 'en'
  })

  const t = translations[lang]

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
    document.title = t.meta.title
  }, [lang, t.meta.title])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
