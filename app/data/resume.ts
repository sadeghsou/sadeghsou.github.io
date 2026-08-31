export interface Profile {
  fullName: string
  firstNameLine: string
  lastNameLine: string
  role: string
  availability: string
  bio: string
  email: string
  phone: string
  github: string
  githubUrl: string
  linkedin: string
  linkedinUrl: string
  location: string
  photo: { src: string; alt: string }
}

export const profile: Profile = {
  fullName: 'Mohammad Sadegh Sousahabi',
  firstNameLine: 'Mohammad Sadegh',
  lastNameLine: 'Sousahabi',
  role: 'Senior Frontend Engineer',
  availability: 'Open to senior frontend roles · Tehran, remote-friendly',
  bio: 'Senior Frontend Engineer, ten years in. I build scalable Vue and Nuxt applications, shape frontend architecture, and lead small teams — with enough Node, Laravel, Flutter and Linux behind me to follow a feature from schema to production.',
  email: 'thesadeghsou@gmail.com',
  phone: '+989129439150',
  github: 'github.com/SadeghSou',
  githubUrl: 'https://github.com/SadeghSou',
  linkedin: 'in/sadegh-soosahabi',
  linkedinUrl: 'https://www.linkedin.com/in/sadegh-soosahabi-aa8342168/',
  location: 'Tehran, Iran',
  photo: {
    src: 'https://sadeghsou.github.io/sadegh.jpg',
    alt: 'Mohammad Sadegh Sousahabi',
  },
}

export interface HeadlineStat {
  value: number
  suffix: string
  label: string
}

export const headlineStats: HeadlineStat[] = [
  { value: 10, suffix: '+', label: 'Years experience' },
  { value: 7, suffix: '', label: 'Roles & teams' },
  { value: 3, suffix: '', label: 'Developers led' },
  { value: 6, suffix: '', label: 'Stack layers' },
]

export interface ExperienceEntry {
  company: string
  role: string
  dateRange: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Avijeh',
    role: 'Senior Frontend Developer',
    dateRange: '2025 — Present',
    bullets: [
      'Build scalable web applications in Vue.js, Nuxt.js, React and TypeScript.',
      'Shape frontend architecture around performance, maintainability and UX.',
      'Ship reusable components and raise frontend development standards.',
    ],
  },
  {
    company: 'Datis INT',
    role: 'Website Manager / Frontend Lead',
    dateRange: '2020 — 2025',
    bullets: [
      'Led a team of three developers, owning architecture and technical decisions.',
      'Built Laravel-backed platforms with Nuxt 3, Vue.js, React, TypeScript and REST APIs.',
      'Migrated the codebase from Nuxt 2 to Nuxt 3 for scalability and maintainability.',
      'Ran Linux/Nginx servers, deployments, SSL and production environments.',
    ],
  },
  {
    company: 'MFT',
    role: 'Web Development Instructor',
    dateRange: '2023 · 5 months',
    bullets: [
      'Taught HTML, CSS, Bootstrap, JavaScript and React to classes of new developers.',
    ],
  },
  {
    company: '3Click (Deltaban)',
    role: 'Frontend Developer',
    dateRange: '2019 — 2020',
    bullets: [
      'Developed responsive applications in Vue.js, Nuxt.js and React.',
      'Built reusable components and integrated REST APIs.',
    ],
  },
  {
    company: 'Eposence',
    role: 'Flutter Developer',
    dateRange: '2018 — 2019',
    bullets: [
      'Built cross-platform mobile apps with Flutter and Dart.',
      'Integrated REST APIs and Firebase services, optimising performance.',
    ],
  },
  {
    company: 'Maana',
    role: 'Network Administrator & Web Developer',
    dateRange: '2015 — 2017',
    bullets: [
      'Managed Linux infrastructure and built sites in PHP, JavaScript, WordPress and Joomla.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Full-stack Developer',
    dateRange: '2010 — Present',
    bullets: [
      'Delivered websites, frontend apps, backend services and mobile apps for clients.',
      'Worked across WordPress, Vue.js, React, Node.js, Java and Flutter.',
    ],
  },
]

export interface SkillGroup {
  id: string
  name: string
  note: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    note: 'Where I spend most of my time.',
    items: ['Vue.js', 'Nuxt.js', 'TypeScript', 'React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'SCSS'],
  },
  {
    id: 'backend',
    name: 'Backend',
    note: 'Enough to own the API contract.',
    items: ['Node.js', 'NestJS', 'Express.js', 'PHP', 'Laravel', 'REST APIs'],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    note: 'Shipped cross-platform apps in production.',
    items: ['Flutter', 'Dart', 'Android development'],
  },
  {
    id: 'data',
    name: 'Databases',
    note: 'Modelling, queries and migrations.',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'SQLite'],
  },
  {
    id: 'devops',
    name: 'DevOps',
    note: 'I deploy and maintain what I build.',
    items: ['Linux', 'Nginx', 'Docker', 'CI/CD', 'SSL', 'Server administration'],
  },
  {
    id: 'cms',
    name: 'CMS',
    note: 'Content platforms and headless setups.',
    items: ['WordPress', 'Joomla', 'Strapi'],
  },
]

export interface ApproachCard {
  title: string
  description: string
}

export const approachCards: ApproachCard[] = [
  {
    title: 'Technical leadership',
    description: 'Leading frontend teams, mentoring developers, reviewing code and setting the standards a codebase is held to.',
  },
  {
    title: 'Problem solving',
    description: 'Debugging complex issues, profiling and optimising performance, and choosing the practical solution over the clever one.',
  },
  {
    title: 'Collaboration',
    description: 'Working closely with backend, design and product — my full-stack background keeps those conversations short.',
  },
  {
    title: 'Ownership & growth',
    description: 'Owning projects end to end, and improving the process itself — tooling, CI, review culture — as I go.',
  },
]

export interface ContactCard {
  label: string
  value: string
  href: string
}

export const contactCards: ContactCard[] = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: '(+98) 912 943 9150', href: `tel:${profile.phone}` },
  { label: 'GitHub', value: profile.github, href: profile.githubUrl },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl },
]
