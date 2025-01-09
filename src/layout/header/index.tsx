import useScreenSize from '@/common/hooks/useScreenSize'
import { Container, LogoIcon } from '@/component'
import { MenuDesktop, MenuMobile } from '@/component/header/menu'
import clsx from 'clsx'

import s from './header.module.scss'

type HeaderProps = {
  className?: string
}
export const Header = ({ className }: HeaderProps) => {
  const width = useScreenSize().width

  return (
    <header className={clsx(s.header, className)} id={'#'}>
      <Container className={s.header__container}>
        <LogoIcon idLogo={'logo'} />
        {width < 700 ? <MenuMobile /> : <MenuDesktop />}
      </Container>
    </header>
  )
}
