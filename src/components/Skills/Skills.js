import React from 'react';
import styles from './Skills.module.scss';
import Title from "../Shared/Title/Title";
import Skill from "./Skill/Skill";


function Skills(props) {
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
                            iconSrc="https://www.stickpng.com/assets/images/5847f981cef1014c0b5e48be.png"
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
                            iconSrc="https://webref.ru/assets/images/book/css.png"
                            skill="CSS"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, recusandae."
                        />
                        <Skill
                            iconSrc="https://www.pinclipart.com/picdir/big/35-353932_bootstrap-bootstrap-4-logo-png-clipart.png"
                            skill="Bootstrap"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, recusandae."
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
