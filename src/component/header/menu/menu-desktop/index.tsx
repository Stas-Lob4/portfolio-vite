import { NavList } from '@/component'
import { IconsList } from '@/component/icons-list'
import { MenuList, User } from '@/data/data'

import s from './menu-desktop.module.scss'

export const MenuDesktop = () => {
  return (
    <div className={s.menu}>
      <NavList data={MenuList} />
      <IconsList data={User.contacts.socials} />
    </div>
  )
}
