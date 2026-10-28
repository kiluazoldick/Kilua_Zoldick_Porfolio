import Link from 'next/link'
import { BLOG_POSTS } from '../../data'

export function generateStaticParams() { return BLOG_POSTS.map((post) => ({ slug: post.link.split('/').pop() })) }

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((item) => item.link.endsWith(slug)) ?? BLOG_POSTS[0]
  return <main className="mx-auto max-w-2xl space-y-8 pb-16"><Link href="/journal" className="text-sm text-[var(--accent)]">← Retour au journal</Link><header><p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Article · 2026</p><h1 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">{post.title}</h1><p className="mt-5 text-lg leading-8 text-[var(--muted)]">{post.description}</p></header><article className="space-y-6 border-t border-[var(--line)] pt-8 text-base leading-8 text-[var(--muted)]"><p>Un produit ne commence pas par une interface. Il commence par une compréhension précise du problème, du contexte et des personnes que l’on veut aider.</p><p>Depuis Douala, je construis avec cette conviction : la simplicité est une force lorsqu’elle est soutenue par une vraie stratégie. Chaque choix de contenu, de parcours et de technologie doit rapprocher le produit de son objectif.</p><p>La suite consiste à écouter, mesurer, améliorer puis distribuer. C’est cette boucle qui transforme une idée intéressante en expérience utile.</p></article></main>
}
