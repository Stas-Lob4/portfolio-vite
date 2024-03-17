import { Container, Icon, Typography } from '@/component'
import { User } from '@/data/data'

import s from './works.module.scss'

export const Works = () => {
  return (
    <section className={s.works} id={'works'}>
      <Container className={s.works__container}>
        <div className={s.container}>
          <Typography variant={'h4'}>Work Experience</Typography>
          <div className={s.worksList}>
            {User.works.map((item, index) => {
              return (
                <div className={s.listItem} key={index}>
                  <div className={s.wrapper}>
                    <Typography className={s.title} variant={'p'}>
                      {item.position}
                    </Typography>
                    <button className={s.button}>{item.btnTitle}</button>
                  </div>
                  <div className={s.wrapper}>
                    <div className={s.item__wrapper}>
                      <div className={s.wrapper__item}>
                        <Icon height={12} iconId={'office'} width={16} />
                        <Typography variant={'span'}>{item.office}</Typography>
                      </div>
                      <div className={s.wrapper__item}>
                        <Icon height={12} iconId={'location'} width={16} />
                        <Typography variant={'span'}>{item.location}</Typography>
                      </div>
                    </div>
                    <div className={s.wrapper__item}>
                      <Icon height={12} iconId={'calendar'} width={16} />
                      <Typography variant={'span'}>{item.time}</Typography>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
