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

function Skills() {
    return (
        <div className={styles.skills}>
            <div className="container">
                <div className="skills__inner">
                    <Title title="Skills"/>
                    <div className={styles.skills__list}>
                        <Skill
                            iconSrc={react}
                            skill="React JS"
                            description="React, Redux, REST API, Context API, CSS modules, Material UI, Styled-component, redux-thunk, redux-form,
                            reselect, formik, TypeScript(basic)"
                        />
                        <Skill
                            iconSrc={js}
                            skill="JS"
                            description="ES6 - ES9"
                        />
                        <Skill
                            iconSrc={git}
                            skill="Git"
                            description="Commercial experience with git about 6 months (git + redmine)"
                        />
                        <Skill
                            iconSrc={webpack}
                            skill="Webpack"
                            description="Basic knowledge"
                        />
                        <Skill
                            iconSrc={gulp}
                            skill="Gulp"
                            description="Gulp tasks"
                        />
                        <Skill
                            iconSrc={html}
                            skill="HTML5"
                            description="Semantic layout, BEM methodology, W3C valid code, pixel perfect markup"
                        />
                        <Skill
                            iconSrc={css}
                            skill="CSS3"
                            description="Sass\Scss, custom animations, responsive\mobile-first layout"
                        />
                        <Skill
                            iconSrc={bootstrap}
                            skill="Bootstrap"
                            description="Bootstrap 4"
                        />
                        <Skill
                            iconSrc={jquery}
                            skill="Jquery"
                            description="Fluent user"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
