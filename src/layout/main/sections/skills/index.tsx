import { Container, Icon, Typography } from '@/component'

import s from './skills.module.scss'
import { SkillsListIcon } from '@/common'

export const Skills = () => {
  return (
    <section id={'tech_stack'} className={s.skills}>
      <Container className={s.skills__container}>
        <Typography variant={'h3'}>My Tech Stack</Typography>
        <Typography variant={'subtitle'}>Technologies I’ve been working with recently</Typography>
        <div className={s.icons}>
          {SkillsListIcon.map((item, index) => {
            return <Icon key={index} iconId={item.iconId} height={120} width={120} />
          })}
        </div>
      </Container>
    </section>
  )
}
