import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    const [isActive, toggleMenu] = useState(false)

    return (
        <div className={`App ${isActive && `open-menu`}`}>
            <Header isActive={isActive} toggleMenu={toggleMenu}/>
            <Main/>
            <Skills/>
            <Projects/>
            <Slogan/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
