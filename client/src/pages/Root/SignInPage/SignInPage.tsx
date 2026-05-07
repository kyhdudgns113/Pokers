import type {FC} from 'react'

import * as Parts from './parts'
import * as Props from '@prop'

import './SignInPage.scss'

type SignInPageProps = Props.DivCommonProps & {}

export const SignInPage: FC<SignInPageProps> = ({...props}) => {
  return (
    <div className={`SignIn_Page ${props.className || ''}`} {...props}>
      <Parts.CenterPart />
    </div>
  )
}
