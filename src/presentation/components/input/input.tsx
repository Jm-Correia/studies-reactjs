import React from 'react'
import Styles from './input-styles.scss'
import { GrStatusGoodSmall } from 'react-icons/gr'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
    return (
        <div className={Styles.inputWrap}>
            <input {...props} />
            <span className={Styles.status}><GrStatusGoodSmall color="#791500" /></span>
        </div>
    )
}

export default Input
