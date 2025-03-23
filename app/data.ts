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
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
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
