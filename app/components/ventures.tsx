'use client'

import { ArrowUpRight } from 'lucide-react'
import { VENTURES } from '../data'

export function Ventures() {
  return <section id="work" className="scroll-mt-10"><div className="mb-6 flex items-end justify-between"><div><p className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Sélection</p><h2 className="text-2xl font-medium tracking-tight">Ce que je construis</h2></div><span className="text-xs text-[var(--muted)]">01 — 04</span></div><div className="grid gap-3 sm:grid-cols-2">{VENTURES.map((venture, index) => <a key={venture.id} href={venture.link} target="_blank" rel="noopener noreferrer" className={`group flex min-h-[235px] flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] ${index === 0 ? 'sm:col-span-2 sm:min-h-[270px] sm:p-7' : ''}`}><div className="flex items-start justify-between"><span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[var(--accent)]">{venture.tag}</span><ArrowUpRight className="h-4 w-4 text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]" /></div><div><p className="mb-2 text-xs text-[var(--muted)]">{venture.role}</p><h3 className={`${index === 0 ? 'text-3xl sm:text-4xl' : 'text-xl'} font-medium tracking-tight`}>{venture.name}</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">{venture.description}</p></div></a>)}</div></section>
}
