import React from 'react';
import styles from './Footer.module.scss';
import Title from "../Shared/Title/Title";


function Footer() {
    return (
            <div className={styles.footer}>
                <div className="container">
                    <div className="footer__inner">
                        <Title title="Vitalii Pidkivka"/>
                    </div>
                </div>
            </div>
    );
}

export default Footer;
