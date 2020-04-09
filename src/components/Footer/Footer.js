import React from 'react';
import styles from './Footer.module.scss';
import Title from "../Shared/Title/Title";
import SocialNetworkBtn from "../Shared/SocialNetworkBtn/SocialNetworkBtn";


function Footer() {
    return (
            <div className={styles.footer}>
                <div className="container">
                    <div className={styles.footer__inner}>
                        <Title title="Vitalii Pidkivka"/>
                        <div className={styles['footer__social-networks']}>
                            <SocialNetworkBtn className={styles['footer__btn']} href="https://facebook.com" value="Facebook"/>
                            <SocialNetworkBtn className={styles['footer__btn']} href="https://twitter.com" value="Twitter"/>
                            <SocialNetworkBtn className={styles['footer__btn']} href="https://github.com/Vitaliy-Pidkivka" value="GitHub"/>
                            <SocialNetworkBtn className={styles['footer__btn']} href="https://linkedin.com" value="Linkedin"/>
                        </div>
                        <p className={styles.footer__copyright}>
                            &#169; All rights reserved
                        </p>
                    </div>

                </div>
            </div>
    );
}

export default Footer;
