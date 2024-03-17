import { MenuListType, UserType } from '@/common'

import image_1 from '../assets/img/Rectangle_1.webp'
import image_2 from '../assets/img/Rectangle_2.webp'
import image_3 from '../assets/img/Rectangle_3.webp'
import image_4 from '../assets/img/Rectangle_4.webp'
import image_5 from '../assets/img/Rectangle_5.webp'
import image_6 from '../assets/img/Rectangle_6.webp'

export const User: UserType = {
  aboutText:
    'The Generator App is an online tool that helps you to export ready-made templates ready to work as our future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.',
  contacts: {
    email: 'stas.lobchuk@gmail.com',
    socials: [
      { href: 'https://github.com/Stas-Lob4', iconId: 'github2' },
      { href: 'https://www.linkedin.com/in/stanislav-lobchuk-13a832237/', iconId: 'linkedin' },
      { href: 'https://twitter.com/LobcukStanislav', iconId: 'twitter' },
    ],
  },
  education: [
    {
      btnTitle: 'Full Time',
      office: 'MNAU',
      position: 'Bachelor of Engineering',
      time: 'Sep 2017 - Dec 2022',
    },
    {
      btnTitle: 'Full Time',
      office: 'MNAU',
      position: 'Master of Engineering',
      time: 'Sep 2022 - Dec 2023',
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
      btnTitle: 'Full Time',
      location: 'Bengaluru',
      office: 'Dr. Rajkumar’s Learning App',
      position: 'Junior Web Developer',
      time: 'Sep 2021 - Dec 2021',
    },
    {
      btnTitle: 'Internship',
      location: 'Bengaluru',
      office: 'IonPixelz Web Solutions',
      position: 'Web Development Intern',
      time: 'Sep 2021 - Dec 2021',
    },
    {
      btnTitle: 'Internship',
      location: 'Bengaluru',
      office: 'HAAPS',
      position: 'SEO / SEM Specialist',
      time: 'Sep 2021 - Dec 2021',
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
