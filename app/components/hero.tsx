'use client'

import { ArrowDownRight, ArrowUpRight, Download, Mail } from 'lucide-react'
import { CV_URL, EMAIL, HERO } from '../data'

export function Hero() {
  return (
    <section className="grid gap-10 pb-20 pt-2 md:grid-cols-[1fr_230px] md:items-end">
      <div>
        <div className="mb-8 flex items-center gap-2 text-xs text-[var(--muted)]"><span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_0_5px_var(--accent-soft)]" /> {HERO.status}</div>
        <p className="mb-5 text-sm text-[var(--accent)]">Développeur · Designer · Entrepreneur</p>
        <h1 className="max-w-3xl text-pretty text-4xl font-medium leading-[1.03] tracking-[-0.06em] sm:text-6xl">{HERO.headline}</h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)]">{HERO.subline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:-translate-y-0.5"><Mail className="h-4 w-4" /> Démarrer une conversation</a>
          <a href={CV_URL} download className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm transition hover:border-[var(--accent)]"><Download className="h-4 w-4" /> CV</a>
        </div>
      </div>
      <div className="border-l border-[var(--line)] pl-5 text-sm text-[var(--muted)]"><ArrowDownRight className="mb-8 h-5 w-5 text-[var(--accent)]" /><p>Je travaille avec des équipes et entrepreneurs qui veulent transformer une idée en expérience concrète, désirable et rentable.</p><a href="#work" className="mt-5 inline-flex items-center gap-1 text-[var(--foreground)]">Voir une sélection <ArrowUpRight className="h-3.5 w-3.5" /></a></div>
    </section>
  )
}
