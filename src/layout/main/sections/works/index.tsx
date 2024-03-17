import { User } from '@/data/data'
import { Container, Icon, Typography } from '@/component'

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
                <div key={index} className={s.listItem}>
                  <div className={s.wrapper}>
                    <Typography variant={'p'} className={s.title}>
                      {item.position}
                    </Typography>
                    <button className={s.button}>{item.btnTitle}</button>
                  </div>
                  <div className={s.wrapper}>
                    <div className={s.item__wrapper}>
                      <div className={s.wrapper__item}>
                        <Icon iconId={'office'} width={16} height={12} />
                        <Typography variant={'span'}>{item.office}</Typography>
                      </div>
                      <div className={s.wrapper__item}>
                        <Icon iconId={'location'} width={16} height={12} />
                        <Typography variant={'span'}>{item.location}</Typography>
                      </div>
                    </div>
                    <div className={s.wrapper__item}>
                      <Icon iconId={'calendar'} width={16} height={12} />
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
