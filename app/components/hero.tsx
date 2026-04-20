'use client'

import Link from 'next/link'
import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { CV_URL, EMAIL } from '../data'
import { useI18n } from '../i18n/language-provider'

export function Hero() {
  const { t } = useI18n()
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          {t.hero.status}
        </p>
      </div>

      <div className="space-y-3">
        <h1 className="text-pretty text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          {t.hero.headline}
        </h1>
        <p className="text-pretty leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t.hero.subline}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <a
          href={CV_URL}
          download
          className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <Download className="h-3.5 w-3.5" />
          {t.hero.download}
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-transparent px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          <Mail className="h-3.5 w-3.5" />
          {t.hero.contact}
        </a>
        <Link
          href="#ventures"
          className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          {t.hero.see}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  )
}
