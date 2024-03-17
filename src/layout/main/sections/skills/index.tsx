import { SkillsListIcon } from '@/common'
import { Container, Icon, Typography } from '@/component'

import s from './skills.module.scss'

export const Skills = () => {
  return (
    <section className={s.skills} id={'tech_stack'}>
      <Container className={s.skills__container}>
        <Typography variant={'h3'}>My Tech Stack</Typography>
        <Typography variant={'subtitle'}>Technologies I’ve been working with recently</Typography>
        <div className={s.icons}>
          {SkillsListIcon.map((item, index) => {
            return <Icon height={120} iconId={item.iconId} key={index} width={120} />
          })}
        </div>
      </Container>
    </section>
  )
}
