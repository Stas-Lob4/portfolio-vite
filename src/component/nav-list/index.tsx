import { MenuListType } from '@/common'
import { Typography } from '@/component'
import clsx from 'clsx'

import s from './nav-list.module.scss'

type NavListProps = {
  className?: string
  data: MenuListType
}
export const NavList = ({ className, data }: NavListProps) => {
  return (
    <nav className={clsx(className, s.navList)}>
      {data.map((item, index) => {
        return (
          <Typography
            aria-label={item.href}
            as={'a'}
            className={s.navList__item}
            href={item.href}
            key={index}
            style={{ fontFamily: 'DM Sans' }}
          >
            {item.title}
          </Typography>
        )
      })}
    </nav>
  )
}
