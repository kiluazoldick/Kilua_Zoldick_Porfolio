export type Locale = 'en' | 'fr' | 'it'

export const LOCALES: Locale[] = ['en', 'fr', 'it']

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  it: 'IT',
}

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  it: 'Italiano',
}

type Dict = {
  header: { subtitle: string }
  hero: {
    status: string
    headline: string
    subline: string
    download: string
    contact: string
    see: string
  }
  ventures: {
    title: string
    active: string
    items: Record<
      string,
      { role: string; description: string; tag: string }
    >
  }
  stack: string
  pinned: { title: string }
  activity: {
    title: string
    subtitle: string
    loading: string
    error: string
    liveFrom: string
    less: string
    more: string
  }
  projects: {
    title: string
    items: Record<string, string>
  }
  experience: {
    title: string
    present: string
    items: Record<string, string>
  }
  writing: {
    title: string
    items: Record<string, { title: string; description: string }>
  }
  cta: {
    title: string
    subline: string
    start: string
    download: string
  }
  connect: {
    title: string
    intro: string
  }
  footer: {
    credit: string
    built: string
  }
  language: {
    label: string
  }
}

const en: Dict = {
  header: { subtitle: 'Front-End Developer · CEO @ Zoldick Entreprise' },
  hero: {
    status: 'Available for freelance & collaborations',
    headline: 'Front-End Developer, UI/UX Designer & Entrepreneur.',
    subline:
      'I design and build modern web products — from pixel-perfect interfaces to full SaaS platforms. Currently leading Zoldick Entreprise and shipping tools that make real people more productive.',
    download: 'Download CV',
    contact: 'Get in touch',
    see: "See what I'm building",
  },
  ventures: {
    title: 'Currently building',
    active: 'active',
    items: {
      'venture-zoldick': {
        role: 'Founder & CEO',
        description:
          'A digital company building web apps, SaaS and management tools for businesses across Africa. We help teams ship faster with clean, modern software.',
        tag: 'Company',
      },
      'venture-corrige': {
        role: 'Creator',
        description:
          'A learning app that helps students correct, understand and master their courses. Built to turn messy notes into clear, structured knowledge.',
        tag: 'Product',
      },
    },
  },
  stack: 'Tech stack',
  pinned: { title: 'Pinned on GitHub' },
  activity: {
    title: 'Activity',
    subtitle: 'contributions in the last year',
    loading: 'Loading activity...',
    error: 'Could not load activity.',
    liveFrom: 'Live from',
    less: 'Less',
    more: 'More',
  },
  projects: {
    title: 'Selected projects',
    items: {
      project1: 'A modern, interactive todo list application with a clean design.',
      project2: 'An E-commerce website with modern design.',
    },
  },
  experience: {
    title: 'Experience',
    present: 'Present',
    items: {
      work0: 'Founder & CEO',
      work1: 'Web Developer',
      work2: 'Assistant Technician',
      work3: 'Front-end Developer',
    },
  },
  writing: {
    title: 'Writing',
    items: {
      'blog-1': {
        title: 'Why learn web development in 2025',
        description:
          'Discover why web development remains one of the most in-demand skills and how it can boost your career.',
      },
      'blog-2': {
        title:
          'Creating Your First Project with Vue.js: A Step-by-Step To-Do List',
        description:
          'A simple and practical guide to creating a to-do list with Vue.js, from initial setup to final design.',
      },
      'blog-3': {
        title: 'Mistakes to Avoid as a Junior Developer',
        description:
          'A look back at the most common mistakes beginners make in development and tips for overcoming them.',
      },
    },
  },
  cta: {
    title: "Have a project in mind? Let's build it.",
    subline:
      "I'm open to freelance work, product collaborations, and full-stack challenges. Whether it's a landing page, a SaaS, or a full rebuild — I can help ship it.",
    start: 'Start a project',
    download: 'Download CV',
  },
  connect: {
    title: 'Connect',
    intro: 'Feel free to contact me at',
  },
  footer: {
    credit: '© 2026 Kilua Zoldick.',
    built: 'Built with Next.js.',
  },
  language: {
    label: 'Language',
  },
}

