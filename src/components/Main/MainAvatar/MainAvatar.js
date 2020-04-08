import React from 'react';
import styles from './MainAvatar.module.scss';


function MainAvatar() {
    return (
        <div className={styles.main__avatar}>
            <img src="https://html5css.ru/w3css/img_avatar3.png" alt="avatar"/>
        </div>
    );
}

export default MainAvatar;
