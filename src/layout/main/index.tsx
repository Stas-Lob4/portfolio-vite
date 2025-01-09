import { AnimatedSection } from '@/component'
import { AboutMe } from '@/layout/main/sections/about-me'
import { Contacts } from '@/layout/main/sections/contacts'
import { Education } from '@/layout/main/sections/education'
import { Hero } from '@/layout/main/sections/hero'
import { Projects } from '@/layout/main/sections/projects'
import { Skills } from '@/layout/main/sections/skills'
import { Works } from '@/layout/main/sections/works'

export const Main = () => {
  return (
    <main>
      <Hero />
      <AnimatedSection>
        <AboutMe />
        <Works />
        <Education />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Contacts />
      </AnimatedSection>
    </main>
  )
}
