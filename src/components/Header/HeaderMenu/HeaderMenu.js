import React from 'react';
import styles from './HeaderMenu.module.scss'

function HeaderMenu(props) {
    return (
        <ul className={`${styles.header__menu} ${props.isActive && styles.active}`}>
            <li><a href="#pl">Main
                <span className={styles.mask}><span>Main</span></span>
                <span className={styles.mask}><span>Main</span></span>
            </a>
            </li>
            <li><a href="#pl">Skills
                <span className={styles.mask}><span>Skills</span></span>
                <span className={styles.mask}><span>Skills</span></span>
            </a>
            </li>
            <li><a href="#pl">Works
                <span className={styles.mask}><span>Works</span></span>
                <span className={styles.mask}><span>Works</span></span>
            </a>
            </li>
            <li><a href="#pl">Contacts
                <span className={styles.mask}><span>Contacts</span></span>
                <span className={styles.mask}><span>Contacts</span></span>
            </a>
            </li>
        </ul>
    )
}

export default HeaderMenu