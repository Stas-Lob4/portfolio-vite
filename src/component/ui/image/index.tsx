import clsx from 'clsx'

import s from './image.module.scss'

type ImageProps = {
  alt: string
  className?: string
  src: string
}

export const Image = ({ alt, className, src }: ImageProps) => {
  return <img alt={alt} className={clsx(className, s.image)} src={src} />
}
