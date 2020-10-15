import React from 'react';
import styles from './Projects.module.scss';
import Title from "../Shared/Title/Title";
import Project from "./Project/Project";
import todoList from '../../assets/images/projects/todo-list.png'
import socialNetwork from '../../assets/images/projects/social-network.png'
import iDecision from '../../assets/images/projects/i-decision-games.png'
import calculator from '../../assets/images/projects/calculator.png'
import mogo from '../../assets/images/projects/mogo.png'
import zebra from '../../assets/images/projects/zebra.png'
import counter from '../../assets/images/projects/counter.png'
import advocatus from '../../assets/images/projects/advocatus.png'
import privat from '../../assets/images/projects/privat-holidays.png'
import ave from '../../assets/images/projects/ave.png'
import polind from '../../assets/images/projects/polind.png'
import discord from '../../assets/images/projects/discord-clone.png'
import Button from "../Shared/Button/Button";


class Projects extends React.Component {
    state = {
        projects: [
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/social-network/#/profile',
                image: socialNetwork,
                project: 'Social network',
                description: 'Technologies used: React, Redux, React-redux, Redux-thunk, Redux-form, Axios,' +
                    ' reselect, Typescript, SCSS, REST API',
                id: 1,
                filterValue: 'react',
            },
            {
                projectLink: 'https://discord-clone-redux-57a28.web.app/',
                image: discord,
                project: 'discord-clone',
                description: 'Technologies used: React, Redux, Matherial-Ui, SCSS, firebase',
                id: 2,
                filterValue: 'react',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/todo-list/',
                image: todoList,
                project: 'Todo list',
                description: 'Technologies used: React, Redux, React-redux, Redux-thunk, LocalStorage, SCSS',
                id: 3,
                filterValue: 'react',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/i-decision-games/',
                image: iDecision,
                project: 'i-decision-games',
                description: 'Technologies used: React, MobX, Axios, Matherial-Ui, SCSS, Rest API',
                id: 4,
                filterValue: 'react',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/blynk',
                image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                project: 'Blynk',
                description: 'Technologies used: React, Redux, React-redux, Redux-thunk, LocalStorage, SCSS',
                id: 5,
                filterValue: 'react',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/altertech',
                image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                project: 'Altertech',
                description: 'Technologies used: React, Redux, React-redux, Redux-thunk, LocalStorage, SCSS',
                id: 6,
                filterValue: 'react',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/counter/',
                image: counter,
                project: 'Counter',
                description: 'React application',
                id: 7,
                filterValue: 'react',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/Calculator/',
                image: calculator,
                project: 'Calculator',
                description: 'Bootstrap, JS, CSS application',
                id: 8,
                filterValue: 'react',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/Polind/',
                image: polind,
                project: 'Polind',
                description: 'Technologies used: HTML5, SCSS, JS, Jquery',
                id: 9,
                filterValue: 'landing',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/MoGo/',
                image: mogo,
                project: 'Mogo',
                description: 'Technologies used: HTML5, CSS, JS, Jquery',
                id: 10,
                filterValue: 'landing',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/AVE/',
                image: ave,
                project: 'AVE',
                description: 'Technologies used: HTML5, SCSS, JS, Jquery, Jquery validate',
                id: 11,
                filterValue: 'landing',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/Advocatus/',
                image: advocatus,
                project: 'Advocatus',
                description: 'Technologies used: HTML5, SCSS, JS, Jquery',
                id: 12,
                filterValue: 'landing',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/Privat-holidays/',
                image: privat,
                project: 'Privat-holidays',
                description: 'Technologies used: HTML5, CSS3 (scss), JS, Jquery, Jquery validate, Jquery datepicker',
                id: 13,
                filterValue: 'landing',
            },
            {
                projectLink: 'https://vitaliy-pidkivka.github.io/Zebra/',
                image: zebra,
                project: 'Zebra',
                description: 'Technologies used: HTML5, CSS3 (scss), JS, Jquery',
                id: 14,
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
                                    value={'React projects'}
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
                                .map(project => <Project key={project.id} {...project} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
