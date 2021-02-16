import React from 'react';
import '../styles/main.scss';

import pp from '../assets/pp.svg';
import linkedin from '../assets/link.png';
import github from '../assets/git.png'

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header__profile">
                <div className="header__profile__img">
                    <img src={pp} alt="profile pic" width="150px" />
                </div>
                <div className="header__profile__text">
                    <h1>Mert Uygur</h1>
                    <h2>Front End Developer</h2>
                </div>
            </div>
            <div className="header__navigation">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </div>



            <div className="header__links">
                <a className="header__links__linkedin" href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank" rel="noreferrer" >
                    <img src={linkedin} alt="linkedin" width="50px" />
                </a>
                <a className="header__links__github" href="https://github.com/Mert18" target="_blank" rel="noreferrer" >
                    <img src={github} alt="github" width="50px" />
                </a>
            </div>
        </div>
    )

}

export default Header