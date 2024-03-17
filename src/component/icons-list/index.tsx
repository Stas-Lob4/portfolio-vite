import { SocialsType } from '@/common'
import { Icon } from '@/component'
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
          <a href={item.href} key={index}>
            <Icon height={33} iconId={item.iconId} width={33} />
          </a>
        )
      })}
    </div>
  )
}
