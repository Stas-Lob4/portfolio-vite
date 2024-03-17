import s from './contacts.module.scss'
import { Container, IconsList, LogoIcon, Typography } from '@/component'
import { User } from '@/data/data'

export const Contacts = () => {
  return (
    <section id={'contact'} className={s.contacts}>
      <Container className={s.contacts__container}>
        <Typography variant={'h2'} className={s.title}>
          For any questions please mail me:
          <br />
          <a href={'mailto:lobchuk.stanislav@gmail.com'}>{User.contacts.email}</a>
        </Typography>
        <div className={s.wrapper}>
          <LogoIcon idLogo={'logo'} />
          <div className={s.wrapper__contacts}>
            <Typography variant={'p'} className={s.item}>
              {User.contacts.telephone}
            </Typography>
            <Typography variant={'p'} className={s.item}>
              {User.contacts.email}
            </Typography>
            <IconsList data={User.contacts.socials} />
          </div>
        </div>
      </Container>
    </section>
  )
}
