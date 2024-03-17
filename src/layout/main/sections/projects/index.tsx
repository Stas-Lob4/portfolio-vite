import { Container, Typography } from '@/component'
import { Carousel } from '@/component/main/carousel'

import s from './projects.module.scss'

export const Projects = () => {
  return (
    <section className={s.projects} id={'project'}>
      <Container className={s.projects__container}>
        <Typography variant={'h3'}>Projects</Typography>
        <Typography variant={'subtitle'}>Things I’ve built so far</Typography>
        <Carousel />
      </Container>
    </section>
  )
}
