import { SvgType } from '@/common'

import { Icon } from '../icon'

type LogoIconProps = {
  height?: number
  idLogo: SvgType
  width?: number
}

export const LogoIcon = ({ height, idLogo, width }: LogoIconProps) => {
  return (
    <a href={'#'}>
      <Icon height={height || 40} iconId={idLogo} width={width || 76} />
    </a>
  )
}
