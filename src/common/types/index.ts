export type Nav = {
  href: string
  title: string
}[]

export type UserType = {
  aboutText: string
  contacts: ContactsDataType
  education: EducationDataType
  name: string
  projects: ProjectsDataType
  works: WorksDataType
}

export type ContactsDataType = {
  email: string
  socials: SocialsType
  telephone: string
}

export type SocialsType = {
  href: string
  iconId: SvgType
}[]

export type EducationDataType = {
  btnTitle: string
  office: string
  position: string
  time: string
}[]

export type ProjectsDataType = {
  description: string
  id: number
  image: string
  srcGit: string
  srcUrl: string
  techStack: string
  title: string
}[]

export type WorksDataType = {
  btnTitle: string
  location: string
  office: string
  position: string
  time: string
}[]

export type SvgType =
  | 'bootstrap'
  | 'calendar'
  | 'css'
  | 'git'
  | 'github_1_dark'
  | 'github_1_light'
  | 'github_3_dark'
  | 'github_3_light'
  | 'github2'
  | 'greensock_dark'
  | 'greensock_light'
  | 'html'
  | 'js'
  | 'link_dark'
  | 'link_light'
  | 'linkedin'
  | 'location'
  | 'logo'
  | 'logo_1'
  | 'logo_2'
  | 'office'
  | 'react'
  | 'redux'
  | 'sass'
  | 'tailwind'
  | 'twitter'
  | 'vscode'

export type MenuListType = {
  href: string
  id: number
  title: string
}[]
