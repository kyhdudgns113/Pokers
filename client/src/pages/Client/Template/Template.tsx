import type {FC} from 'react'

import * as P from '@prop'

import './Template.scss'

type TemplateProps = P.DivCommonProps & {}

export const Template: FC<TemplateProps> = ({...props}) => {
  return (
    <div className={`Template ${props.className}`} {...props}>
      <p>Template</p>
    </div>
  )
}
