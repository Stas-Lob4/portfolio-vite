import { Header } from '@/layout/header'
import { Main } from '@/layout/main'

import s from './page.module.scss'
import { Footer } from '@/layout/footer'

export const Page = () => {
  return (
    <div className={s.page}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
