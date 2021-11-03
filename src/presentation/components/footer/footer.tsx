import React, { memo } from 'react'
import Styles from './footer-styles.scss'

const Footer: React.FC = () => {
    return (
        <footer className={Styles.footer}>
            <div>&nbsp;</div>
            <span>© All rights reserved. Multicultural Association of Fredericton Inc. 2021</span>
        </footer>

    )
}

export default memo(Footer)
