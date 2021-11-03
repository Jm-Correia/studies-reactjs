import React from 'react'
import Styles from './status-styles.scss'
import Spinner from '../spinner/spinner'

const Status: React.FC = () => {
    return (
        <div className={Styles.errorWrap}>
            <Spinner className={Styles.spinner} />
            <span className={Styles.error}>
                Error
            </span>
        </div>

    )
}

export default Status
