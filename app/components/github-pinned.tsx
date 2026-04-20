'use client'

import useSWR from 'swr'
import { ArrowUpRight, GitFork, Star } from 'lucide-react'
import { GITHUB_USERNAME, PINNED_REPOS } from '../data'

type Repo = {
  name: string
  html_url: string
  description: string | null
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  pushed_at: string
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-emerald-500',
  HTML: 'bg-orange-500',
  CSS: 'bg-indigo-500',
  Vue: 'bg-green-500',
}

function RepoCard({ repo }: { repo: Repo }) {
  const href = repo.homepage || repo.html_url
  const langColor = repo.language
    ? LANGUAGE_COLORS[repo.language] ?? 'bg-zinc-400'
    : 'bg-zinc-400'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col justify-between gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50"
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {repo.name}
          </h4>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-50" />
        </div>
        <p className="line-clamp-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {repo.description || 'No description provided.'}
        </p>
      </div>

      <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500">
        {repo.language ? (
          <span className="inline-flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${langColor}`} />
            {repo.language}
          </span>
        ) : null}
        <span className="inline-flex items-center gap-1">
          <Star className="h-3 w-3" />
          {repo.stargazers_count}
        </span>
        <span className="inline-flex items-center gap-1">
          <GitFork className="h-3 w-3" />
          {repo.forks_count}
        </span>
      </div>
    </a>
  )
}

function RepoSkeleton() {
  return (
    <div className="h-[112px] animate-pulse rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40" />
  )
}

export function GithubPinned() {
  const { data, isLoading } = useSWR<Repo[]>(
    `/api/github/pinned?user=${GITHUB_USERNAME}&repos=${PINNED_REPOS.join(',')}`,
    fetcher,
    { revalidateOnFocus: false }
  )

  return (
    <section>
      <div className="mb-5 flex items-baseline justify-between">
        <h3 className="text-lg font-medium">Pinned on GitHub</h3>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-50"
        >
          @{GITHUB_USERNAME}
        </a>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {isLoading || !data
          ? PINNED_REPOS.map((name) => <RepoSkeleton key={name} />)
          : data.map((repo) => <RepoCard key={repo.name} repo={repo} />)}
      </div>
    </section>
  )
}
