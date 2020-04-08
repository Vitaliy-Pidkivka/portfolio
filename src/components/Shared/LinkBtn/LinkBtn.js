import React from 'react';
import  styles from './LinkBtn.module.scss'

function LinkBtn(props) {
    return (
        <a className={styles['link-btn']} href={props.href}>{props.value}</a>
    )
}

export default LinkBtn