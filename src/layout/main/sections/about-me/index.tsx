import { Container, Typography } from '@/component'
import { User } from '@/data/data'

import s from './about-me.module.scss'

export const AboutMe = () => {
  return (
    <section className={s.about} id={'about'}>
      <Container className={s.about__container}>
        <div className={s.container}>
          <Typography variant={'h4'}>About Me</Typography>
          <Typography>{User.aboutText}</Typography>
        </div>
      </Container>
    </section>
  )
}
