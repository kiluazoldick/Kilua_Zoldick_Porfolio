'use client'

import { createContext, useContext, useState } from 'react'

type Language = 'fr' | 'en'
const translations = {
  fr: { work: 'Travaux', about: 'À propos', journal: 'Journal', contact: 'Parlons-nous', home: 'Accueil', founder: 'Fondateur & créateur', projects: 'Projets sélectionnés', articles: 'Articles & réflexions', aboutTitle: 'Construire avec intention.', aboutText: "Je suis Kilua Zoldick, développeur front-end, designer UI/UX et fondateur basé à Douala. Je transforme des idées en produits digitaux utiles, clairs et capables de créer de la valeur.", mimpot: 'M. Impôt est un produit client : je contribue à sa conception et à sa réalisation digitale.', ebook: 'eBook Cameroun est mon projet phare : j’en suis le fondateur et le créateur.', language: 'Langue' },
  en: { work: 'Work', about: 'About', journal: 'Journal', contact: 'Let’s talk', home: 'Home', founder: 'Founder & creator', projects: 'Selected projects', articles: 'Articles & notes', aboutTitle: 'Building with intention.', aboutText: 'I am Kilua Zoldick, a front-end developer, UI/UX designer and founder based in Douala. I turn ideas into useful, clear digital products that create value.', mimpot: 'M. Impôt is a client product: I contribute to its digital conception and delivery.', ebook: 'eBook Cameroun is my flagship project: I am its founder and creator.', language: 'Language' },
} as const

type TranslationKey = keyof typeof translations.fr
const LocaleContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string }>({ language: 'fr', setLanguage: () => {}, t: (key) => translations.fr[key] })

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')
  const t = (key: TranslationKey) => translations[language][key]
  return <LocaleContext.Provider value={{ language, setLanguage, t }}>{children}</LocaleContext.Provider>
}

export function useLocale() { return useContext(LocaleContext) }
