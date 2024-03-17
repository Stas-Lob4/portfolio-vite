import { AboutMe } from '@/layout/main/sections/about-me'
import { Hero } from '@/layout/main/sections/hero'
import { Education } from '@/layout/main/sections/education'
import { Works } from '@/layout/main/sections/works'
import { Skills } from '@/layout/main/sections/skills'
import { Projects } from '@/layout/main/sections/projects'
import { Contacts } from '@/layout/main/sections/contacts'

export const Main = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Works />
      <Education />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  )
}
