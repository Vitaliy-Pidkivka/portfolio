import React from 'react';
import styles from './Projects.module.scss';
import Title from "../Shared/Title/Title";
import Project from "./Project/Project";
import todoList from '../../assets/images/projects/todo-list.png'
import calculator from '../../assets/images/projects/calculator.png'
import zebra from '../../assets/images/projects/zebra.png'

const state = {
    projects: [
        {projectLink: 'https://vitaliy-pidkivka.github.io/todo-list/',
            image: todoList,
            project: 'Todo list',
            description: 'React application',
            id: 1,
        },
        {projectLink: 'https://vitaliy-pidkivka.github.io/Calculator/',
            image: calculator,
            project: 'Calculator',
            description: 'Bootstrap, JS, CSS application',
            id: 2,
        },
        {projectLink: 'https://vitaliy-pidkivka.github.io/Zebra/',
            image: zebra,
            project: 'Zebra',
            description: 'Landing page',
            id: 3,
        },
        {projectLink: 'https://github.com/Vitaliy-Pidkivka/social-network',
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            project: 'Social network',
            description: 'React SPA',
            id: 4,
        },
    ]
}

function Projects(props) {

    return (
        <div className={styles.projects}>
            <div className="container">
                <div className={styles.projects__inner}>
                    <Title title="My works"/>
                    <div className={styles.projects__list}>
                        {state.projects.map(project => {
                            return <Project {...project} key={project.id}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
