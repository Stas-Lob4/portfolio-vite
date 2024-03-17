import { useState } from 'react'

import { NavList } from '@/component'
import { BurgerButton } from '@/component/header/menu/menu-mobile/burger-button'
import { Popup } from '@/component/header/menu/menu-mobile/popup'
import { MenuList, User } from '@/data/data'

import s from './menu-mobile.module.scss'

import { IconsList } from '../../../ui/icons-list'

export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.menu}>
      <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Popup isOpen={isOpen}>
        <NavList className={s.menu__navList} data={MenuList} />
        <IconsList data={User.contacts.socials} />
      </Popup>
    </div>
  )
}
