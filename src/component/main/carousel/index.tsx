import { Image } from '@/component'
import { User } from '@/data/data'
import { useKeenSlider } from 'keen-slider/react'
import { ExternalLink, Github } from 'lucide-react'

import 'keen-slider/keen-slider.min.css'

import s from './carousel.module.scss'

export const Carousel = () => {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        '(max-width: 588px)': {
          slides: {
            perView: 1,
            spacing: 10,
          },
        },
        '(max-width: 800px)': {
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
    },
    [
      slider => {
        let timeout: number
        let isHovered = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (!isHovered) {
            timeout = window.setTimeout(() => {
              slider.next()
            }, 2000)
          }
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            isHovered = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            isHovered = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  return (
    <div className={'keen-slider'} ref={ref}>
      {items}
    </div>
  )
}

const items = User.projects.map((item, index) => {
  return (
    <div
      className={'keen-slider__slide'}
      key={index}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
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
            <a className={s.boxInfo__links__item} href={item.srcUrl}>
              <ExternalLink height={20} width={20} />
              Live Preview
            </a>
            <a className={s.boxInfo__links__item} href={item.srcGit}>
              <Github height={20} width={20} />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
})
