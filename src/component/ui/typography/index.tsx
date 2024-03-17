import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

type TextProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'subtitle' | 'span' | 'a'
} & ComponentPropsWithoutRef<'p'>

export const Typography = <T extends ElementType = 'p'>(
  props: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>
) => {
  const { as: Component = 'p', className, variant = 'p', ...rest } = props

  return <Component className={clsx(s.text, s[variant], className)} {...rest} />
}
