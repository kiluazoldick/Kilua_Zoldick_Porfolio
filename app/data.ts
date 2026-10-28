type Project = { name: string; description: string; link: string; video: string; id: string }
type WorkExperience = { company: string; title: string; start: string; end: string; link: string; id: string }
type BlogPost = { title: string; description: string; link: string; uid: string }
type SocialLink = { label: string; link: string }
type Venture = { name: string; role: string; description: string; link: string; tag: string; id: string }

export const GITHUB_USERNAME = 'kiluazoldick'
export const CV_URL = '/cv.pdf'
export const HERO = {
  name: 'Kilua Zoldick',
  headline: 'Je transforme des idées ambitieuses en produits digitaux utiles.',
  subline: 'Développeur front-end, designer UI/UX et entrepreneur basé à Douala. Je conçois des expériences rapides, claires et prêtes à grandir — de la première interface au produit complet.',
  location: 'Douala, Cameroun',
  status: 'Disponible pour missions & collaborations',
}
export const VENTURES: Venture[] = [
  { name: 'M. Impôt', role: 'Projet client · conception digitale', description: 'Une plateforme de ressources juridiques et fiscales pensée pour rendre le droit plus accessible au Cameroun : documents, vidéos éducatives, recherche et veille réunis au même endroit.', link: 'https://mimpot.com', tag: 'EdTech / LegalTech', id: 'venture-mimpot' },
  { name: 'Zoldick Entreprise', role: 'Fondateur & CEO', description: 'Une entreprise digitale qui accompagne les organisations dans la conception de sites, SaaS et outils métier modernes, avec une attention particulière portée à la clarté et aux résultats.', link: 'https://www.zoldickentreprise.com/', tag: 'Studio', id: 'venture-zoldick' },
  { name: 'eBook Cameroun', role: 'Fondateur & créateur', description: 'Une bibliothèque numérique qui met en lumière les auteurs et les histoires d’ici. Une expérience de lecture simple, locale et accessible sur tous les écrans.', link: 'https://ebookcameroun.com', tag: 'Culture / Média', id: 'venture-ebook' },
  { name: 'CorrigeTesCours', role: 'Créateur', description: 'Une app pédagogique qui aide les étudiants à comprendre, corriger et maîtriser leurs cours grâce à une expérience structurée et pratique.', link: 'https://corrigetescours.com', tag: 'Éducation', id: 'venture-corrige' },
]
export const PINNED_REPOS = ['BookShelf', 'synerg', 'IRELEC', 'Smart_Todo_List']
export const PROJECTS: Project[] = [
  { name: 'Smart Todo List', description: 'Une expérience de productivité fluide, pensée pour transformer une liste en véritable système de travail.', link: 'https://smart-todo-list-rho.vercel.app/', video: 'https://res.cloudinary.com/dfszxfj7n/video/upload/v1742915710/smarttodo_wzd9bx.mp4', id: 'project1' },
  { name: 'Gaston Shop', description: 'Une vitrine e-commerce moderne conçue pour mettre un catalogue et une marque au premier plan.', link: 'https://gaston-shop.vercel.app/', video: 'https://res.cloudinary.com/dfszxfj7n/video/upload/v1742915718/gastonshop_ngrhdb.mp4', id: 'project2' },
]
export const WORK_EXPERIENCE: WorkExperience[] = [
  { company: 'Zoldick Entreprise', title: 'Fondateur & CEO', start: '2025', end: 'Aujourd’hui', link: 'https://www.zoldickentreprise.com/', id: 'work0' },
  { company: 'Simtech 3D', title: 'Développeur web', start: 'Déc. 2023', end: 'Mai 2024', link: 'https://simtech-3d.com/', id: 'work1' },
  { company: 'Freelance', title: 'Développeur front-end', start: '2021', end: 'Aujourd’hui', link: 'https://github.com/kiluazoldick', id: 'work3' },
]
export const BLOG_POSTS: BlogPost[] = [
  { title: 'Construire un produit digital depuis le Cameroun', description: 'Ce que le terrain, les utilisateurs et la contrainte m’ont appris sur le produit.', link: '/blog/why_learn_web_development_in_2025', uid: 'blog-1' },
  { title: 'Mon approche pour créer des interfaces qui convertissent', description: 'Clarté, confiance et détails : les principes derrière une expérience utile.', link: '/blog/mistakes-to-avoid-as-a-junior-developer', uid: 'blog-2' },
  { title: 'Lancer un projet web sans perdre le fil', description: 'Une méthode simple pour passer de l’idée à une première version solide.', link: '/blog/create-your-first-project-with-vuejs-a-step-by-step-to-do-list', uid: 'blog-3' },
]
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', link: 'https://github.com/kiluazoldick' }, { label: 'LinkedIn', link: 'https://www.linkedin.com/' }, { label: 'X', link: 'https://x.com/kilua_z0ldick' },
]
export const EMAIL = 'contactkiluazoldick@gmail.com'
