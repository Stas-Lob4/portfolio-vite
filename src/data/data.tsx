import { MenuListType, UserType } from '@/common'
import { Github, Linkedin, Twitter } from 'lucide-react'

import image_1 from '../assets/img/Rectangle_1.webp'
import image_2 from '../assets/img/Rectangle_2.webp'
import image_3 from '../assets/img/Rectangle_3.webp'
import image_4 from '../assets/img/Rectangle_4.webp'
import image_5 from '../assets/img/Rectangle_5.webp'
import image_6 from '../assets/img/Rectangle_6.webp'

export const User: UserType = {
  aboutText:
    'I`m a Frontend Developer with experience in building modern web applications. I' +
    ' specialize in React, TypeScript, Redux Toolkit, and Sass, creating scalable and user-friendly interfaces. Skilled in REST API integration, developing reusable UI components, and ensuring code quality with ESLint, Prettier, and testing.',
  contacts: {
    email: 'staslob4uck@gmail.com',
    socials: [
      { href: 'https://github.com/Stas-Lob4', icon: <Github height={33} /> },
      {
        href: 'https://www.linkedin.com/in/stanislav-lobchuk-13a832237/',
        icon: <Twitter height={33} />,
      },
      { href: 'https://twitter.com/LobcukStanislav', icon: <Linkedin height={33} /> },
    ],
    telephone: '+4916092441312',
  },
  education: [
    {
      btnTitle: 'Full Time',
      office: 'IT-Incubator',
      position: 'Frontend Developer',
      time: 'Dec 2023 - Jun 2023',
    },
    {
      btnTitle: 'Full Time',
      office: 'MNAU',
      position: 'Master of Engineering',
      time: 'Sep 2022 - Dec 2023',
    },
    {
      btnTitle: 'Full Time',
      office: 'MNAU',
      position: 'Bachelor of Engineering',
      time: 'Sep 2017 - Dec 2022',
    },
  ],
  name: 'Stanislav Lobchuk',
  projects: [
    {
      description:
        'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      id: 1,
      image: image_1,
      srcGit: '#',
      srcUrl: '#',
      techStack: 'HTML , JavaScript, SASS, React',
      title: 'Project Tile goes here',
    },
    {
      description:
        'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      id: 2,
      image: image_2,
      srcGit: '#',
      srcUrl: '#',
      techStack: 'HTML , JavaScript, SASS, React',
      title: 'Project Tile goes here',
    },
    {
      description:
        'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      id: 3,
      image: image_3,
      srcGit: '#',
      srcUrl: '#',
      techStack: 'HTML , JavaScript, SASS, React',
      title: 'Project Tile goes here',
    },
    {
      description:
        'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      id: 4,
      image: image_4,
      srcGit: '#',
      srcUrl: '#',
      techStack: 'HTML , JavaScript, SASS, React',
      title: 'Project Tile goes here',
    },
    {
      description:
        'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      id: 5,
      image: image_5,
      srcGit: '#',
      srcUrl: '#',
      techStack: 'HTML , JavaScript, SASS, React',
      title: 'Project Tile goes here',
    },
    {
      description:
        'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      id: 6,
      image: image_6,
      srcGit: '#',
      srcUrl: '#',
      techStack: 'HTML , JavaScript, SASS, React',
      title: 'Project Tile goes here',
    },
  ],
  works: [
    {
      btnTitle: 'Part Time',
      location: 'Europa',
      office: 'IT-Incubator',
      position: 'Junior Web Developer',
      time: 'Jun/2023 - today',
    },
  ],
}
export const MenuList: MenuListType = [
  { href: '#home', id: 1, title: 'Home' },
  { href: '#about', id: 2, title: 'About' },
  { href: '#tech_stack', id: 3, title: 'Tech Stack' },
  { href: '#project', id: 4, title: 'Projects' },
  { href: '#contact', id: 5, title: 'Contact' },
]
