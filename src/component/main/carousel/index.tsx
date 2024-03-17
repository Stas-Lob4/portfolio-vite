import { useKeenSlider } from 'keen-slider/react'
import { User } from '@/data/data'
import { Icon, Image } from '@/component'
import 'keen-slider/keen-slider.min.css'

import s from './carousel.module.scss'

export const Carousel = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 10,
    },
    breakpoints: {
      '(max-width: 1100px)': {
        slides: {
          perView: 2,
          spacing: 10,
          origin: 5,
        },
      },
      '(max-width: 780px)': {
        slides: {
          perView: 1,
          spacing: 10,
          origin: 'center',
        },
      },
    },
  })
  return (
    <div ref={ref} className="keen-slider">
      {items}
    </div>
  )
}

const items = User.projects.map((item, index) => {
  return (
    <div key={index} className="keen-slider__slide">
      <div className={s.item}>
        <Image alt={'Project Image'} src={item.image} className={s.image} />
        <div className={s.boxInfo}>
          <h4 className={s.boxInfo__title}>{item.title}</h4>
          <p className={s.boxInfo__descr}>{item.description}</p>
          <p className={s.boxInfo__techStack}>
            <b>Tech stack: </b>
            {item.techStack}
          </p>
          <div className={s.boxInfo__links}>
            <div className={s.boxInfo__links__item}>
              <Icon iconId={'link_dark'} width={20} height={20} />
              <a href={item.srcUrl}>Live Preview</a>
            </div>
            <div className={s.boxInfo__links__item}>
              <Icon iconId={'github_3_dark'} width={20} height={20} />
              <a href={item.srcGit}>View Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
