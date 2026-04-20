'use client'

import { ArrowUpRight, Download } from 'lucide-react'
import { CV_URL, EMAIL } from '../data'
import { useI18n } from '../i18n/language-provider'

export function Cta() {
  const { t } = useI18n()
  return (
    <section>
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-8">
        <div className="space-y-4">
          <h3 className="text-pretty text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl">
            {t.cta.title}
          </h3>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t.cta.subline}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {t.cta.start}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={CV_URL}
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              <Download className="h-3.5 w-3.5" />
              {t.cta.download}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
