import React from 'react';
import styles from './Project.module.scss';
import LinkBtn from "../../Shared/LinkBtn/LinkBtn";


function Project(props) {
    let {iconSrc = "#placeholder", project, description} = props;
    return (
        <div className={styles.project}>
            <div className={styles.project__inner}>
                <div className={styles.project__img}>
                    <LinkBtn href="https://vitaliy-pidkivka.github.io/Calculator/" value="View"/>
                </div>
                <h3 className={styles.skill__title}>{project}</h3>
                <p className={styles.skill__description}>{description}</p>
            </div>
        </div>
    );
}

export default Project;
