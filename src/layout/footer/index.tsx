import { Container, NavList, Typography } from '@/component'
import { MenuList } from '@/data/data'
import useScreenSize from '@/common/hooks/useScreenSize'

import s from './footer.module.scss'

export const Footer = () => {
  const width = useScreenSize().width

  return (
    <footer className={s.footer}>
      <Container className={s.footer__container}>
        {width > 576 && <NavList data={MenuList} />}
        <Typography className={s.copiratet}>
          Designed and built by <span>Stanislav Lobchuk</span> with <span>Love</span> &{' '}
          <span>Coffee</span>
        </Typography>
      </Container>
    </footer>
  )
}