const fr: Dict = {
  header: { subtitle: 'Développeur Front-End · CEO @ Zoldick Entreprise' },
  hero: {
    status: 'Disponible pour freelance & collaborations',
    headline: 'Développeur Front-End, Designer UI/UX & Entrepreneur.',
    subline:
      'Je conçois et développe des produits web modernes — des interfaces soignées aux plateformes SaaS complètes. Actuellement à la tête de Zoldick Entreprise, je crée des outils qui rendent les gens vraiment plus productifs.',
    download: 'Télécharger le CV',
    contact: 'Me contacter',
    see: 'Voir ce que je construis',
  },
  ventures: {
    title: 'En construction',
    active: 'actifs',
    items: {
      'venture-zoldick': {
        role: 'Fondateur & CEO',
        description:
          'Une entreprise digitale qui crée des applications web, SaaS et outils de gestion pour les entreprises en Afrique. On aide les équipes à livrer plus vite avec un code propre et moderne.',
        tag: 'Entreprise',
      },
      'venture-corrige': {
        role: 'Créateur',
        description:
          'Une application d’apprentissage qui aide les étudiants à corriger, comprendre et maîtriser leurs cours. Pensée pour transformer des notes brouillonnes en connaissances claires et structurées.',
        tag: 'Produit',
      },
    },
  },
  stack: 'Stack technique',
  pinned: { title: 'Épinglés sur GitHub' },
  activity: {
    title: 'Activité',
    subtitle: 'contributions sur les 12 derniers mois',
    loading: 'Chargement de l’activité...',
    error: 'Impossible de charger l’activité.',
    liveFrom: 'En direct depuis',
    less: 'Moins',
    more: 'Plus',
  },
  projects: {
    title: 'Projets sélectionnés',
    items: {
      project1:
        'Une application de to-do list moderne et interactive, au design épuré.',
      project2: 'Un site e-commerce au design moderne.',
    },
  },
  experience: {
    title: 'Expérience',
    present: 'Aujourd’hui',
    items: {
      work0: 'Fondateur & CEO',
      work1: 'Développeur Web',
      work2: 'Assistant Technicien',
      work3: 'Développeur Front-End',
    },
  },
  writing: {
    title: 'Articles',
    items: {
      'blog-1': {
        title: 'Pourquoi apprendre le développement web en 2025',
        description:
          'Découvrez pourquoi le développement web reste l’une des compétences les plus demandées et comment il peut booster votre carrière.',
      },
      'blog-2': {
        title:
          'Créer votre premier projet Vue.js : une to-do list pas à pas',
        description:
          'Un guide simple et pratique pour créer une to-do list avec Vue.js, de la configuration initiale au design final.',
      },
      'blog-3': {
        title: 'Les erreurs à éviter en tant que développeur junior',
        description:
          'Un retour sur les erreurs les plus courantes des débutants en dev et quelques conseils pour les dépasser.',
      },
    },
  },
  cta: {
    title: 'Un projet en tête ? Construisons-le ensemble.',
    subline:
      'Je suis ouvert aux missions freelance, aux collaborations produit et aux défis full-stack. Landing page, SaaS ou refonte complète — je peux aider à le livrer.',
    start: 'Démarrer un projet',
    download: 'Télécharger le CV',
  },
  connect: {
    title: 'Contact',
    intro: 'N’hésitez pas à m’écrire à',
  },
  footer: {
    credit: '© 2026 Kilua Zoldick.',
    built: 'Construit avec Next.js.',
  },
  language: {
    label: 'Langue',
  },
}

const it: Dict = {
  header: { subtitle: 'Sviluppatore Front-End · CEO @ Zoldick Entreprise' },
  hero: {
    status: 'Disponibile per freelance e collaborazioni',
    headline: 'Sviluppatore Front-End, UI/UX Designer e Imprenditore.',
    subline:
      'Progetto e sviluppo prodotti web moderni — dalle interfacce curate alle piattaforme SaaS complete. Attualmente alla guida di Zoldick Entreprise, creo strumenti che rendono le persone davvero più produttive.',
    download: 'Scarica il CV',
    contact: 'Contattami',
    see: 'Scopri cosa sto costruendo',
  },
  ventures: {
    title: 'In costruzione',
    active: 'attivi',
    items: {
      'venture-zoldick': {
        role: 'Fondatore & CEO',
        description:
          'Un’azienda digitale che costruisce web app, SaaS e strumenti di gestione per le imprese in Africa. Aiutiamo i team a rilasciare più in fretta con software pulito e moderno.',
        tag: 'Azienda',
      },
      'venture-corrige': {
        role: 'Creatore',
        description:
          'Un’app di apprendimento che aiuta gli studenti a correggere, capire e padroneggiare i loro corsi. Pensata per trasformare appunti disordinati in conoscenza chiara e strutturata.',
        tag: 'Prodotto',
      },
    },
  },
  stack: 'Stack tecnico',
  pinned: { title: 'In evidenza su GitHub' },
  activity: {
    title: 'Attività',
    subtitle: 'contributi negli ultimi 12 mesi',
    loading: 'Caricamento attività...',
    error: 'Impossibile caricare l’attività.',
    liveFrom: 'In diretta da',
    less: 'Meno',
    more: 'Più',
  },
  projects: {
    title: 'Progetti selezionati',
    items: {
      project1:
        'Un’applicazione to-do list moderna e interattiva, dal design pulito.',
      project2: 'Un sito e-commerce dal design moderno.',
    },
  },
  experience: {
    title: 'Esperienza',
    present: 'Oggi',
    items: {
      work0: 'Fondatore & CEO',
      work1: 'Sviluppatore Web',
      work2: 'Assistente Tecnico',
      work3: 'Sviluppatore Front-End',
    },
  },
  writing: {
    title: 'Articoli',
    items: {
      'blog-1': {
        title: 'Perché imparare lo sviluppo web nel 2025',
        description:
          'Scopri perché lo sviluppo web resta una delle competenze più richieste e come può far decollare la tua carriera.',
      },
      'blog-2': {
        title:
          'Il tuo primo progetto con Vue.js: una to-do list passo dopo passo',
        description:
          'Una guida semplice e pratica per creare una to-do list con Vue.js, dalla configurazione iniziale al design finale.',
      },
      'blog-3': {
        title: 'Gli errori da evitare come sviluppatore junior',
        description:
          'Uno sguardo agli errori più comuni dei principianti e qualche consiglio per superarli.',
      },
    },
  },
  cta: {
    title: 'Hai un progetto in mente? Costruiamolo.',
    subline:
      'Sono aperto a lavori freelance, collaborazioni sui prodotti e sfide full-stack. Landing page, SaaS o rebuild completo — posso aiutarti a rilasciarlo.',
    start: 'Avvia un progetto',
    download: 'Scarica il CV',
  },
  connect: {
    title: 'Contatti',
    intro: 'Scrivimi pure a',
  },
  footer: {
    credit: '© 2026 Kilua Zoldick.',
    built: 'Costruito con Next.js.',
  },
  language: {
    label: 'Lingua',
  },
}

export const DICTIONARIES: Record<Locale, Dict> = { en, fr, it }

export type Dictionary = Dict
