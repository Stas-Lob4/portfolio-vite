import { NavList } from '@/component'
import { MenuList, User } from '@/data/data'

import s from './menu-desktop.module.scss'

import { IconsList } from '../../../ui/icons-list'

export const MenuDesktop = () => {
  return (
    <div className={s.menu}>
      <NavList data={MenuList} />
      <IconsList data={User.contacts.socials} />
    </div>
  )
}
