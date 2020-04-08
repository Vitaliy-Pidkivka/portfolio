import React from 'react';
import styles from './Skills.module.scss';
import Title from "../Shared/Title/Title";


function Skills() {
    return (
        <div className={styles.skills}>
            <div className="container">
                <div className="skills__inner">
                    <Title title="Skills" />
                </div>
            </div>
        </div>
    );
}

export default Skills;
