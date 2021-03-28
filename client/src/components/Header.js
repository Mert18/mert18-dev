import React from 'react';
import '../styles/main.scss';

import linkedin from '../assets/other/link.png';
import github from '../assets/other/git.png'

import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">

            <div className="header__navigation">
                <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                <NavLink to="/about" activeClassName="selected">About</NavLink>
                <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
                <NavLink to="/art" activeClassName="selected">Art</NavLink>
                <NavLink to="/posts" activeClassName="selected">Blog</NavLink>
            </div>



            <div className="header__links">
                <a className="header__links__linkedin" href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" width="40px" />
                </a>
                <a className="header__links__github" href="https://github.com/Mert18" target="_blank" rel="noreferrer" >
                    <img src={github} alt="github" width="40px" />
                </a>
            </div>
        </div>
    )

}

export default Header