'use client'

import { ArrowUpRight } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { VENTURES } from '../data'

export function Ventures() {
  return (
    <section id="ventures" className="scroll-mt-20">
      <div className="mb-5 flex items-baseline justify-between">
        <h3 className="text-lg font-medium">Currently building</h3>
        <span className="text-xs text-zinc-500 dark:text-zinc-500">
          {VENTURES.length} active
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {VENTURES.map((venture) => (
          <a
            key={venture.id}
            href={venture.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
          >
            <Spotlight
              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <div className="relative flex h-full flex-col justify-between gap-4 rounded-[15px] bg-white p-5 dark:bg-zinc-950">
              <div className="flex items-start justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                  {venture.tag}
                </span>
                <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-50" />
              </div>

              <div className="space-y-1.5">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-50">
                  {venture.name}
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  {venture.role}
                </p>
                <p className="pt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {venture.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
