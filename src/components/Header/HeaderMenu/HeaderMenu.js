import React from 'react';
import styles from './HeaderMenu.module.scss'

function HeaderMenu(props) {
    return(
        <ul className={styles.header__menu}>
            <li><a href="#pl">Main</a></li>
            <li><a href="#pl">Skills</a></li>
            <li><a href="#pl">Works</a></li>
            <li><a href="#pl">Contacts</a></li>
        </ul>
    )
}
export  default  HeaderMenu