'use client'

import { AnimatedBackground } from '@/components/ui/animated-background'
import { useI18n } from '../i18n/language-provider'
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_NAMES,
  type Locale,
} from '../i18n/translations'

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      className="inline-flex items-center rounded-lg bg-zinc-100 p-0.5 dark:bg-zinc-800"
      role="group"
      aria-label={t.language.label}
    >
      <AnimatedBackground
        className="pointer-events-none rounded-md bg-white shadow-sm dark:bg-zinc-950"
        defaultValue={locale}
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }}
        enableHover={false}
        onValueChange={(id) => {
          if (id) setLocale(id as Locale)
        }}
      >
        {LOCALES.map((code) => (
          <button
            key={code}
            data-id={code}
            type="button"
            aria-label={LOCALE_NAMES[code]}
            aria-pressed={locale === code}
            className="inline-flex h-6 min-w-[28px] items-center justify-center px-1.5 text-[11px] font-medium text-zinc-500 transition-colors duration-150 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
          >
            {LOCALE_LABELS[code]}
          </button>
        ))}
      </AnimatedBackground>
    </div>
  )
}
