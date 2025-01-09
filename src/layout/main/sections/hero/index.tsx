import Tilt from 'react-parallax-tilt'

import useScreenSize from '@/common/hooks/useScreenSize'
import { Container, Image, Typography } from '@/component'
import clsx from 'clsx'
import Typewriter from 'typewriter-effect'

import s from './hero.module.scss'

import userPhoto from '../../../../assets/img/photo.png'

export const Hero = () => {
  const width = useScreenSize().width

  return (
    <section className={s.hero} id={'home'}>
      <Container className={s.hero__container}>
        <Typography as={'h1'} className={s.hero__title} variant={'h1'}>
          Hi 👋,
          <br />
          My name is
          <br />
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: ['Stanislav Lobchuk'],
            }}
          />
          Frontend Developer
          <br />
        </Typography>
        {width >= 650 && (
          <Tilt>
            <div
              className={clsx(s.boxImage, width < 576 ? s.boxImage__mobile : s.boxImage__desktop)}
            >
              <Image
                alt={'Photo'}
                className={clsx(s.image, width < 576 ? s.image__mobile : s.image__desktop)}
                src={userPhoto}
              />
            </div>
          </Tilt>
        )}
      </Container>
    </section>
  )
}
