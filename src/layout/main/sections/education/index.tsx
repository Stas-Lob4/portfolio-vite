import { Container, Typography } from '@/component'
import { User } from '@/data/data'
import { Building, CalendarClock } from 'lucide-react'

import s from './education.module.scss'

export const Education = () => {
  return (
    <section className={s.education} id={'education'}>
      <Container className={s.education__container}>
        <div className={s.container}>
          <Typography variant={'h4'}>Education</Typography>
          <div className={s.educationList}>
            {User.education.map((item, index) => {
              return (
                <div className={s.listItem} key={index}>
                  <div className={s.wrapper}>
                    <Typography className={s.title} variant={'p'}>
                      {item.position}
                    </Typography>
                    <button className={s.button}>{item.btnTitle}</button>
                  </div>
                  <div className={s.wrapper}>
                    <div className={s.wrapper__item}>
                      <Building height={15} />
                      <Typography variant={'span'}>{item.office}</Typography>
                    </div>
                    <div className={s.wrapper__item}>
                      <CalendarClock height={15} />
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
