import React from 'react';
import styles from './Slogan.module.scss';
import Title from "../Shared/Title/Title";


function Slogan(props) {
    return (
        <div className={styles.slogan}>
            <div className="container">
                <div className="slogan__inner">
                    <Title title="Looking offer to remote job"/>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
