import React from 'react'
import Styles from './input-styles.scss'
import { GrStatusGoodSmall } from 'react-icons/gr'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
    const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
        event.target.readOnly = false
    }
    return (
        <div className={Styles.inputWrap}>
            <input {...props} readOnly onFocus={enableInput} />
            <span className={Styles.status}>
                <GrStatusGoodSmall color="#791500" />
            </span>
        </div>
    )
}

export default Input
