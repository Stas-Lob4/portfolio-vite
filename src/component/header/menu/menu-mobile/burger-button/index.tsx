import clsx from 'clsx'

import s from './burger-button.module.scss'

type BurgerButtonProps = {
  isOpen: boolean
  setIsOpen: (x: boolean) => void
}

export const BurgerButton = ({ isOpen, setIsOpen }: BurgerButtonProps) => {
  return (
    <button
      className={clsx(s.burgerButton, isOpen ? s.burgerButton__open : '')}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={clsx(s.span, isOpen ? s.span__open : '')}></span>
    </button>
  )
}
