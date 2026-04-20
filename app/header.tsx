'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { LanguageSwitcher } from './components/language-switcher'
import { useI18n } from './i18n/language-provider'

export function Header() {
  const { t, locale } = useI18n()
  return (
    <header className="mb-8 flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center">
        <Image
          src="/profil.jpg"
          alt="Profile Picture"
          width={50}
          height={50}
          className="mr-4 rounded-full"
        />
        <div className="min-w-0">
          <Link href="/" className="font-medium text-black dark:text-white">
            Kilua Zoldick
          </Link>
          <TextEffect
            // Re-mount on locale change so the char-by-char effect replays.
            key={locale}
            as="p"
            preset="fade"
            per="char"
            className="truncate text-sm text-zinc-600 dark:text-zinc-500"
            delay={0.3}
          >
            {t.header.subtitle}
          </TextEffect>
        </div>
      </div>
      <LanguageSwitcher />
    </header>
  )
}
