import { Container, Typography } from '@/component'

import s from './projects.module.scss'
import { Carousel } from '@/component/main/carousel'

export const Projects = () => {
  return (
    <section id={'project'} className={s.projects}>
      <Container className={s.projects__container}>
        <Typography variant={'h3'}>Projects</Typography>
        <Typography variant={'subtitle'}>Things I’ve built so far</Typography>
        <Carousel />
      </Container>
    </section>
  )
}
