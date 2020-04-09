import React from 'react';
import styles from './LinkBtn.module.scss'

function LinkBtn(props) {
    let {className = " "} = props;

    return (
        <a className={`${styles['link-btn']} ${className}`} href={props.href}>{props.value}</a>
    )
}

export default LinkBtn