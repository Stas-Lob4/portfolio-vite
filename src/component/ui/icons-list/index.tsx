import { SocialsType } from '@/common'
import clsx from 'clsx'

import s from './icons-list.module.scss'

type IconsListProps = {
  className?: string
  data: SocialsType
}

export const IconsList = (props: IconsListProps) => {
  const { className, data } = props

  return (
    <div className={clsx(className, s.list)}>
      {data.map((item, index) => {
        return (
          <a className={s.icon} href={item.href} key={index}>
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}
