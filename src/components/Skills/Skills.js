import React from 'react';
import styles from './Skills.module.scss';
import Title from "../Shared/Title/Title";
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={styles.skills}>
            <div className="container">
                <div className="skills__inner">
                    <Title title="Skills"/>
                    <div className={styles.skills__list}>
                        <Skill
                            iconSrc="https://getdrawings.com/free-icon/react-icon-69.png"
                            skill="React"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, recusandae."
                        />
                        <Skill
                            iconSrc="https://b.kisscc0.com/20180815/zlq/kisscc0-computer-icons-logo-brand-javascript-angle-js-5b741783856f77.0690615715343348515466.png"
                            skill="JS"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, recusandae."
                        />
                        <Skill
                            iconSrc="https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/Git-512.png"
                            skill="Git"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, recusandae."
                        />
                        <Skill
                            iconSrc="https://habrastorage.org/webt/k-/tm/2g/k-tm2gvbb_ky6gdrd-tzqrzjkf4.png?v=1"
                            skill="Webpack"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, recusandae."
                        />
                        <Skill
                            iconSrc="https://cdn.iconscout.com/icon/free/png-256/gulp-3-1175163.png"
                            skill="Gulp"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, recusandae."
                        />
                        <Skill
                            iconSrc="https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-5-1/512/38-512.png"
                            skill="HTML"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, recusandae."
                        />
                        <Skill
                            iconSrc="https://lh3.googleusercontent.com/proxy/SGsjkfk5t3xh75zSGDI8YMmzxj2avtTXNgVEF0svEqbxpsD1hcl3pESdqV82iMvfIhOMdz2RoycLZqL1Ai_8TqSCHbNhH65HZx8TGFM49qt6FcrIvu7o"
                            skill="CSS"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, recusandae."
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
