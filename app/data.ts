type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Smart Todo List',
    description:
      'A modern, interactive todo list application with a clean design.',
    link: 'https://smart-todo-list-rho.vercel.app/',
    video:
      'https://res.cloudinary.com/dfszxfj7n/video/upload/v1742915710/smarttodo_wzd9bx.mp4',
    id: 'project1',
  },
  {
    name: 'Gaston Shop',
    description: 'An E-commerce website with modern design.',
    link: 'https://gaston-shop.vercel.app/',
    video:
      'https://res.cloudinary.com/dfszxfj7n/video/upload/v1742915718/gastonshop_ngrhdb.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Simtech 3D',
    title: 'Web Developer',
    start: 'December 2023 ',
    end: 'May 2024',
    link: 'https://simtech-3d.com/',
    id: 'work1',
  },
  {
    company: 'Klass Computer',
    title: 'Assistant Technician',
    start: 'November 2022 ',
    end: 'December 2023',
    link: 'https://web.facebook.com/profile.php?id=61563111275769',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2021',
    end: 'Present',
    link: 'https://github.com/kiluazoldick',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Why learn web development in 2025',
    description:
      'Discover why web development remains one of the most in-demand skills and how it can boost your career.',
    link: '/blog/why_learn_web_development_in_2025',
    uid: 'blog-1',
  },
  {
    title: 'Creating Your First Project with Vue.js: A Step-by-Step To-Do List',
    description:
      'A simple and practical guide to creating a to-do list with Vue.js, from initial setup to final design.',
    link: '/blog/create-your-first-project-with-vuejs-a-step-by-step-to-do-list',
    uid: 'blog-2',
  },
  {
    title: 'Mistakes to Avoid as a Junior Developer',
    description:
      'A look back at the most common mistakes beginners make in development and tips for overcoming them.',
    link: '/blog/mistakes-to-avoid-as-a-junior-developer',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/kiluazoldick',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/kilua_z0ldick',
  },
  {
    label: 'TikTok',
    link: 'https://www.tiktok.com/@kilua_z0ldick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/kilua_z0ldick',
  },
]

export const EMAIL = 'contactkiluazoldick@gmail.com'
