import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './container.module.scss'

type ContainerProps = {
  children: ReactNode
  className?: string
}
export const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx(s.container, className)}>{children}</div>
}
