import React from 'react';
import styles from './Projects.module.scss';
import Title from "../Shared/Title/Title";
import Project from "./Project/Project";


function Projects() {
    return (
        <div className={styles.projects}>
            <div className="container">
                <div className={styles.projects__inner}>
                    <Title title="My works"/>
                    <div className={styles.projects__list}>
                        <Project project="Calculator" description="lorem lorem lorem"/>
                        <Project project="Calculator" description="lorem lorem lorem"/>
                        <Project project="Calculator" description="lorem lorem lorem"/>
                        <Project project="Calculator" description="lorem lorem lorem"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
