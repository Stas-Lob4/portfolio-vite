import { Icon, Image } from '@/component'
import { User } from '@/data/data'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import s from './carousel.module.scss'

export const Carousel = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(max-width: 800px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      '(max-width: 588px)': {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 10,
    },
  })

  return (
    <div className={'keen-slider'} ref={ref}>
      {items}
    </div>
  )
}

const items = User.projects.map((item, index) => {
  return (
    <div className={'keen-slider__slide'} key={index}>
      <div className={s.item}>
        <Image alt={'Project Image'} className={s.image} src={item.image} />
        <div className={s.boxInfo}>
          <h4 className={s.boxInfo__title}>{item.title}</h4>
          <p className={s.boxInfo__descr}>{item.description}</p>
          <p className={s.boxInfo__techStack}>
            <b>Tech stack: </b>
            {item.techStack}
          </p>
          <div className={s.boxInfo__links}>
            <div className={s.boxInfo__links__item}>
              <Icon height={20} iconId={'link_dark'} width={20} />
              <a href={item.srcUrl}>Live Preview</a>
            </div>
            <div className={s.boxInfo__links__item}>
              <Icon height={20} iconId={'github_3_dark'} width={20} />
              <a href={item.srcGit}>View Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
