import { Container, Icon, Typography } from '@/component'

import s from './education.module.scss'
import { User } from '@/data/data'

export const Education = () => {
  return (
    <section className={s.education} id={'education'}>
      <Container className={s.education__container}>
        <div className={s.container}>
          <Typography variant={'h4'}>Education</Typography>
          <div className={s.educationList}>
            {User.education.map((item, index) => {
              return (
                <div key={index} className={s.listItem}>
                  <div className={s.wrapper}>
                    <Typography variant={'p'} className={s.title}>
                      {item.position}
                    </Typography>
                    <button className={s.button}>{item.btnTitle}</button>
                  </div>
                  <div className={s.wrapper}>
                    <div className={s.wrapper__item}>
                      <Icon iconId={'office'} width={16} height={12} />
                      <Typography variant={'span'}>{item.position}</Typography>
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
