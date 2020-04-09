import React from 'react';
import styles from './Contacts.module.scss';
import Title from "../Shared/Title/Title";


function Contacts() {
    return (
        <div className={styles['contacts']}>
            <div className="container">
                <div className="contacts__inner">
                    <Title title="Contacts"/>
                    <div className={styles.contacts__form}>
                        <form action="#" method="Post" className={styles.form}>
                            <input type="text" placeholder="placeholder" required/>
                            <input type="text" placeholder="placeholder" required/>
                            <input type="text" placeholder="placeholder"/>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
