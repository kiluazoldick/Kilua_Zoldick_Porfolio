'use client'

import useSWR from 'swr'
import { useMemo } from 'react'
import { GITHUB_USERNAME } from '@/app/data'
import { useI18n } from '@/app/i18n/language-provider'

type Contribution = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type ApiResponse = {
  total: number
  contributions: Contribution[]
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const LEVEL_CLASSES: Record<number, string> = {
  0: 'bg-zinc-200/70 dark:bg-zinc-800/70',
  1: 'bg-emerald-200 dark:bg-emerald-900/60',
  2: 'bg-emerald-300 dark:bg-emerald-700/70',
  3: 'bg-emerald-400 dark:bg-emerald-600/80',
  4: 'bg-emerald-500 dark:bg-emerald-500',
}

const MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export function GitHubContributions() {
  const { t } = useI18n()
  const { data, isLoading, error } = useSWR<ApiResponse>(
    '/api/github/contributions',
    fetcher,
    { revalidateOnFocus: false },
  )

  // Group contributions into weeks (columns of 7 days, Sun -> Sat)
  const weeks = useMemo(() => {
    if (!data?.contributions?.length) return []

    const contribs = data.contributions
    const first = new Date(contribs[0].date)
    const startOffset = first.getDay() // 0 = Sunday

    // Pad the front so week 0 always starts on Sunday
    const padded: (Contribution | null)[] = [
      ...Array(startOffset).fill(null),
      ...contribs,
    ]

    const result: (Contribution | null)[][] = []
    for (let i = 0; i < padded.length; i += 7) {
      result.push(padded.slice(i, i + 7))
    }
    return result
  }, [data])

  // Compute month label positions (label appears at the first week of each month)
  const monthLabels = useMemo(() => {
    const labels: { index: number; label: string }[] = []
    let lastMonth = -1
    weeks.forEach((week, i) => {
      const firstDay = week.find((d) => d !== null)
      if (!firstDay) return
      const m = new Date(firstDay.date).getMonth()
      if (m !== lastMonth) {
        labels.push({ index: i, label: MONTH_LABELS[m] })
        lastMonth = m
      }
    })
    return labels
  }, [weeks])

  return (
    <section>
      <div className="mb-5 flex items-end justify-between gap-4">
        <h3 className="text-lg font-medium">{t.activity.title}</h3>
        {data && !isLoading && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              {data.total.toLocaleString()}
            </span>{' '}
            {t.activity.subtitle}
          </p>
        )}
      </div>

      <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/50 p-4 dark:border-zinc-800/70 dark:bg-zinc-900/30">
        {isLoading && (
          <div className="flex h-[140px] items-center justify-center text-xs text-zinc-500 dark:text-zinc-400">
            {t.activity.loading}
          </div>
        )}

        {error && (
          <div className="flex h-[140px] items-center justify-center text-xs text-zinc-500 dark:text-zinc-400">
            {t.activity.error}
          </div>
        )}

        {data && !isLoading && (
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              {/* Month labels */}
              <div className="mb-1 flex gap-[3px] pl-6 text-[10px] text-zinc-500 dark:text-zinc-400">
                {weeks.map((_, i) => {
                  const label = monthLabels.find((m) => m.index === i)
                  return (
                    <div
                      key={i}
                      className="w-[11px] shrink-0"
                      aria-hidden="true"
                    >
                      {label ? <span>{label.label}</span> : ''}
                    </div>
                  )
                })}
              </div>

              <div className="flex gap-[3px]">
                {/* Day labels (Mon / Wed / Fri) */}
                <div className="flex w-5 flex-col gap-[3px] text-[10px] text-zinc-500 dark:text-zinc-400">
                  {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((d, i) => (
                    <div
                      key={i}
                      className="flex h-[11px] items-center"
                      aria-hidden="true"
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {/* Week columns */}
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((_, di) => {
                      const day = week[di]
                      if (!day) {
                        return (
                          <div
                            key={di}
                            className="h-[11px] w-[11px]"
                            aria-hidden="true"
                          />
                        )
                      }
                      const count = day.count
                      const cls = LEVEL_CLASSES[day.level]
                      const label =
                        count === 0
                          ? `No contributions on ${day.date}`
                          : `${count} contribution${count > 1 ? 's' : ''} on ${day.date}`
                      return (
                        <div
                          key={di}
                          className={`h-[11px] w-[11px] rounded-[2px] ${cls}`}
                          title={label}
                          aria-label={label}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-3 flex items-center justify-end gap-2 text-[10px] text-zinc-500 dark:text-zinc-400">
                <span>{t.activity.less}</span>
                {[0, 1, 2, 3, 4].map((lvl) => (
                  <span
                    key={lvl}
                    className={`h-[11px] w-[11px] rounded-[2px] ${LEVEL_CLASSES[lvl]}`}
                    aria-hidden="true"
                  />
                ))}
                <span>{t.activity.more}</span>
              </div>
            </div>
          </div>
        )}

        <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
          {t.activity.liveFrom}{' '}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            github.com/{GITHUB_USERNAME}
          </a>
        </p>
      </div>
    </section>
  )
}
