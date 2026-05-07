import type {FC} from 'react'

import * as P from '@prop'

import './CenterPart.scss'

type CenterPartProps = P.DivCommonProps & {}

export const CenterPart: FC<CenterPartProps> = ({...props}) => {
  return (
    <div className={`Center_Part ${props.className || ''}`} {...props}>
      {/* 1. 타이틀 */}
      <p className={`title_part `}>후랑 포커</p>
    </div>
  )
}
