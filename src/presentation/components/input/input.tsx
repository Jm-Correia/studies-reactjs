import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import { GrStatusGoodSmall } from 'react-icons/gr'

import Context from '../../context/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
    const value = useContext(Context)

    const error = {
        title: value[`${props.name}Error`] || '',
        color: (value[`${props.name}Error`] ? '#791500' : '#1d5530')
    }

    const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
        event.target.readOnly = false
    }

    return (
        <div className={Styles.inputWrap}>
            <input {...props} readOnly onFocus={enableInput} />
            <span data-testid={`${props.name}-status`} title={error.title} className={Styles.status}>
                <GrStatusGoodSmall color={error.color} name={`${props.name}-svg`} />
            </span>
        </div>
    )
}

export default Input
