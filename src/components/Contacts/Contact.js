import React from 'react';
import styles from './Contact.module.scss';
import Title from "../Shared/Title/Title";


function Contact() {
    return (
        <div className={styles['contacts']}>
            <div className="container">
                <div className={styles.contacts__inner}>
                    <Title title="Contact"/>
                    <form action="#" method="Post" className={styles.form}>
                        <input type="text" placeholder="Name" required/>
                        <input type="email" placeholder="Email" required/>
                        <textarea type="text" placeholder="Message"/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
