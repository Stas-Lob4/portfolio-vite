import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './popup.module.scss'

type PopupProps = {
  children: ReactNode
  isOpen: boolean
}

export const Popup = ({ children, isOpen }: PopupProps) => {
  return <div className={clsx(s.popup, isOpen ? s.open : '')}>{children}</div>
}
