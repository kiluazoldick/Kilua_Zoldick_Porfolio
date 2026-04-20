'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  DICTIONARIES,
  LOCALES,
  type Dictionary,
  type Locale,
} from './translations'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'locale'

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored && LOCALES.includes(stored)) return stored
  const nav = window.navigator.language?.slice(0, 2).toLowerCase()
  if (nav === 'fr') return 'fr'
  if (nav === 'it') return 'it'
  return 'en'
}

export function LanguageProvider({
  children,
}: {
  readonly children: React.ReactNode
}) {
  const [locale, setLocaleState] = useState<Locale>('en')

  // Detect locale client-side after mount to avoid hydration mismatch.
  useEffect(() => {
    const initial = detectInitialLocale()
    setLocaleState(initial)
  }, [])

  // Keep <html lang> in sync for a11y/SEO.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore write errors (private mode, etc.)
    }
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: DICTIONARIES[locale],
    }),
    [locale, setLocale],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useI18n must be used inside <LanguageProvider>')
  }
  return ctx
}
