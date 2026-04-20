'use client'

import useSWR from 'swr'
import {
  GitCommit,
  GitPullRequest,
  GitBranch,
  Star,
  CircleDot,
  GitFork,
  type LucideIcon,
} from 'lucide-react'
import { GITHUB_USERNAME } from '../data'

type ActivityItem = {
  type: 'push' | 'pr' | 'create' | 'issue' | 'star' | 'fork'
  repo: string
  date: string
  message: string
  detail: string | null
  url: string
}

const ICONS: Record<ActivityItem['type'], LucideIcon> = {
  push: GitCommit,
  pr: GitPullRequest,
  create: GitBranch,
  issue: CircleDot,
  star: Star,
  fork: GitFork,
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

function timeAgo(iso: string) {
  const d = new Date(iso).getTime()
  const diff = Date.now() - d
  const s = Math.floor(diff / 1000)
  if (s < 60) return `${s}s ago`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const days = Math.floor(h / 24)
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  return `${months}mo ago`
}

export function GithubActivity() {
  const { data, isLoading } = useSWR<ActivityItem[]>(
    `/api/github/activity?user=${GITHUB_USERNAME}`,
    fetcher,
    { revalidateOnFocus: false }
  )

  return (
    <section>
      <div className="mb-5 flex items-baseline justify-between">
        <h3 className="text-lg font-medium">Recent activity</h3>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-50"
        >
          View on GitHub
        </a>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        {isLoading || !data ? (
          <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3"
              >
                <div className="h-4 w-4 shrink-0 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-3 flex-1 animate-pulse rounded bg-zinc-100 dark:bg-zinc-900" />
              </div>
            ))}
          </div>
        ) : data.length === 0 ? (
          <p className="p-4 text-sm text-zinc-500">No recent activity.</p>
        ) : (
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-900">
            {data.map((item, i) => {
              const Icon = ICONS[item.type]
              return (
                <li key={`${item.date}-${i}`}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-zinc-900 dark:text-zinc-100">
                        {item.message}
                      </p>
                      {item.detail ? (
                        <p className="truncate text-xs text-zinc-500 dark:text-zinc-500">
                          {item.detail}
                        </p>
                      ) : null}
                    </div>
                    <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-600">
                      {timeAgo(item.date)}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}
