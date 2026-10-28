'use client'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BLOG_POSTS } from '../data'
import { useLocale } from '../i18n'

export default function JournalPage() {
  const { t } = useLocale()
  return <main className="space-y-16 pb-16"><header className="max-w-3xl border-b border-[var(--line)] pb-10"><p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">{t('journal')}</p><h1 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">{t('articles')}</h1><p className="mt-6 text-base leading-7 text-[var(--muted)]">Des notes sur le produit, le code, le design et la construction depuis le Cameroun.</p></header><div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">{BLOG_POSTS.map((post, index) => <Link key={post.uid} href={post.link} className="group grid gap-4 py-7 sm:grid-cols-[100px_1fr_24px] sm:items-start"><span className="text-xs text-[var(--muted)]">0{index + 1} / 2026</span><div><h2 className="text-xl font-medium group-hover:text-[var(--accent)]">{post.title}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">{post.description}</p></div><ArrowUpRight className="h-4 w-4 text-[var(--accent)]" /></Link>)}</div></main>
}
