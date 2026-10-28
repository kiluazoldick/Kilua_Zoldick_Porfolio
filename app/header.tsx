'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Github, Globe, Menu, X } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState<'FR' | 'EN'>('FR')
  const toggleLanguage = () => {
    const next = language === 'FR' ? 'EN' : 'FR'
    setLanguage(next)
    document.documentElement.lang = next.toLowerCase()
  }
  return (
    <header className="mb-16 flex items-center justify-between border-b border-[var(--line)] pb-5">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/profil.jpg" alt="Kilua Zoldick" width={38} height={38} className="rounded-full grayscale" />
        <span className="font-medium tracking-tight">Kilua Zoldick<span className="text-[var(--accent)]">.</span></span>
      </Link>
      <nav className={`${open ? 'absolute top-20 right-4 left-4 z-10 flex' : 'hidden'} flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 text-sm shadow-xl sm:static sm:flex sm:flex-row sm:items-center sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}>
        <a href="#work" onClick={() => setOpen(false)} className="text-[var(--muted)] transition hover:text-[var(--foreground)]">Travaux</a>
        <a href="#about" onClick={() => setOpen(false)} className="text-[var(--muted)] transition hover:text-[var(--foreground)]">À propos</a>
        <a href="#writing" onClick={() => setOpen(false)} className="text-[var(--muted)] transition hover:text-[var(--foreground)]">Journal</a>
        <a href="mailto:contactkiluazoldick@gmail.com" className="rounded-full bg-[var(--foreground)] px-4 py-2 text-center text-xs text-[var(--background)]">Parlons-nous</a>
        <button type="button" onClick={toggleLanguage} aria-label="Changer de langue" className="flex items-center gap-2 border-t border-[var(--line)] pt-3 text-xs text-[var(--muted)] transition hover:text-[var(--accent)] sm:border-t-0 sm:border-l sm:pl-4"><Globe className="h-3.5 w-3.5" /> <span className={language === 'FR' ? 'font-medium text-[var(--foreground)]' : ''}>FR</span> <span className="opacity-40">/</span> <span className={language === 'EN' ? 'font-medium text-[var(--foreground)]' : ''}>EN</span></button>
      </nav>
      <div className="flex items-center gap-3 sm:hidden"><a href="https://github.com/kiluazoldick" aria-label="GitHub"><Github className="h-4 w-4" /></a><button onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div>
    </header>
  )
}
