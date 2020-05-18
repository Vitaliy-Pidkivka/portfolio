import React from 'react';
import styles from './Skills.module.scss';
import Title from "../Shared/Title/Title";
import Skill from "./Skill/Skill";
import react from '../../assets/images/ico-react.png'
import html from '../../assets/images/ico-html.png'
import css from '../../assets/images/ico-css.png'
import js from '../../assets/images/ico-js.png'
import git from '../../assets/images/ico-git.png'
import gulp from  '../../assets/images/ico-gulp.png'
import webpack from  '../../assets/images/ico-webpack.png'
import bootstrap from  '../../assets/images/ico-bootstrap.png'
import jquery from  '../../assets/images/ico-jquery.png'

function Skills(props) {
    return (
        <div className={styles.skills}>
            <div className="container">
                <div className="skills__inner">
                    <Title title="Skills"/>
                    <div className={styles.skills__list}>
                        <Skill
                            iconSrc={react}
                            skill="React JS"
                            description="React, Redux, REST API, Context API, CSS modules"
                        />
                        <Skill
                            iconSrc={js}
                            skill="JS"
                            description="Experience with JS about 9 months. (ES5, ES6)"
                        />
                        <Skill
                            iconSrc={git}
                            skill="Git"
                            description="Commercial experience with git about 6 months"
                        />
                        <Skill
                            iconSrc={webpack}
                            skill="Webpack"
                            description="Only non-commercial experience"
                        />
                        <Skill
                            iconSrc={gulp}
                            skill="Gulp"
                            description="Gulp tasks, use it in real projects"
                        />
                        <Skill
                            iconSrc={html}
                            skill="HTML5"
                            description="Semantic layout, W3C validation"
                        />
                        <Skill
                            iconSrc={css}
                            skill="CSS3"
                            description="Sass\Scss, custom animations, responsive\mobile-first layout"
                        />
                        <Skill
                            iconSrc={bootstrap}
                            skill="Bootstrap"
                            description="Bootstrap breakpoints\components"
                        />
                        <Skill
                            iconSrc={jquery}
                            skill="Jquery"
                            description="Use jquery more then 6 months in real projects"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
