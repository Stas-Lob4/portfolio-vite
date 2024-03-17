import { SvgType } from '@/common'

import iconSprite from '../../../assets/svg/icons-sprite.svg'

type IconProps = {
  fill?: string
  height?: number
  iconId: SvgType
  viewBox?: string
  width?: number
}

export const Icon = (props: IconProps) => {
  return (
    <svg
      fill={props.fill || 'none'}
      height={props.height}
      viewBox={props.viewBox || `0 0 ${props.width} ${props.height} `}
      width={props.width || 30}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconSprite}#${props.iconId}`} />
    </svg>
  )
}
