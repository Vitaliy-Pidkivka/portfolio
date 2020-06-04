import React from 'react';
import styles from './Projects.module.scss';
import Title from "../Shared/Title/Title";
import Project from "./Project/Project";
import todoList from '../../assets/images/projects/todo-list.png'
import calculator from '../../assets/images/projects/calculator.png'
import mogo from '../../assets/images/projects/mogo.png'
import zebra from '../../assets/images/projects/zebra.png'
import counter from '../../assets/images/projects/counter.png'
import advocatus from '../../assets/images/projects/advocatus.png'
import privat from '../../assets/images/projects/privat-holidays.png'
import Button from "../Shared/Button/Button";


class Projects extends React.Component {
    state = {
        projects: [
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/social-network/#/profile',
                image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                project: 'Social network',
                description: 'React SPA with REST API',
                id: 1,
                filterValue: 'react',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/todo-list/',
                image: todoList,
                project: 'Todo list',
                description: 'React application',
                id: 2,
                filterValue: 'react',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/counter/',
                image: counter,
                project: 'Counter',
                description: 'React application',
                id: 3,
                filterValue: 'react',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/Calculator/',
                image: calculator,
                project: 'Calculator',
                description: 'Bootstrap, JS, CSS application',
                id: 4,
                filterValue: 'react',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/MoGo/',
                image: mogo,
                project: 'Mogo',
                description: 'Landing page',
                id: 5,
                filterValue: 'landing',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/Advocatus/',
                image: advocatus,
                project: 'Advocatus',
                description: 'Landing page',
                id: 6,
                filterValue: 'landing',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/Privat-holidays/',
                image: privat,
                project: 'Privat-holidays',
                description: 'Landing page',
                id: 7,
                filterValue: 'landing',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/Zebra/',
                image: zebra,
                project: 'Zebra',
                description: 'Landing page',
                id: 8,
                filterValue: 'landing',
            },
        ],
        filter: 'all',
    }
    onAllFilterClick = () => {
        this.setState({
            ...this.state,
            filter: 'all'
        })
    }
    onReactFilterClick = () => {
        this.setState({
            ...this.state,
            filter: 'react'
        })
    }
    onLandingFilterClick = () => {
        this.setState({
            ...this.state,
            filter: 'landing'
        })
    }

    render() {

        return (
            <div className={styles.projects}>
                <div className="container">
                    <div className={styles.projects__inner}>
                        <Title title="My works"/>
                        <div className={styles.buttons}>
                            <Button onClick={this.onAllFilterClick}
                                    value={'All'}
                                    active={this.state.filter === "all"}/>
                            <Button onClick={this.onReactFilterClick}
                                    value={'React application'}
                                    active={this.state.filter === "react"}/>
                            <Button onClick={this.onLandingFilterClick}
                                    value={'Landing page'}
                                    active={this.state.filter === "landing"}/>
                        </div>
                        <div className={styles.projects__list}>
                            {this.state.projects.filter(project => {
                                switch (this.state.filter) {
                                    case 'all': {return true}
                                    case 'react': {return project.filterValue === 'react'}
                                    case 'landing': {return project.filterValue === 'landing'}
                                    default: { return true }
                                }
                            })
                                .map(project => <Project {...project} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
