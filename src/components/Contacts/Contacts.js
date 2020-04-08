import React from 'react';
import styles from './Contacts.module.scss';
import Title from "../Shared/Title/Title";


function Contacts() {
    return (
            <div className={styles['contacts']}>
                <div className="container">
                    <div className="contacts__inner">
                        <Title title="Contacts"/>
                    </div>
                </div>
            </div>
    );
}

export default Contacts;
