import React from 'react';
import styles from './Header.module.scss';
import HeaderMenu from "./HeaderMenu/HeaderMenu";


function Header() {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <HeaderMenu/>
                </div>
            </div>
        </div>
    );
}

export default Header;
