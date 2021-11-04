import React, { useContext } from 'react'
import Styles from './status-styles.scss'
import Spinner from '../spinner/spinner'

import Context from '../../context/form/form-context'

const Status: React.FC = () => {
    const { isLoading, errorMessage } = useContext(Context).state
    return (
        <div data-testid='error-wrap' className={Styles.errorWrap}>
            {isLoading && <Spinner className={Styles.spinner} />}
            {errorMessage && <span className={Styles.error}>
                errorMessage
            </span>}
        </div>

    )
}

export default Status
