import { Container, IconsList, LogoIcon, Typography } from '@/component'
import { User } from '@/data/data'

import s from './contacts.module.scss'

export const Contacts = () => {
  return (
    <section className={s.contacts} id={'contact'}>
      <Container className={s.contacts__container}>
        <Typography className={s.title} variant={'h2'}>
          For any questions please mail me:
          <br />
          <a href={'mailto:lobchuk.stanislav@gmail.com'}>{User.contacts.email}</a>
        </Typography>
        <div className={s.wrapper}>
          <LogoIcon idLogo={'logo'} />
          <div className={s.wrapper__contacts}>
            <Typography className={s.item} variant={'p'}>
              {User.contacts.telephone}
            </Typography>
            <Typography className={s.item} variant={'p'}>
              {User.contacts.email}
            </Typography>
            <IconsList data={User.contacts.socials} />
          </div>
        </div>
      </Container>
    </section>
  )
}
